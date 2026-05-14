import type { CertificateStatus } from '../types/certificate.types'

export const statusLabel: Record<CertificateStatus, string> = {
  verified: 'Verified',
  'pre-approved': 'Pre Approved',
  pending: 'Pending',
  rejected: 'Rejected',
}

export const statusColor: Record<CertificateStatus, string> = {
  verified: 'bg-green-100 text-green-700 border-green-200',
  'pre-approved': 'bg-emerald-100 text-emerald-800 border-emerald-200',
  pending: 'bg-amber-100 text-amber-800 border-amber-200',
  rejected: 'bg-red-100 text-red-700 border-red-200',
}
