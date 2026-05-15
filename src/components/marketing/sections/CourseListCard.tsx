import { Star, Users } from 'lucide-react'
import type { MarketingCourse } from '../../../site/constants/courses'
import { Card } from '../../ui/Card'

export interface CourseListCardProps {
  course: MarketingCourse
}

export function CourseListCard({ course }: CourseListCardProps) {
  const Icon = course.icon

  return (
    <Card
      padding="md"
      className="flex flex-col gap-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:items-stretch"
    >
      <span
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl shadow-inner ring-1 ring-black/5 ${course.accent}`}
        aria-hidden
      >
        <Icon className="h-7 w-7" strokeWidth={1.75} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-bold leading-snug text-ink">{course.title}</p>
        <p className="mt-1 text-sm text-ink-secondary">{course.coverage}</p>
        <p className="mt-1 text-xs text-ink-secondary/80">{course.provider}</p>
        <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-ink-secondary">
          <span className="inline-flex items-center gap-1.5">
            <Users className="h-4 w-4 text-site-navy" aria-hidden />
            <span className="font-medium text-ink">{course.learners}</span> learners
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
            <span className="font-semibold text-ink">{course.rating}</span>
          </span>
        </div>
      </div>
    </Card>
  )
}
