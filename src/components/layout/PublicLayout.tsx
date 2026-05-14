import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import { PUBLIC_NAV } from '../../constants/navigation'
import { Logo } from '../shared/Logo'

export function PublicLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className="min-h-screen bg-surface pb-10 dark:bg-gray-950">
      <header className="border-b border-border bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
          <Link to="/verify" onClick={() => setMenuOpen(false)}>
            <Logo variant="public" />
          </Link>

          <nav className="hidden flex-1 justify-center gap-8 md:flex">
            {PUBLIC_NAV.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/verify'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-all duration-200 ${
                    isActive ? 'text-blue-600' : 'text-ink-secondary hover:text-ink'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setDark((d) => !d)}
              className="rounded-full p-2 text-ink-secondary transition-all duration-200 hover:bg-surface dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label={dark ? 'Light mode' : 'Dark mode'}
            >
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              type="button"
              className="rounded-lg p-2 text-ink-secondary transition-all duration-200 hover:bg-surface md:hidden dark:hover:bg-gray-800"
              aria-label="Menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="text-lg leading-none">☰</span>
            </button>
          </div>
        </div>
        {menuOpen ? (
          <div className="border-t border-border px-4 py-3 md:hidden dark:border-gray-800">
            <nav className="flex flex-col gap-1">
              {PUBLIC_NAV.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/verify'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive ? 'bg-blue-50 text-blue-600 dark:bg-gray-800' : 'text-ink'
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
      <main className="mx-auto max-w-5xl bg-white px-4 py-10 shadow-sm dark:bg-transparent lg:rounded-b-2xl lg:px-8">
        <Outlet />
      </main>
    </div>
  )
}
