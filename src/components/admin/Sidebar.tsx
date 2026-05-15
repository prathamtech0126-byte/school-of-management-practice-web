import { Link, NavLink } from 'react-router-dom'
import { ADMIN_NAV } from '../../constants/navigation'
import { SchoolLogo } from '../marketing/SchoolLogo'
import { Avatar } from '../ui/Avatar'
import { SITE_PATHS } from '../../site/constants/routes'

export function Sidebar() {
  return (
    <aside className="flex h-full w-[72px] shrink-0 flex-col bg-site-navy text-white transition-all duration-200 lg:w-[220px]">
      <div className="flex h-16 items-center border-b border-white/10 px-3 lg:px-4">
        <Link to={SITE_PATHS.home} className="min-w-0" title="School of Maintenance Practices">
          <SchoolLogo variant="admin" />
        </Link>
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto p-2">
        {ADMIN_NAV.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/admin/dashboard'}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-site-red text-white shadow-sm'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`
            }
          >
            <item.icon className="h-5 w-5 shrink-0" aria-hidden />
            <span className="truncate max-lg:sr-only">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="border-t border-white/10 p-3">
        <div className="flex items-center gap-3 rounded-lg bg-white/5 p-2">
          <Avatar name="Admin User" size="md" />
          <div className="min-w-0 max-lg:hidden">
            <p className="truncate text-sm font-semibold text-white">Admin</p>
            <p className="truncate text-xs text-white/60">School of Maintenance Practices</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
