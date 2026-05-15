import { createContext } from 'react'
import type { AdminSession } from '../lib/auth/adminSessionStorage'

export type AdminAuthContextValue = {
  authenticated: boolean
  login: (session: AdminSession) => void
  logout: () => void
}

export const AdminAuthContext = createContext<AdminAuthContextValue | null>(null)
