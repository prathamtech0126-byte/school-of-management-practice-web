import { Star } from 'lucide-react'
import { Card } from '../../components/ui/Card'

export function AboutUsPage() {
  return (
    <div className="bg-surface py-12 lg:py-16">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <h1 className="text-3xl font-bold text-site-navy">About School of Maintenance Practices</h1>
        <p className="mt-2 text-sm text-ink-secondary">
          ONGC&apos;s technical training institute in Vadodara, Gujarat — building maintenance capability across
          disciplines.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-ink-secondary">
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 font-medium text-amber-800">
            <Star className="h-4 w-4 fill-amber-500 text-amber-500" aria-hidden />
            4.7 · Google reviews
          </span>
          <span className="rounded-full bg-surface px-3 py-1 font-medium ring-1 ring-border">Government office</span>
          <span className="rounded-full bg-surface px-3 py-1 font-medium ring-1 ring-border">
            Vadodara, Gujarat
          </span>
        </div>

        <Card className="mt-8 space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-ink">Who we are</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
              The <strong className="font-medium text-ink">School of Maintenance Practices (SMP)</strong> is an
              ONGC training institute near Central Workshop, Tarsali, Vadodara. We deliver hands-on and classroom
              programs for maintenance engineers and technicians across mechanical, electrical, instrumentation,
              reliability, and maintenance management — supporting safe, reliable operations in the field.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">What we offer</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
              Structured learning paths aligned to plant equipment and industry standards: rotating equipment,
              pumps and compressors, hydraulics and pneumatics, condition monitoring, preventive and predictive
              maintenance, planning and scheduling, and safety in maintenance. Programs are designed for ONGC
              personnel and partners who need practical skills for day-to-day maintenance work.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
