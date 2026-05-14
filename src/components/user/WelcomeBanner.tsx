export function WelcomeBanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-700 to-green-500 p-8 text-white shadow-md">
      <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">Welcome, John Doe</h1>
          <p className="mt-2 max-w-xl text-sm text-white/90 sm:text-base">
            Manage and download your verified certificates
          </p>
          <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-primary shadow-sm ring-1 ring-black/5">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" aria-hidden>
              <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
              <path
                d="M9 12l2 2 4-4"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Verified Client
          </span>
        </div>
        <div className="relative hidden h-44 justify-end lg:flex" aria-hidden>
          <div className="relative flex h-40 w-64 items-center justify-center">
            <div className="absolute left-4 top-6 h-28 w-40 rounded-lg bg-white/95 shadow-lg ring-1 ring-black/5" />
            <div className="absolute left-10 top-2 h-28 w-40 rounded-lg bg-white/80 shadow-md ring-1 ring-white/40" />
            <svg
              className="relative z-10 h-24 w-24 text-white drop-shadow-lg"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" fill="white" fillOpacity="0.25" />
              <line x1="16" y1="16" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path
                d="M12 3L5 7v5c0 4 2.5 7.5 7 9 4.5-1.5 7-5 7-9V7l-7-4z"
                fill="currentColor"
                fillOpacity="0.35"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
