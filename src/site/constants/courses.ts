import type { LucideIcon } from 'lucide-react'
import {
  AlertTriangle,
  Apple,
  Award,
  ClipboardList,
  HardHat,
  Leaf,
  RefreshCw,
  Shield,
  Stethoscope,
  Zap,
} from 'lucide-react'

export interface MarketingCourse {
  id: string
  title: string
  provider: string
  learners: string
  rating: string
  swatch: string
  icon: LucideIcon
  accent: string
}

/** How many courses show on the marketing home “Popular courses” row — set to 4, 5, or up to 10. */
export const MARKETING_HOME_COURSES_PREVIEW_LIMIT = 10

export const MARKETING_COURSES: MarketingCourse[] = [
  {
    id: '1',
    title: 'ISO 9001:2015 – Quality Management',
    provider: 'SGS India',
    learners: '1,245',
    rating: '4.8',
    swatch: 'bg-emerald-500',
    icon: Award,
    accent: 'bg-emerald-50 text-emerald-600',
  },
  {
    id: '2',
    title: 'ISO 27001:2022 – Information Security',
    provider: 'Bureau Veritas',
    learners: '982',
    rating: '4.9',
    swatch: 'bg-indigo-500',
    icon: Shield,
    accent: 'bg-indigo-50 text-indigo-600',
  },
  {
    id: '3',
    title: 'ISO 14001:2015 – Environmental Management',
    provider: 'TÜV Rheinland',
    learners: '756',
    rating: '4.7',
    swatch: 'bg-teal-500',
    icon: Leaf,
    accent: 'bg-teal-50 text-teal-600',
  },
  {
    id: '4',
    title: 'ISO 45001:2018 – Occupational Health & Safety',
    provider: 'SGS India',
    learners: '612',
    rating: '4.8',
    swatch: 'bg-amber-500',
    icon: HardHat,
    accent: 'bg-amber-50 text-amber-600',
  },
  {
    id: '5',
    title: 'ISO 22000:2018 – Food Safety Management',
    provider: 'Intertek',
    learners: '534',
    rating: '4.6',
    swatch: 'bg-rose-500',
    icon: Apple,
    accent: 'bg-rose-50 text-rose-600',
  },
  {
    id: '6',
    title: 'ISO 50001:2018 – Energy Management',
    provider: 'DNV',
    learners: '421',
    rating: '4.7',
    swatch: 'bg-cyan-500',
    icon: Zap,
    accent: 'bg-sky-50 text-sky-600',
  },
  {
    id: '7',
    title: 'ISO 31000:2018 – Risk Management Guidelines',
    provider: 'Bureau Veritas',
    learners: '389',
    rating: '4.5',
    swatch: 'bg-violet-500',
    icon: AlertTriangle,
    accent: 'bg-violet-50 text-violet-600',
  },
  {
    id: '8',
    title: 'ISO 22301:2019 – Business Continuity',
    provider: 'SGS India',
    learners: '298',
    rating: '4.8',
    swatch: 'bg-slate-500',
    icon: RefreshCw,
    accent: 'bg-slate-50 text-slate-600',
  },
  {
    id: '9',
    title: 'ISO 19011:2018 – Auditing Management Systems',
    provider: 'DNV',
    learners: '267',
    rating: '4.7',
    swatch: 'bg-orange-500',
    icon: ClipboardList,
    accent: 'bg-orange-50 text-orange-600',
  },
  {
    id: '10',
    title: 'ISO 13485:2016 – Medical Devices QMS',
    provider: 'TÜV Rheinland',
    learners: '198',
    rating: '4.9',
    swatch: 'bg-blue-500',
    icon: Stethoscope,
    accent: 'bg-blue-50 text-blue-600',
  },
]
