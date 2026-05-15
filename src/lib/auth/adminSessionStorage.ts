export const ADMIN_AUTH_STORAGE_KEY = 'cv_admin_auth'

export type AdminSession = {
  token: string
  email?: string
}

export function readAdminSession(): AdminSession | null {
  if (typeof window === 'undefined') return null
  const raw = sessionStorage.getItem(ADMIN_AUTH_STORAGE_KEY)
  if (!raw) return null
  try {
    const parsed = JSON.parse(raw) as unknown
    if (!parsed || typeof parsed !== 'object') return null
    const token = (parsed as { token?: unknown }).token
    if (typeof token !== 'string' || token.length === 0) return null
    const email = (parsed as { email?: unknown }).email
    return {
      token,
      email: typeof email === 'string' ? email : undefined,
    }
  } catch {
    return null
  }
}

export function writeAdminSession(session: AdminSession): void {
  sessionStorage.setItem(ADMIN_AUTH_STORAGE_KEY, JSON.stringify(session))
}

export function clearAdminSession(): void {
  sessionStorage.removeItem(ADMIN_AUTH_STORAGE_KEY)
}

export function hasAdminSession(): boolean {
  return readAdminSession() !== null
}
