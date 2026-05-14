import type { Certificate } from '../../types/certificate.types'
import { statusLabel } from '../../utils/statusHelpers'
import { StatusBadge } from './StatusBadge'

export interface VerificationResultProps {
  certificate: Certificate
  headline?: string
  subline?: string
  className?: string
  clientNameLabel?: string
  /** When true, omits Status from the right-hand table (status remains on the left). Adds Issued By. */
  publicDetails?: boolean
}

export function VerificationResult({
  certificate,
  headline = 'Certificate Verified',
  subline = 'This certificate is valid and pre-approved.',
  className = '',
  clientNameLabel = 'Client Name',
  publicDetails = false,
}: VerificationResultProps) {
  const rows: { label: string; value: string; isStatus?: boolean }[] = publicDetails
    ? [
        { label: 'Certificate ID', value: certificate.id },
        {
          label: 'Certificate Name',
          value: `${certificate.type} – ${certificate.name}`,
        },
        { label: clientNameLabel, value: certificate.clientName },
        { label: 'Issued By', value: certificate.issuedBy },
        { label: 'Issued On', value: certificate.issuedOn },
        { label: 'Valid Until', value: certificate.validUntil },
      ]
    : [
        { label: 'Certificate ID', value: certificate.id },
        {
          label: 'Certificate Name',
          value: `${certificate.type} – ${certificate.name}`,
        },
        { label: clientNameLabel, value: certificate.clientName },
        { label: 'Status', value: '', isStatus: true },
        { label: 'Issued On', value: certificate.issuedOn },
        { label: 'Valid Until', value: certificate.validUntil },
      ]

  return (
    <div className={`rounded-xl border border-green-200 bg-white shadow-sm dark:border-green-900 dark:bg-gray-900 ${className}`}>
      <div className="grid gap-0 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-4 bg-green-50 p-8 text-center dark:bg-green-950/40">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-600 text-white shadow-inner">
            <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" aria-hidden>
              <path
                d="M12 2L4 6v6c0 5.25 3.5 9.74 8 11 4.5-1.26 8-5.75 8-11V6l-8-4z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="currentColor"
                fillOpacity="0.2"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-700 dark:text-green-400">{headline}</h3>
            <p className="mt-1 text-sm text-green-700/90 dark:text-green-300/90">{subline}</p>
          </div>
          {publicDetails ? (
            <span className="inline-flex items-center rounded-full border border-green-200 bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
              {statusLabel[certificate.status]}
            </span>
          ) : (
            <StatusBadge status={certificate.status} />
          )}
        </div>
        <div className="border-t border-green-100 p-6 dark:border-green-900 lg:border-l lg:border-t-0">
          <dl className="space-y-4">
            {rows.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between"
              >
                <dt className="text-sm text-ink-secondary dark:text-gray-400">{row.label}</dt>
                <dd className="text-right text-sm font-semibold text-ink sm:text-right dark:text-gray-100">
                  {row.isStatus ? (
                    <StatusBadge status={certificate.status} />
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
