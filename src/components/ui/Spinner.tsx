import type { HTMLAttributes } from 'react'

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  label?: string
}

export function Spinner({ className = '', label, ...rest }: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label={label ?? 'Loading'}
      className={`inline-block h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent ${className}`}
      {...rest}
    />
  )
}
