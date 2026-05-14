import { Download, Share2 } from 'lucide-react'
import type { Certificate } from '../../types/certificate.types'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { StatusBadge } from './StatusBadge'

export interface CertificateCardProps {
  certificate: Certificate
  variant?: 'admin' | 'user'
  onPrimary?: () => void
  onSecondary?: () => void
}

function Thumbnail() {
  return (
    <div className="flex h-full min-h-[120px] w-full items-center justify-center rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 ring-1 ring-border sm:w-44">
      <svg viewBox="0 0 64 64" className="h-16 w-16 text-primary" aria-hidden>
        <path
          d="M32 6L10 18v16c0 12 9 22 22 26 13-4 22-14 22-26V18L32 6z"
          fill="currentColor"
          opacity="0.12"
        />
        <path
          d="M32 6L10 18v16c0 12 9 22 22 26 13-4 22-14 22-26V18L32 6z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M24 32l6 6 10-12"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export function CertificateCard({
  certificate,
  variant = 'admin',
  onPrimary,
  onSecondary,
}: CertificateCardProps) {
  const primaryLabel = variant === 'user' ? 'Download' : 'View Certificate'
  const secondaryLabel = 'Share Certificate'

  return (
    <Card className="overflow-hidden shadow-md ring-1 ring-gray-100">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
        <div className="shrink-0 lg:w-44">
          <Thumbnail />
        </div>
        <div className="min-w-0 flex-1 space-y-4">
          {variant === 'user' ? (
            <>
              <div className="flex flex-wrap items-start gap-3">
                <h3 className="text-lg font-semibold leading-snug text-ink">
                  {certificate.type} – {certificate.name}
                </h3>
                <StatusBadge status={certificate.status} className="shrink-0" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="text-xs font-medium text-ink-secondary">Certificate ID</p>
                  <p className="mt-0.5 text-sm font-semibold text-ink">{certificate.id}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-ink-secondary">Issued On</p>
                  <p className="mt-0.5 text-sm font-semibold text-ink">{certificate.issuedOn}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-ink-secondary">Valid Until</p>
                  <p className="mt-0.5 text-sm font-semibold text-ink">{certificate.validUntil}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-ink-secondary">Issued By</p>
                  <p className="mt-0.5 text-sm font-semibold text-ink">{certificate.issuedBy}</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-ink">
                    {certificate.type} – {certificate.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink-secondary">
                    Certificate ID:{' '}
                    <span className="font-medium text-ink">{certificate.id}</span>
                  </p>
                </div>
                <StatusBadge status={certificate.status} />
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-medium text-ink-secondary">Issued On</p>
                  <p className="text-sm font-semibold text-ink">{certificate.issuedOn}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-ink-secondary">Valid Until</p>
                  <p className="text-sm font-semibold text-ink">{certificate.validUntil}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-ink-secondary">Issued By</p>
                  <p className="text-sm font-semibold text-ink">{certificate.issuedBy}</p>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="flex shrink-0 flex-col gap-2 lg:w-44 lg:justify-center">
          <Button
            variant="primary"
            className="w-full"
            onClick={onPrimary}
            leftIcon={variant === 'user' ? <Download className="h-4 w-4" /> : undefined}
          >
            {primaryLabel}
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={onSecondary}
            leftIcon={variant === 'user' ? <Share2 className="h-4 w-4" /> : undefined}
          >
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </Card>
  )
}
