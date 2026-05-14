import { Link } from 'react-router-dom'
import { SITE_PATHS } from '../../../site/constants/routes'
import { SchoolLogo } from '../SchoolLogo'

export function MarketingFooter() {
  return (
    <footer className="border-t border-border bg-site-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <SchoolLogo variant="footer" className="mb-3" />
            <p className="text-lg font-bold">CertiVerify</p>
            <p className="mt-2 text-sm text-white/70">
              Certificate management and third-party verification for teams that need proof, not paperwork.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/50">Explore</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link to={SITE_PATHS.courses} className="text-white/80 transition-all duration-200 hover:text-white">
                  Courses
                </Link>
              </li>
              <li>
                <Link to={SITE_PATHS.about} className="text-white/80 transition-all duration-200 hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link to={SITE_PATHS.contact} className="text-white/80 transition-all duration-200 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/verify" className="font-medium text-site-red transition-all duration-200 hover:text-white">
                  Verify a certificate
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/50">Portals</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link to="/admin/dashboard" className="text-white/80 transition-all duration-200 hover:text-white">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} CertiVerify. All rights reserved.</p>
          <p className="text-xs text-white/50">
            Support:{' '}
            <a
              href="mailto:hello@certiverify.example"
              className="font-medium text-site-red underline-offset-2 hover:underline"
            >
              hello@certiverify.example
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
