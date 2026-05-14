import type { HTMLAttributes, ReactNode } from 'react'

export type CardPadding = 'none' | 'sm' | 'md' | 'lg'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  padding?: CardPadding
}

const paddingMap: Record<CardPadding, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export function Card({
  children,
  className = '',
  padding = 'md',
  ...rest
}: CardProps) {
  return (
    <div
      className={`rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-200 ${paddingMap[padding]} ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}
