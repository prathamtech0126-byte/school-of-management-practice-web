import { HelpCircle } from 'lucide-react'
import { CertificateHistory } from '../../components/user/CertificateHistory'
import { MyCertificatesList } from '../../components/user/MyCertificatesList'
import { QRCodeSection } from '../../components/user/QRCodeSection'
import { VerificationCodeSection } from '../../components/user/VerificationCodeSection'
import { WelcomeBanner } from '../../components/user/WelcomeBanner'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'

export function UserDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          User / Client Portal
        </span>
      </div>
      <WelcomeBanner />
      <MyCertificatesList />
      <div className="grid gap-6 lg:grid-cols-2">
        <VerificationCodeSection />
        <QRCodeSection />
      </div>
      <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
        <div className="lg:col-span-2">
          <CertificateHistory />
        </div>
        <div className="lg:col-span-1">
          <Card className="flex h-full min-h-[200px] flex-col justify-between bg-emerald-50/80 ring-1 ring-emerald-100">
            <div className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm ring-1 ring-border">
                <HelpCircle className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-ink">Need Help?</h3>
                <p className="mt-2 text-sm text-ink-secondary">
                  If you have any questions, contact our support team.
                </p>
              </div>
            </div>
            <Button variant="secondary" className="mt-6 w-full" type="button">
              Contact Support
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
