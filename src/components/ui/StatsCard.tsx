import type { ReactNode } from 'react'

export interface StatsCardProps {
  title: string
  value: string | number
  change: string
  changePositive: boolean
  icon?: ReactNode
}

export function StatsCard({
  title,
  value,
  change,
  changePositive,
  icon,
}: StatsCardProps) {
  return (
    <div className="rounded-xl border border-border bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-ink-secondary">{title}</p>
        {icon ? <span className="text-ink-muted">{icon}</span> : null}
      </div>
      <p className="mt-2 text-3xl font-bold tracking-tight text-ink">{value}</p>
      <p
        className={`mt-1 text-sm font-medium ${changePositive ? 'text-green-600' : 'text-red-600'}`}
      >
        {change} from last month
      </p>
    </div>
  )
}
