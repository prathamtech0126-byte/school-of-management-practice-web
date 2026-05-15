import type { LucideIcon } from 'lucide-react'
import {
  CalendarClock,
  ClipboardCheck,
  Database,
  Droplets,
  Fan,
  Gauge,
  GitBranch,
  PackageSearch,
  RefreshCw,
  ShieldAlert,
  Wrench,
  Zap,
} from 'lucide-react'

export interface MarketingCourse {
  id: string
  /** Program area slug — matches `MarketingSector.slug` */
  sectorSlug: string
  title: string
  /** Issuing / hosting institute label */
  provider: string
  /** Short “what it covers” line for cards */
  coverage: string
  learners: string
  rating: string
  swatch: string
  icon: LucideIcon
  accent: string
}

/** How many courses show on the marketing home “Popular courses” row. */
export const MARKETING_HOME_COURSES_PREVIEW_LIMIT = 10

const smp = 'School of Maintenance Practices'

export const MARKETING_COURSES: MarketingCourse[] = [
  {
    id: '1',
    sectorSlug: 'mechanical',
    title: 'Mechanical maintenance',
    provider: smp,
    coverage: 'Bearings, gears, seals, alignment, lubrication, repair methods',
    learners: '32',
    rating: '4.8',
    swatch: 'bg-slate-500',
    icon: Wrench,
    accent: 'bg-slate-50 text-slate-700',
  },
  {
    id: '2',
    sectorSlug: 'electrical',
    title: 'Electrical maintenance',
    provider: smp,
    coverage: 'Motors, drives, control panels, fundamentals, troubleshooting',
    learners: '28',
    rating: '4.7',
    swatch: 'bg-amber-500',
    icon: Zap,
    accent: 'bg-amber-50 text-amber-600',
  },
  {
    id: '3',
    sectorSlug: 'instrumentation',
    title: 'Instrumentation & control',
    provider: smp,
    coverage: 'Sensors, loops, automation, process systems, rig instrumentation',
    learners: '24',
    rating: '4.8',
    swatch: 'bg-sky-500',
    icon: Gauge,
    accent: 'bg-sky-50 text-sky-600',
  },
  {
    id: '4',
    sectorSlug: 'mechanical',
    title: 'Hydraulics & pneumatics',
    provider: smp,
    coverage: 'Fluid power components, maintenance routines, diagnostics',
    learners: '22',
    rating: '4.6',
    swatch: 'bg-cyan-500',
    icon: Droplets,
    accent: 'bg-cyan-50 text-cyan-700',
  },
  {
    id: '5',
    sectorSlug: 'mechanical',
    title: 'Pumps & compressors maintenance',
    provider: smp,
    coverage: 'Centrifugal & plunger pumps, compressors, operating issues',
    learners: '20',
    rating: '4.7',
    swatch: 'bg-indigo-500',
    icon: Fan,
    accent: 'bg-indigo-50 text-indigo-600',
  },
  {
    id: '6',
    sectorSlug: 'reliability',
    title: 'Rotating equipment reliability',
    provider: smp,
    coverage: 'Vibration monitoring, balancing, condition monitoring, diagnostics',
    learners: '18',
    rating: '4.9',
    swatch: 'bg-emerald-500',
    icon: RefreshCw,
    accent: 'bg-emerald-50 text-emerald-600',
  },
  {
    id: '7',
    sectorSlug: 'reliability',
    title: 'Preventive & predictive maintenance',
    provider: smp,
    coverage: 'PM schedules, PdM methods, inspection planning, failure prevention',
    learners: '26',
    rating: '4.7',
    swatch: 'bg-teal-500',
    icon: ClipboardCheck,
    accent: 'bg-teal-50 text-teal-700',
  },
  {
    id: '8',
    sectorSlug: 'maintenance-management',
    title: 'Maintenance planning & scheduling',
    provider: smp,
    coverage: 'Job planning, work preparation, shutdowns, resource coordination',
    learners: '16',
    rating: '4.6',
    swatch: 'bg-violet-500',
    icon: CalendarClock,
    accent: 'bg-violet-50 text-violet-600',
  },
  {
    id: '9',
    sectorSlug: 'maintenance-management',
    title: 'CMMS / SAP PM',
    provider: smp,
    coverage: 'Work orders, asset records, planning systems, maintenance software',
    learners: '14',
    rating: '4.5',
    swatch: 'bg-blue-500',
    icon: Database,
    accent: 'bg-blue-50 text-blue-600',
  },
  {
    id: '10',
    sectorSlug: 'maintenance-management',
    title: 'Spare parts & warehouse management',
    provider: smp,
    coverage: 'Stock control, technical warehouse setup, materials management',
    learners: '12',
    rating: '4.6',
    swatch: 'bg-orange-500',
    icon: PackageSearch,
    accent: 'bg-orange-50 text-orange-600',
  },
  {
    id: '11',
    sectorSlug: 'reliability',
    title: 'Root cause analysis',
    provider: smp,
    coverage: 'Failure investigation, problem solving, reliability improvement',
    learners: '20',
    rating: '4.8',
    swatch: 'bg-red-500',
    icon: GitBranch,
    accent: 'bg-red-50 text-red-600',
  },
  {
    id: '12',
    sectorSlug: 'safety',
    title: 'Safety in maintenance',
    provider: smp,
    coverage: 'Hazards, isolation procedures, tool safety, maintenance standards',
    learners: '30',
    rating: '4.9',
    swatch: 'bg-rose-500',
    icon: ShieldAlert,
    accent: 'bg-rose-50 text-rose-600',
  },
]
