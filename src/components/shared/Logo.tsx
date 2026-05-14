export interface LogoProps {
  variant?: 'default' | 'sidebar' | 'compact' | 'public'
  className?: string
}

export function Logo({ variant = 'default', className = '' }: LogoProps) {
  const isSidebar = variant === 'sidebar'
  const isPublic = variant === 'public'
  const textClass = variant === 'sidebar' ? 'text-white' : 'text-ink'
  const textVisibility =
    variant === 'sidebar'
      ? 'max-lg:hidden'
      : variant === 'compact'
        ? 'hidden lg:inline'
        : ''

  const iconBg = isSidebar || variant === 'default' ? 'bg-primary' : isPublic ? 'bg-blue-600' : 'bg-primary'

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconBg}`}
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none">
          <path
            d="M12 2L4 6v6c0 5.25 3.5 9.74 8 11 4.5-1.26 8-5.75 8-11V6l-8-4z"
            fill="currentColor"
            opacity="0.15"
          />
          <path
            d="M12 2L4 6v6c0 5.25 3.5 9.74 8 11 4.5-1.26 8-5.75 8-11V6l-8-4z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M9 12l2 2 4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className={`font-bold tracking-tight ${textVisibility} ${textClass}`}>
        CertiVerify
      </span>
    </div>
  )
}
