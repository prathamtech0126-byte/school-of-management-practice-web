import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Bell, ChevronDown, Menu, X } from 'lucide-react'
import { USER_NAV } from '../../constants/navigation'
import { Logo } from '../shared/Logo'
import { Avatar } from '../ui/Avatar'

export function UserTopNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-lg p-2 text-ink-secondary transition-all duration-200 hover:bg-surface md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link to="/portal/dashboard" onClick={() => setOpen(false)}>
            <Logo />
          </Link>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {USER_NAV.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `inline-flex items-center gap-1 text-sm font-medium transition-all duration-200 ${
                  isActive ? 'text-primary' : 'text-ink-secondary hover:text-ink'
                }`
              }
            >
              {item.label}
              {item.hasDropdown ? <ChevronDown className="h-4 w-4 opacity-60" /> : null}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-full p-2 text-ink-secondary transition-all duration-200 hover:bg-surface"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
          </button>
          <div className="hidden items-center gap-2 sm:flex">
            <Avatar name="John Doe" size="md" />
            <div className="leading-tight">
              <p className="text-sm font-semibold text-ink">John Doe</p>
              <p className="text-xs text-ink-secondary">Acme Corporation</p>
            </div>
          </div>
          <div className="sm:hidden">
            <Avatar name="John Doe" size="md" />
          </div>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-white px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-1">
            {USER_NAV.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive ? 'bg-green-50 text-primary' : 'text-ink hover:bg-surface'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
