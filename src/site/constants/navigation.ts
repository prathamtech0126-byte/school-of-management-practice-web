import { SITE_PATHS } from './routes'

export interface SiteNavItem {
  label: string
  to: string
}

export const SITE_MAIN_NAV: SiteNavItem[] = [
  { label: 'Home', to: SITE_PATHS.home },
  { label: 'Courses', to: SITE_PATHS.courses },
  { label: 'About Us', to: SITE_PATHS.about },
  { label: 'Contact Us', to: SITE_PATHS.contact },
  { label: 'Verify Certificate', to: '/verify' },
]
