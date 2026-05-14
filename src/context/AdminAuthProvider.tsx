import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { ADMIN_SESSION_STORAGE_KEY, AdminAuthContext } from './adminAuthContext'

function readStoredSession(): boolean {
  if (typeof window === 'undefined') return false
  return sessionStorage.getItem(ADMIN_SESSION_STORAGE_KEY) === '1'
}

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [authenticated, setAuthenticated] = useState(readStoredSession)

  const login = useCallback(() => {
    sessionStorage.setItem(ADMIN_SESSION_STORAGE_KEY, '1')
    setAuthenticated(true)
  }, [])

  const logout = useCallback(() => {
    sessionStorage.removeItem(ADMIN_SESSION_STORAGE_KEY)
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
