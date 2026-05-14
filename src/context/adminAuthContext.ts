import { createContext } from 'react'

export const ADMIN_SESSION_STORAGE_KEY = 'cv_admin_session'

export type AdminAuthContextValue = {
  authenticated: boolean
  login: () => void
  logout: () => void
}

export const AdminAuthContext = createContext<AdminAuthContextValue | null>(null)
