import { useState } from 'react'
import { MOCK_VERIFICATION_LOGS } from '../../constants/mockData'
import { useCertificateByCode } from '../../hooks/useCertificates'
import { CertificateVerifiedResult } from '../../components/verification/CertificateVerifiedResult'
import { HowItWorks } from '../../components/verification/HowItWorks'
import { VerifyForm } from '../../components/verification/VerifyForm'
import { VerifyHero } from '../../components/verification/VerifyHero'
import { Card } from '../../components/ui/Card'

const DETAIL = {
  verifiedOn: '24 May 2024 10:30 AM',
  verifiedBy: 'Third Party Verification System',
  ipAddress: MOCK_VERIFICATION_LOGS[0]?.ipAddress ?? '—',
  remarks: MOCK_VERIFICATION_LOGS[0]?.remarks ?? '—',
}

export interface VerifyCertificateProps {
  initialCode?: string
}

export function VerifyCertificate({ initialCode = '' }: VerifyCertificateProps) {
  const [code, setCode] = useState(initialCode)
  const [lookup, setLookup] = useState('')
  const [loading, setLoading] = useState(false)
  const match = useCertificateByCode(lookup)

  const handleVerify = () => {
    setLoading(true)
    window.setTimeout(() => {
      setLookup(code.trim())
      setLoading(false)
    }, 400)
  }

  return (
    <div className="space-y-10">
      <div className="flex justify-center">
        <span className="rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
          Third Party Verification
        </span>
      </div>
      <VerifyHero>
        <VerifyForm value={code} onChange={setCode} onSubmit={handleVerify} loading={loading} />
      </VerifyHero>

      {lookup && match ? (
        <>
          <CertificateVerifiedResult certificate={match} />
          <Card className="flex flex-col gap-6 border-border shadow-sm md:flex-row md:items-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-300">
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
              <h2 className="text-lg font-bold text-ink dark:text-gray-100">Verification Details</h2>
              <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-ink-secondary dark:text-gray-400">
                    Verified On
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-ink dark:text-gray-100">
                    {DETAIL.verifiedOn}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-ink-secondary dark:text-gray-400">
                    Verified By
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-ink dark:text-gray-100">
                    {DETAIL.verifiedBy}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-ink-secondary dark:text-gray-400">
                    IP Address
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-ink dark:text-gray-100">
                    {DETAIL.ipAddress}
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-xs font-medium uppercase tracking-wide text-ink-secondary dark:text-gray-400">
                    Remarks
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-ink dark:text-gray-100">
                    {DETAIL.remarks}
                  </dd>
                </div>
              </dl>
            </div>
          </Card>
        </>
      ) : null}

      {lookup && !match ? (
        <Card className="border-red-200 bg-red-50">
          <p className="text-sm font-medium text-red-800">
            No certificate found for that verification code. Please check the code and try again.
          </p>
        </Card>
      ) : null}

      <HowItWorks />
    </div>
  )
}
