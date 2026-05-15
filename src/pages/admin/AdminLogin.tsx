import { useState } from 'react'
import { useAdminAuth } from '../../context/useAdminAuth'
import { SchoolLogo } from '../../components/marketing/SchoolLogo'
import { Link } from 'react-router-dom'
import { SITE_PATHS } from '../../site/constants/routes'
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
          <Link to={SITE_PATHS.home}>
            <SchoolLogo variant="header" />
          </Link>
        </div>
        <h1 className="mt-6 text-center text-xl font-bold text-site-navy">Admin sign in</h1>
        <p className="mt-2 text-center text-sm text-ink-secondary">
          School of Maintenance Practices — sign in to manage students, certificates, and verification records.
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
