import { useState } from 'react'
import { getStudentByVerificationId, getVerificationErrorMessage } from '../../lib/api'
import { resolveApiAssetUrl } from '../../lib/url/resolveApiAssetUrl'
import { HowItWorks } from '../../components/verification/HowItWorks'
import { VerifyForm } from '../../components/verification/VerifyForm'
import { VerifyHero } from '../../components/verification/VerifyHero'
import { Card } from '../../components/ui/Card'
import type { StudentVerificationResponse } from '../../types/studentVerification.types'

export interface VerifyCertificateProps {
  initialCode?: string
}

function formatCertificateWhen(iso: string): string {
  try {
    return new Date(iso).toLocaleString(undefined, {
      dateStyle: 'medium',
      timeStyle: 'short',
    })
  } catch {
    return iso
  }
}

export function VerifyCertificate({ initialCode = '' }: VerifyCertificateProps) {
  const [code, setCode] = useState(initialCode)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<StudentVerificationResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleVerify = async () => {
    const trimmed = code.trim()
    setError(null)
    setResult(null)
    if (!trimmed) {
      setError('Enter a verification code.')
      return
    }
    setLoading(true)
    try {
      const data = await getStudentByVerificationId(trimmed)
      setResult(data)
    } catch (err) {
      setError(getVerificationErrorMessage(err))
      setResult(null)
    } finally {
      setLoading(false)
    }
  }

  const showSuccess = result?.ok === true && result?.verified === true
  const showNotVerified = result !== null && (!result.ok || !result.verified)

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-12 lg:px-8 lg:py-16">
      <div className="flex justify-center">
        <span className="rounded-full bg-site-navy px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
          Third party verification
        </span>
      </div>
      <VerifyHero>
        <VerifyForm value={code} onChange={setCode} onSubmit={handleVerify} loading={loading} />
      </VerifyHero>

      {showSuccess && result ? (
        <Card className="flex flex-col gap-6 border-border shadow-sm md:flex-row md:items-start">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-site-navy/10 text-site-navy">
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" aria-hidden>
              <path
                d="M12 2L4 6v6c0 5.25 3.5 9.74 8 11 4.5-1.26 8-5.75 8-11V6l-8-4z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="currentColor"
                fillOpacity="0.15"
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
          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-bold text-site-navy">Verification details</h2>
            <p className="mt-1 text-sm text-ink-secondary">
              Record matched. Certificate files open in a new tab from the API host.
            </p>

            <dl className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-ink-secondary">
                  Status
                </dt>
                <dd className="mt-1 text-sm font-semibold text-emerald-700">Verified</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-ink-secondary">
                  Full name
                </dt>
                <dd className="mt-1 text-sm font-semibold text-ink">{result.fullName ?? '—'}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-ink-secondary">
                  Verification ID
                </dt>
                <dd className="mt-1 break-all text-sm font-semibold text-ink dark:text-gray-100">
                  {result.verificationId ?? '—'}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-ink-secondary">
                  Course name
                </dt>
                <dd className="mt-1 text-sm font-semibold text-ink">{result.courseName ?? '—'}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-ink-secondary">
                  Institute name
                </dt>
                <dd className="mt-1 text-sm font-semibold text-ink">
                  {result.instituteName ?? '—'}
                </dd>
              </div>
            </dl>

            {result.certificates && result.certificates.length > 0 ? (
              <div className="mt-8 border-t border-border pt-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-ink-secondary">
                  Certificates
                </h3>
                <ul className="mt-3 space-y-4">
                  {result.certificates.map((c) => {
                    const href = resolveApiAssetUrl(c.certificateUrl)
                    return (
                      <li
                        key={c.id}
                        className="flex flex-col gap-2 rounded-xl border border-border bg-surface/60 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wide text-ink-secondary">
                            Issued
                          </p>
                          <p className="mt-0.5 text-sm font-semibold text-ink">
                            {formatCertificateWhen(c.createdAt)}
                          </p>
                        </div>
                        {href ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-site-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-site-navy-dark"
                          >
                            View certificate
                          </a>
                        ) : null}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ) : (
              <p className="mt-6 text-sm text-ink-secondary">No certificate files on this record.</p>
            )}
          </div>
        </Card>
      ) : null}

      {error ? (
        <Card className="border-red-200 bg-red-50">
          <p className="text-sm font-medium text-red-800">{error}</p>
        </Card>
      ) : null}

      {showNotVerified ? (
        <Card className="border-amber-200 bg-amber-50">
          <p className="text-sm font-semibold text-amber-900">Record not verified</p>
          <p className="mt-1 text-sm text-amber-900/90">
            No active verification was returned for this code. Confirm the verification ID and try again.
          </p>
        </Card>
      ) : null}

      <HowItWorks />
    </div>
  )
}
