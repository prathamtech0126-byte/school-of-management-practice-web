import { apiClient } from './client'

export type LoginRequestBody = {
  email: string
  password: string
}

function extractTokenFromLoginResponse(data: unknown): string | null {
  if (!data || typeof data !== 'object') return null
  const o = data as Record<string, unknown>

  if (typeof o.token === 'string' && o.token.length > 0) return o.token
  if (typeof o.accessToken === 'string' && o.accessToken.length > 0) return o.accessToken
  if (typeof o.access_token === 'string' && o.access_token.length > 0) return o.access_token

  const nested = o.data
  if (nested && typeof nested === 'object') {
    const d = nested as Record<string, unknown>
    if (typeof d.token === 'string' && d.token.length > 0) return d.token
    if (typeof d.accessToken === 'string' && d.accessToken.length > 0) return d.accessToken
  }

  const nestedUser = o.user
  if (nestedUser && typeof nestedUser === 'object') {
    const u = nestedUser as Record<string, unknown>
    if (typeof u.token === 'string' && u.token.length > 0) return u.token
  }

  return null
}

/**
 * POST /api/users/login — returns normalized token when the API wraps the token in common shapes.
 */
export async function loginUser(body: LoginRequestBody): Promise<{ token: string; raw: unknown }> {
  const { data } = await apiClient.post<unknown>('/api/users/login', {
    email: body.email,
    password: body.password,
  })
  const token = extractTokenFromLoginResponse(data)
  if (!token) {
    throw new Error('Login succeeded but no token was returned. Check the API response shape.')
  }
  return { token, raw: data }
}
