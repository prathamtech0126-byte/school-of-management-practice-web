import { useCallback, useMemo, useState, type ReactNode } from 'react'
import type { AdminSession } from '../lib/auth/adminSessionStorage'
import { clearAdminSession, hasAdminSession, writeAdminSession } from '../lib/auth/adminSessionStorage'
import { AdminAuthContext } from './adminAuthContext'

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [authenticated, setAuthenticated] = useState(hasAdminSession)

  const login = useCallback((session: AdminSession) => {
    writeAdminSession(session)
    setAuthenticated(true)
  }, [])

  const logout = useCallback(() => {
    clearAdminSession()
    setAuthenticated(false)
  }, [])

  const value = useMemo(
    () => ({
      authenticated,
      login,
      logout,
    }),
    [authenticated, login, logout],
  )

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>
}
