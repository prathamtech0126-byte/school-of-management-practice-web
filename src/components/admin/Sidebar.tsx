import { NavLink } from 'react-router-dom'
import { ADMIN_NAV } from '../../constants/navigation'
import { Logo } from '../shared/Logo'
import { Avatar } from '../ui/Avatar'

export function Sidebar() {
  return (
    <aside className="flex h-full w-[72px] shrink-0 flex-col bg-sidebar text-gray-300 transition-all duration-200 lg:w-[220px]">
      <div className="flex h-16 items-center border-b border-white/10 px-3 lg:px-4">
        <Logo variant="sidebar" className="min-w-0" />
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
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-gray-400 hover:bg-white/10 hover:text-white'
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
            <p className="truncate text-xs text-gray-400">Super Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
