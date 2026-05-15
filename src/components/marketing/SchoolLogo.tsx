import schoolLogoSvg from '../../assets/school logo.svg?url'

export interface SchoolLogoProps {
  /** Header: compact. Hero: larger mark above headline. */
  variant?: 'header' | 'hero' | 'footer'
  className?: string
}

const variantClass: Record<NonNullable<SchoolLogoProps['variant']>, string> = {
  header:
    'h-12 w-auto max-h-[52px] max-w-[240px] object-contain object-left sm:h-[52px] lg:h-14 lg:max-h-[58px] lg:max-w-[260px]',
  hero: 'h-24 w-auto max-w-xs object-contain sm:h-28 lg:h-32 lg:max-w-sm',
  footer: 'h-10 w-auto max-w-[160px] object-contain opacity-95',
}

export function SchoolLogo({ variant = 'header', className = '' }: SchoolLogoProps) {
  return (
    <img
      src={schoolLogoSvg}
      alt="School of Maintenance Practices"
      className={`${variantClass[variant]} ${className}`.trim()}
      decoding="async"
    />
  )
}
