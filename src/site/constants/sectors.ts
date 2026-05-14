import type { LucideIcon } from 'lucide-react'
import { Building2, Car, Cpu, Monitor, Stethoscope, Zap } from 'lucide-react'

export interface MarketingSector {
  name: string
  count: string
  icon: LucideIcon
  accent: string
}

export const MARKETING_SECTORS: MarketingSector[] = [
  { name: 'IT-ITeS', count: '10 programs', icon: Monitor, accent: 'bg-emerald-50 text-emerald-600' },
  { name: 'Electronics', count: '8 programs', icon: Cpu, accent: 'bg-violet-50 text-violet-600' },
  { name: 'Healthcare', count: '6 programs', icon: Stethoscope, accent: 'bg-rose-50 text-rose-600' },
  { name: 'Automotive', count: '5 programs', icon: Car, accent: 'bg-amber-50 text-amber-600' },
  { name: 'Energy', count: '4 programs', icon: Zap, accent: 'bg-sky-50 text-sky-600' },
  { name: 'Construction', count: '4 programs', icon: Building2, accent: 'bg-orange-50 text-orange-600' },
]
