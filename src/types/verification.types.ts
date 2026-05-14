import type { Certificate } from './certificate.types'

export interface VerificationLookupResult {
  certificate: Certificate
  verifiedOn: string
  verifiedBy: string
  ipAddress: string
  remarks: string
}
