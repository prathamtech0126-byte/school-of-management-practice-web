import { Link } from 'react-router-dom'
import { Star, Users } from 'lucide-react'
import type { MarketingCourse } from '../../../site/constants/courses'
import { SITE_PATHS } from '../../../site/constants/routes'
import { Card } from '../../ui/Card'

export interface CourseCompactCardProps {
  course: MarketingCourse
}

export function CourseCompactCard({ course }: CourseCompactCardProps) {
  const Icon = course.icon

  return (
    <Link
      to={SITE_PATHS.courses}
      className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-site-navy focus-visible:ring-offset-2"
    >
      <Card
        padding="sm"
        className="group flex h-full flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
      >
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-200 group-hover:scale-105 ${course.accent}`}
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
        </span>
        <p className="mt-3 line-clamp-2 text-left text-xs font-bold leading-snug text-ink">{course.title}</p>
        <p className="mt-1 line-clamp-2 text-left text-[11px] leading-snug text-ink-secondary">{course.coverage}</p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-3 text-[11px] text-ink-secondary">
          <span className="inline-flex min-w-0 items-center gap-1">
            <Users className="h-3.5 w-3.5 shrink-0 text-site-navy" aria-hidden />
            <span className="truncate font-medium text-ink">{course.learners}</span>
          </span>
          <span className="inline-flex shrink-0 items-center gap-0.5">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden />
            <span className="font-semibold text-ink">{course.rating}</span>
          </span>
        </div>
      </Card>
    </Link>
  )
}
