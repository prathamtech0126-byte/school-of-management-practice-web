import { Link } from 'react-router-dom'
import { Card } from '../../components/ui/Card'
import { SITE_PATHS } from '../../site/constants/routes'

export function AboutUsPage() {
  return (
    <div className="bg-surface py-12 lg:py-16">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <h1 className="text-3xl font-bold text-site-navy">About CertiVerify</h1>
        <p className="mt-2 text-sm text-ink-secondary">Our mission, product, and who we serve.</p>

        <Card className="mt-8 space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-ink">What we do</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
              CertiVerify is a certificate lifecycle and verification platform. Administrators issue and audit
              credentials, clients manage their portfolio, and external parties can confirm authenticity with a
              single code—without email chains or PDF guesswork.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ink">Who it is for</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
              Compliance teams, training providers, certification bodies, and enterprises that need a consistent,
              scalable way to prove standards adherence across regions and auditors.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ink">Next steps</h2>
            <p className="mt-2 text-sm text-ink-secondary">
              Explore our{' '}
              <Link to={SITE_PATHS.courses} className="font-semibold text-site-red hover:text-site-red-dark">
                course catalog
              </Link>{' '}
              or{' '}
              <Link to={SITE_PATHS.contact} className="font-semibold text-site-red hover:text-site-red-dark">
                contact the team
              </Link>
              .
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
