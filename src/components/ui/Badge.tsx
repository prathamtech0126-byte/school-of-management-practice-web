import type { CertificateStatus } from '../../types/certificate.types'
import { statusColor, statusLabel } from '../../utils/statusHelpers'

export interface BadgeProps {
  status: CertificateStatus
  className?: string
}

export function Badge({ status, className = '' }: BadgeProps) {
  const label = statusLabel[status]
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize transition-all duration-200 ${statusColor[status]} ${className}`}
    >
      {label}
    </span>
  )
}
