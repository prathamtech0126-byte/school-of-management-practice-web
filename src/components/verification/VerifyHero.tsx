import type { ReactNode } from 'react'

export interface VerifyHeroProps {
  children?: ReactNode
}

export function VerifyHero({ children }: VerifyHeroProps) {
  return (
    <section className="rounded-2xl bg-gradient-to-br from-blue-50 to-slate-100 p-6 shadow-sm dark:from-gray-900 dark:to-gray-900/80 lg:p-10">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold text-ink dark:text-gray-100">Verify Certificate</h1>
          <p className="mt-3 text-sm text-ink-secondary dark:text-gray-400 sm:text-base">
            Enter the verification code provided by the certificate holder to verify its authenticity.
          </p>
          <div className="mt-6">{children}</div>
        </div>
        <div className="relative hidden h-48 justify-center lg:flex" aria-hidden>
          <svg viewBox="0 0 320 200" className="h-full w-full max-w-md text-slate-300">
            <rect x="40" y="40" width="120" height="150" rx="8" fill="white" stroke="currentColor" />
            <rect x="60" y="20" width="120" height="150" rx="8" fill="white" stroke="currentColor" />
            <circle cx="220" cy="90" r="36" fill="#dbeafe" stroke="#3b82f6" strokeWidth="3" />
            <line x1="248" y1="118" x2="280" y2="150" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" />
            <circle cx="230" cy="80" r="14" fill="white" stroke="#3b82f6" strokeWidth="3" />
            <g transform="translate(200 120)">
              <path
                d="M24 4L8 12v8c0 8 6 14 16 16 10-2 16-8 16-16v-8L24 4z"
                fill="#16a34a"
                opacity="0.9"
              />
              <path d="M20 18l4 4 8-8" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
