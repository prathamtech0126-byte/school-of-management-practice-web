import type { LucideIcon } from 'lucide-react'
import {
  Award,
  BarChart2,
  Building2,
  CheckCircle,
  ClipboardList,
  FileText,
  LayoutDashboard,
  Settings,
  Users,
} from 'lucide-react'

export interface AdminNavItem {
  label: string
  path: string
  icon: LucideIcon
}

export const ADMIN_NAV: AdminNavItem[] = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Certificates', path: '/admin/certificates', icon: Award },
  { label: 'Applications', path: '/admin/applications', icon: FileText },
  { label: 'Users', path: '/admin/users', icon: Users },
  { label: 'Third Parties', path: '/admin/third-parties', icon: Building2 },
  { label: 'Verification Logs', path: '/admin/logs', icon: CheckCircle },
  { label: 'Settings', path: '/admin/settings', icon: Settings },
  { label: 'Audit Logs', path: '/admin/audit-logs', icon: ClipboardList },
  { label: 'Reports', path: '/admin/reports', icon: BarChart2 },
]

export interface UserNavItem {
  label: string
  path: string
  hasDropdown?: boolean
}

export const USER_NAV: UserNavItem[] = [
  { label: 'Dashboard', path: '/portal/dashboard' },
  { label: 'My Certificates', path: '/portal/certificates' },
  { label: 'Profile', path: '/portal/profile', hasDropdown: true },
  { label: 'Support', path: '/portal/support', hasDropdown: true },
]

export interface PublicNavItem {
  label: string
  path: string
}

export const PUBLIC_NAV: PublicNavItem[] = [
  { label: 'Verify Certificate', path: '/verify' },
  { label: 'How It Works', path: '/verify/how-it-works' },
  { label: 'About', path: '/verify/about' },
  { label: 'Help', path: '/verify/help' },
]
