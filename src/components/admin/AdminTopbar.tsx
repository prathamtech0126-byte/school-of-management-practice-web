import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { useAdminAuth } from '../../context/useAdminAuth'
import { Avatar } from '../ui/Avatar'

const TITLE_MAP: Record<string, string> = {
  '/admin/dashboard': 'Dashboard',
  '/admin/certificates': 'Certificates',
  '/admin/applications': 'Applications',
  '/admin/users': 'Users',
  '/admin/third-parties': 'Third Parties',
  '/admin/logs': 'Verification Logs',
  '/admin/settings': 'Settings',
  '/admin/audit-logs': 'Audit Logs',
  '/admin/reports': 'Reports',
}

export function AdminTopbar() {
  const { pathname } = useLocation()
  const { logout } = useAdminAuth()
  const title = useMemo(() => TITLE_MAP[pathname] ?? 'Admin', [pathname])
  const showTopbarTitle = pathname !== '/admin/dashboard'

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-white px-4 lg:px-8">
      <div className="min-w-0 flex-1">
        {showTopbarTitle ? (
          <h1 className="truncate text-lg font-semibold text-ink">{title}</h1>
        ) : (
          <span className="sr-only">Admin dashboard</span>
        )}
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={logout}
          className="rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-ink-secondary transition hover:border-site-navy hover:text-site-navy"
        >
          Sign out
        </button>
        <div className="text-right leading-tight max-sm:hidden">
          <p className="text-sm font-semibold text-ink">Admin</p>
          <p className="text-xs text-ink-secondary">Super Administrator</p>
        </div>
        <Avatar name="Admin User" size="md" />
      </div>
    </header>
  )
}
