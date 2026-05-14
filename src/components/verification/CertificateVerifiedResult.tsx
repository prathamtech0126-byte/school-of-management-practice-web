import type { Certificate } from '../../types/certificate.types'
import { VerificationResult } from '../shared/VerificationResult'

export interface CertificateVerifiedResultProps {
  certificate: Certificate
}

export function CertificateVerifiedResult({ certificate }: CertificateVerifiedResultProps) {
  return (
    <VerificationResult
      certificate={certificate}
      headline="Certificate Verified"
      subline="This certificate is valid and pre-approved."
      clientNameLabel="Certificate Holder"
      publicDetails
    />
  )
}
