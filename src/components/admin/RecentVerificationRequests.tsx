import { Link } from 'react-router-dom'
import { MOCK_CERTIFICATES } from '../../constants/mockData'
import { Avatar } from '../ui/Avatar'
import { StatusBadge } from '../shared/StatusBadge'

const REQUESTS = [
  {
    company: 'Acme Corporation',
    requestedBy: 'SGS India',
    status: 'verified' as const,
    date: '24 May 2024',
  },
  {
    company: 'Globex Solutions',
    requestedBy: 'Bureau Veritas',
    status: 'pre-approved' as const,
    date: '23 May 2024',
  },
  {
    company: 'Innotech Pvt Ltd',
    requestedBy: 'TÜV Rheinland',
    status: 'pending' as const,
    date: '22 May 2024',
  },
]

export function RecentVerificationRequests() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-ink">Recent Verification Requests</h3>
      <p className="mt-1 text-sm text-ink-secondary">Latest third-party lookups</p>
      <ul className="mt-4 flex-1 divide-y divide-border">
        {REQUESTS.map((req) => {
          const cert = MOCK_CERTIFICATES.find((c) => c.clientName === req.company)
          return (
            <li
              key={req.company}
              className="flex items-center justify-between gap-3 py-4 first:pt-0"
            >
              <div className="flex min-w-0 items-center gap-3">
                <Avatar name={req.company} size="md" />
                <div className="min-w-0">
                  <p className="truncate font-medium text-ink">{req.company}</p>
                  <p className="truncate text-xs text-ink-secondary">
                    Requested by: {req.requestedBy}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-1">
                <StatusBadge status={cert?.status ?? req.status} />
                <span className="text-xs text-ink-muted">{req.date}</span>
              </div>
            </li>
          )
        })}
      </ul>
      <div className="mt-4 border-t border-border pt-4">
        <Link
          to="/admin/logs"
          className="text-sm font-semibold text-blue-600 transition-all duration-200 hover:text-blue-800"
        >
          View All
        </Link>
      </div>
    </div>
  )
}
