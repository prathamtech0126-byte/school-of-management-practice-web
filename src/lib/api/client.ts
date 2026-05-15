import axios, { type AxiosError } from 'axios'
import { API_BASE_URL } from '../../config/env'
import { readAdminSession } from '../auth/adminSessionStorage'

/**
 * Shared Axios instance for all backend calls. Import this (or domain helpers in `lib/api/*`) from app code.
 */
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20_000,
})

apiClient.interceptors.request.use((config) => {
  const session = readAdminSession()
  if (session?.token) {
    config.headers.Authorization = `Bearer ${session.token}`
  }
  if (config.data instanceof FormData) {
    config.headers.delete('Content-Type')
  }
  return config
})

export function getApiErrorMessage(error: unknown, fallback = 'Something went wrong.'): string {
  if (!axios.isAxiosError(error)) {
    return error instanceof Error ? error.message : fallback
  }
  const ax = error as AxiosError<{ message?: string; error?: string }>
  const data = ax.response?.data
  if (data && typeof data === 'object') {
    if (typeof data.message === 'string' && data.message.trim()) return data.message.trim()
    if (typeof data.error === 'string' && data.error.trim()) return data.error.trim()
  }
  if (ax.response?.status === 401) return 'Invalid email or password.'
  if (ax.response?.status === 403) return 'You do not have permission to sign in.'
  if (ax.message) return ax.message
  return fallback
}
