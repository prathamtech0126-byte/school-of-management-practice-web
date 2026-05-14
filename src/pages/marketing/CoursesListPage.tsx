import { MARKETING_COURSES } from '../../site/constants/courses'
import { CourseListCard } from '../../components/marketing/sections/CourseListCard'
import { SiteSectionHeader } from '../../components/marketing/sections/SiteSectionHeader'

export function CoursesListPage() {
  return (
    <div className="bg-surface py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <SiteSectionHeader
          title="Courses"
          subtitle="Browse certificate programs from accredited partners. Counts and ratings are illustrative for this demo."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {MARKETING_COURSES.map((c) => (
            <CourseListCard key={c.id} course={c} />
          ))}
        </div>
      </div>
    </div>
  )
}
