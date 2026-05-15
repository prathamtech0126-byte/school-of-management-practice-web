import { Link } from 'react-router-dom'
import { SITE_PATHS } from '../../../site/constants/routes'
import {
  MARKETING_COURSES,
  MARKETING_HOME_COURSES_PREVIEW_LIMIT,
} from '../../../site/constants/courses'
import { SiteSectionHeader } from './SiteSectionHeader'
import { CourseCompactCard } from './CourseCompactCard'

export function PopularCoursesSection() {
  const limit = Math.min(MARKETING_HOME_COURSES_PREVIEW_LIMIT, MARKETING_COURSES.length)
  const preview = MARKETING_COURSES.slice(0, limit)
  const gridClass =
    limit <= 4
      ? 'grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4'
      : 'grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5'

  return (
    <section className="scroll-mt-20 bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <SiteSectionHeader
          title="Popular courses"
          subtitle="Hands-on and classroom programs in industrial maintenance, reliability, and maintenance management."
          action={
            <Link
              to={SITE_PATHS.courses}
              className="text-sm font-semibold text-site-red transition-all duration-200 hover:text-site-red-dark"
            >
              View all courses
            </Link>
          }
        />

        <div className={`mt-10 ${gridClass}`}>
          {preview.map((c) => (
            <CourseCompactCard key={c.id} course={c} />
          ))}
        </div>
      </div>
    </section>
  )
}
