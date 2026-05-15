import type { LucideIcon } from 'lucide-react'
import {
  Activity,
  CalendarClock,
  Gauge,
  ShieldAlert,
  Wrench,
  Zap,
} from 'lucide-react'

export interface MarketingSector {
  /** Stable id for URLs and course mapping */
  slug: string
  name: string
  count: string
  icon: LucideIcon
  accent: string
  /** Card hero image (Unsplash — replace with local assets if preferred) */
  imageSrc: string
  /** Short description for sector explore cards (2 lines in UI) */
  blurb: string
}

/** Program counts per training area — kept modest (4–10) for the public catalog. */
export const MARKETING_SECTORS: MarketingSector[] = [
  {
    slug: 'mechanical',
    name: 'Mechanical',
    count: '10 programs',
    icon: Wrench,
    accent: 'bg-slate-50 text-slate-700',
    imageSrc:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&h=500&q=80',
    blurb:
      'Rotating equipment, alignment, lubrication, seals, and hands-on repair practices for plant mechanical teams.',
  },
  {
    slug: 'electrical',
    name: 'Electrical',
    count: '8 programs',
    icon: Zap,
    accent: 'bg-amber-50 text-amber-600',
    imageSrc:
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&h=500&q=80',
    blurb:
      'Motors, drives, panels, safe isolation, and troubleshooting skills for industrial electrical maintenance.',
  },
  {
    slug: 'instrumentation',
    name: 'Instrumentation',
    count: '8 programs',
    icon: Gauge,
    accent: 'bg-sky-50 text-sky-600',
    imageSrc:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=500&q=80',
    blurb:
      'Sensors, control loops, automation, and process instrumentation used in modern production facilities.',
  },
  {
    slug: 'reliability',
    name: 'Reliability',
    count: '5 programs',
    icon: Activity,
    accent: 'bg-emerald-50 text-emerald-600',
    imageSrc:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=500&q=80',
    blurb:
      'Condition monitoring, vibration analysis, predictive methods, and root-cause work to improve asset uptime.',
  },
  {
    slug: 'maintenance-management',
    name: 'Maintenance management',
    count: '5 programs',
    icon: CalendarClock,
    accent: 'bg-violet-50 text-violet-600',
    imageSrc:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=500&q=80',
    blurb:
      'Planning, scheduling, shutdowns, CMMS workflows, and materials coordination for maintenance organizations.',
  },
  {
    slug: 'safety',
    name: 'Safety',
    count: '4 programs',
    icon: ShieldAlert,
    accent: 'bg-rose-50 text-rose-600',
    imageSrc:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&h=500&q=80',
    blurb:
      'Permits, energy isolation, tool and lifting safety, and standards for maintaining equipment without incidents.',
  },
]
