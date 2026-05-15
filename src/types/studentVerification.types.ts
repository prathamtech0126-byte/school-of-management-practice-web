export type StudentVerificationCertificate = {
  id: string
  certificateUrl: string
  createdAt: string
}

export type StudentVerificationResponse = {
  ok: boolean
  verified: boolean
  fullName?: string
  courseName?: string
  instituteName?: string
  verificationId?: string
  certificates?: StudentVerificationCertificate[]
}
