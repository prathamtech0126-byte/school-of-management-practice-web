import { Link } from 'react-router-dom'
import { SITE_PATHS } from '../../../site/constants/routes'
import { Card } from '../../ui/Card'
import { MARKETING_SECTORS } from '../../../site/constants/sectors'

export function PopularSectorsSection() {
  return (
    <section id="sectors" className="scroll-mt-20 bg-surface py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-bold text-site-navy sm:text-3xl">Popular sectors</h2>
            <p className="mt-2 max-w-xl text-sm text-ink-secondary">
              Industry clusters where digital credentials and standards matter most.
            </p>
          </div>
          <Link
            to="/verify"
            className="shrink-0 text-sm font-semibold text-site-red transition-all duration-200 hover:text-site-red-dark"
          >
            Verify a certificate
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {MARKETING_SECTORS.map((s) => (
            <Card
              key={s.name}
              padding="md"
              className="group flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-200 group-hover:scale-105 ${s.accent}`}
              >
                <s.icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
              </span>
              <p className="mt-4 text-sm font-bold text-ink">{s.name}</p>
              <p className="mt-1 text-xs text-ink-secondary">{s.count}</p>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink-secondary">
          Looking for structured learning paths?{' '}
          <Link to={SITE_PATHS.courses} className="font-semibold text-site-red hover:text-site-red-dark">
            Browse all courses
          </Link>
        </p>
      </div>
    </section>
  )
}
