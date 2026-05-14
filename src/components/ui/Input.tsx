import type { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export function Input({ className = '', error, id, ...rest }: InputProps) {
  const inputId = id ?? rest.name
  return (
    <div className="w-full">
      <input
        id={inputId}
        className={`w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-ink shadow-sm outline-none transition-all duration-200 placeholder:text-ink-muted focus:border-primary focus:ring-2 focus:ring-primary/20 ${error ? 'border-red-500 focus:ring-red-200' : ''} ${className}`}
        {...rest}
      />
      {error ? (
        <p className="mt-1 text-xs text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
