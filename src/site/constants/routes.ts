/** Public marketing site paths — use these instead of string literals for scalable routing. */
export const SITE_PATHS = {
  home: '/',
  courses: '/courses',
  about: '/about',
  contact: '/contact',
} as const

export type SitePath = (typeof SITE_PATHS)[keyof typeof SITE_PATHS]
