import { apiClient } from './client'

export type SubmitContactBody = {
  fullName: string
  email: string
  subject: string
  message: string
}

export type SubmitContactResponse = {
  ok: boolean
  message: string
  enquiryId?: string
}

/** POST /api/contact — public, no auth required */
export async function submitContactEnquiry(body: SubmitContactBody): Promise<SubmitContactResponse> {
  const { data } = await apiClient.post<SubmitContactResponse>('/api/contact', {
    fullName: body.fullName.trim(),
    email: body.email.trim(),
    subject: body.subject.trim(),
    message: body.message.trim(),
  })
  return data
}
