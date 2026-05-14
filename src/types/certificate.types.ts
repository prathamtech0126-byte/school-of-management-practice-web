export type CertificateStatus =
  | 'verified'
  | 'pre-approved'
  | 'pending'
  | 'rejected'

export interface Certificate {
  id: string
  clientName: string
  type: string
  name: string
  status: CertificateStatus
  issuedOn: string
  validUntil: string
  issuedBy: string
  verificationCode: string
}

export interface VerificationLog {
  verifiedBy: string
  verifiedOn: string
  ipAddress: string
  remarks: string
  status: CertificateStatus
}
