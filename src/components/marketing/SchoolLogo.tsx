import schoolLogoSvg from '../../assets/school logo.svg?url'

export interface SchoolLogoProps {
  /** Header: compact. Hero: larger mark above headline. */
  variant?: 'header' | 'hero' | 'footer'
  className?: string
}

const variantClass: Record<NonNullable<SchoolLogoProps['variant']>, string> = {
  header: 'h-9 w-auto max-h-10 max-w-[180px] object-contain object-left',
  hero: 'h-24 w-auto max-w-xs object-contain sm:h-28 lg:h-32 lg:max-w-sm',
  footer: 'h-10 w-auto max-w-[160px] object-contain opacity-95',
}

export function SchoolLogo({ variant = 'header', className = '' }: SchoolLogoProps) {
  return (
    <img
      src={schoolLogoSvg}
      alt="CertiVerify"
      className={`${variantClass[variant]} ${className}`.trim()}
      decoding="async"
    />
  )
}
