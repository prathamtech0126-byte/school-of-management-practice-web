import type { ImgHTMLAttributes } from 'react'

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  name: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
}

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function Avatar({ name, src, alt, size = 'md', className = '', ...rest }: AvatarProps) {
  const base = `inline-flex items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700 ${sizeMap[size]} ${className}`
  if (src) {
    return (
      <img
        src={src}
        alt={alt ?? name}
        className={`rounded-full object-cover ${sizeMap[size]} ${className}`}
        {...rest}
      />
    )
  }
  return (
    <span className={base} aria-hidden>
      {initials(name)}
    </span>
  )
}
