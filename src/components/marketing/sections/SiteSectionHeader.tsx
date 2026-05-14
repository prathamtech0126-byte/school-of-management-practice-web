import type { ReactNode } from 'react'

export interface SiteSectionHeaderProps {
  title: string
  subtitle?: string
  action?: ReactNode
}

export function SiteSectionHeader({ title, subtitle, action }: SiteSectionHeaderProps) {
  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <h2 className="text-2xl font-bold text-site-navy sm:text-3xl">{title}</h2>
        {subtitle ? <p className="mt-2 max-w-xl text-sm text-ink-secondary">{subtitle}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}
