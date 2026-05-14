import { MOCK_CERTIFICATES } from '../../constants/mockData'
import { Card } from '../ui/Card'
import { PageHeader } from '../shared/PageHeader'

const code = encodeURIComponent(MOCK_CERTIFICATES[0]?.verificationCode ?? '')
const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${code}`

export function QRCodeSection() {
  return (
    <Card className="h-full">
      <PageHeader
        title="Verification QR Code"
        subtitle="Scan to verify your certificate instantly."
      />
      <div className="mt-4 flex justify-center">
        <div className="relative rounded-xl border border-border bg-white p-4 shadow-sm">
          <img src={qrSrc} alt="Verification QR code" width={160} height={160} className="block" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
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
        </div>
      </div>
    </Card>
  )
}
