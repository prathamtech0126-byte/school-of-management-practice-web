import { useState } from 'react'
import { useAdminAuth } from '../../context/useAdminAuth'
import { Logo } from '../../components/shared/Logo'

export function AdminLogin() {
  const { login } = useAdminAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    const trimmedEmail = email.trim()
    if (!trimmedEmail || !password) {
      setError('Enter email and password.')
      return
    }
    login()
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-border bg-white p-8 shadow-lg">
        <div className="flex justify-center">
          <Logo variant="default" />
        </div>
        <h1 className="mt-6 text-center text-xl font-bold text-ink">Admin sign in</h1>
        <p className="mt-2 text-center text-sm text-ink-secondary">
          Sign in to open the admin dashboard. This demo accepts any email and password.
        </p>
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="admin-email" className="block text-sm font-medium text-ink">
              Email
            </label>
            <input
              id="admin-email"
              type="email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-ink outline-none ring-site-navy/20 transition focus:border-site-navy focus:ring-2"
              placeholder="you@organization.com"
            />
          </div>
          <div>
            <label htmlFor="admin-password" className="block text-sm font-medium text-ink">
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-ink outline-none ring-site-navy/20 transition focus:border-site-navy focus:ring-2"
              placeholder="••••••••"
            />
          </div>
          {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
          <button
            type="submit"
            className="w-full rounded-xl bg-site-navy py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-site-navy-dark"
          >
            Continue to admin
          </button>
        </form>
      </div>
    </div>
  )
}
