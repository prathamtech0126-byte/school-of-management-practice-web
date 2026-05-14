import { Card } from '../ui/Card'
import { PageHeader } from '../shared/PageHeader'

const EVENTS = [
  {
    date: '24 May 2024',
    label: 'Certificate Issued',
    description: 'Your certificate was issued by SGS India.',
    tone: 'blue' as const,
  },
  {
    date: '23 May 2024',
    label: 'Pre Approved',
    description: 'Certificate marked as pre-approved pending final verification.',
    tone: 'orange' as const,
  },
  {
    date: '22 May 2024',
    label: 'Verified',
    description: 'Third-party verification completed successfully.',
    tone: 'green' as const,
  },
]

const dotClass = {
  blue: 'bg-blue-500',
  orange: 'bg-orange-500',
  green: 'bg-primary',
}

export function CertificateHistory() {
  return (
    <Card className="h-full">
      <PageHeader
        title="Certificate History"
        subtitle="Track your certificate status and verification history."
      />
      <ul className="relative mt-6 space-y-6 border-l border-border pl-6">
        {EVENTS.map((ev) => (
          <li key={ev.label} className="relative">
            <span
              className={`absolute -left-[29px] top-1.5 h-3 w-3 rounded-full ring-4 ring-white ${dotClass[ev.tone]}`}
            />
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              {ev.date}
            </p>
            <p className="mt-1 font-semibold text-ink">{ev.label}</p>
            <p className="mt-1 text-sm text-ink-secondary">{ev.description}</p>
          </li>
        ))}
      </ul>
    </Card>
  )
}
