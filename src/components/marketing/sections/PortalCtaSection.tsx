import { Link } from 'react-router-dom'
import { SITE_PATHS } from '../../../site/constants/routes'

export function PortalCtaSection() {
  return (
    <section className="border-y border-border bg-surface py-12">
      <div className="mx-auto max-w-6xl px-4 text-center lg:px-8">
        <h2 className="text-xl font-bold text-site-navy sm:text-2xl">Interested in our maintenance programs?</h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-ink-secondary">
          Ask about course dates, prerequisites, or custom training for your team.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            to={SITE_PATHS.contact}
            className="inline-flex items-center justify-center rounded-xl bg-site-navy px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-site-navy-dark"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
