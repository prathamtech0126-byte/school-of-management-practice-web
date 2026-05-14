import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { SchoolLogo } from '../SchoolLogo'
import { SITE_MAIN_NAV } from '../../../site/constants/navigation'

function useMarketingNavActive() {
  const { pathname } = useLocation()
  return (to: string) => pathname === to
}

function linkClassName(active: boolean) {
  return `relative text-sm font-medium transition-all duration-200 ${
    active
      ? 'font-semibold text-site-navy after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-site-red'
      : 'text-ink-secondary hover:text-site-navy'
  }`
}

export function MarketingHeader() {
  const [open, setOpen] = useState(false)
  const isActive = useMarketingNavActive()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 lg:h-[72px] lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2" onClick={() => setOpen(false)}>
          <SchoolLogo variant="header" />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {SITE_MAIN_NAV.map((item) => (
            <Link key={item.to} to={item.to} className={linkClassName(isActive(item.to))}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/admin/dashboard"
            className="hidden items-center justify-center rounded-lg bg-site-navy px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-site-navy-dark sm:inline-flex"
          >
            Admin login
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 text-ink-secondary transition-all duration-200 hover:bg-surface lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {SITE_MAIN_NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive(item.to) ? 'bg-site-red/10 text-site-red' : 'text-ink hover:bg-surface'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/admin/dashboard"
              className="mt-2 rounded-lg bg-site-navy px-3 py-2.5 text-center text-sm font-semibold text-white transition-all duration-200 hover:bg-site-navy-dark"
              onClick={() => setOpen(false)}
            >
              Admin login
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
