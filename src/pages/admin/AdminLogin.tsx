import { useState } from 'react'
import { useAdminAuth } from '../../context/useAdminAuth'
import { Logo } from '../../components/shared/Logo'
import { getApiErrorMessage, loginUser } from '../../lib/api'

export function AdminLogin() {
  const { login } = useAdminAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    const trimmedEmail = email.trim()
    if (!trimmedEmail || !password) {
      setError('Enter email and password.')
      return
    }
    setSubmitting(true)
    try {
      const { token } = await loginUser({ email: trimmedEmail, password })
      login({ token, email: trimmedEmail })
    } catch (err) {
      setError(getApiErrorMessage(err, 'Sign in failed. Please try again.'))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-border bg-white p-8 shadow-lg">
        <div className="flex justify-center">
          <Logo variant="default" />
        </div>
        <h1 className="mt-6 text-center text-xl font-bold text-ink">Admin sign in</h1>
        <p className="mt-2 text-center text-sm text-ink-secondary">
          Sign in with your account. The server must expose{' '}
          <code className="rounded bg-surface px-1 py-0.5 text-xs">POST /api/users/login</code> on the URL in{' '}
          <code className="rounded bg-surface px-1 py-0.5 text-xs">.env</code> (<code className="text-xs">VITE_API_BASE_URL</code>
          ).
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
              disabled={submitting}
              className="mt-1 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-ink outline-none ring-site-navy/20 transition focus:border-site-navy focus:ring-2 disabled:opacity-60"
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
              disabled={submitting}
              className="mt-1 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-ink outline-none ring-site-navy/20 transition focus:border-site-navy focus:ring-2 disabled:opacity-60"
              placeholder="••••••••"
            />
          </div>
          {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-xl bg-site-navy py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-site-navy-dark disabled:opacity-60"
          >
            {submitting ? 'Signing in…' : 'Continue to admin'}
          </button>
        </form>
      </div>
    </div>
  )
}
