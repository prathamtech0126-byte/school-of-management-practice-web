import { useEffect, useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { MARKETING_COURSES } from '../../site/constants/courses'
import { MARKETING_SECTORS } from '../../site/constants/sectors'
import { CourseListCard } from '../../components/marketing/sections/CourseListCard'
import { SectorExploreCard } from '../../components/marketing/sections/SectorExploreCard'

export function CoursesListPage() {
  const [search, setSearch] = useState('')
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null)

  const filteredSectors = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return MARKETING_SECTORS
    return MARKETING_SECTORS.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.blurb.toLowerCase().includes(q) ||
        s.count.toLowerCase().includes(q),
    )
  }, [search])

  const filteredCourses = useMemo(() => {
    if (!selectedSlug) return MARKETING_COURSES
    return MARKETING_COURSES.filter((c) => c.sectorSlug === selectedSlug)
  }, [selectedSlug])

  const selectedSector = selectedSlug
    ? MARKETING_SECTORS.find((s) => s.slug === selectedSlug)
    : null

  useEffect(() => {
    if (selectedSlug && !filteredSectors.some((s) => s.slug === selectedSlug)) {
      setSelectedSlug(null)
    }
  }, [filteredSectors, selectedSlug])

  return (
    <div className="min-h-screen bg-surface pb-16 pt-10 sm:pt-14 lg:pt-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h1 className="text-center text-xl font-bold leading-snug text-site-navy sm:text-2xl lg:text-[1.65rem] lg:leading-tight">
          Please select a program area to explore maintenance courses
        </h1>

        <div className="relative mx-auto mt-8 max-w-2xl">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-secondary/70"
            aria-hidden
          />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search program areas"
            className="w-full rounded-2xl border border-border bg-white py-3.5 pl-12 pr-4 text-sm text-ink shadow-sm outline-none ring-site-navy/20 transition-all placeholder:text-ink-secondary/60 focus:border-site-navy/30 focus:ring-4"
            autoComplete="off"
            spellCheck={false}
          />
        </div>

        {filteredSectors.length === 0 ? (
          <p className="mt-10 text-center text-sm text-ink-secondary">No program areas match your search.</p>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredSectors.map((sector) => (
              <SectorExploreCard
                key={sector.slug}
                sector={sector}
                selected={selectedSlug === sector.slug}
                onSelect={() =>
                  setSelectedSlug((prev) => (prev === sector.slug ? null : sector.slug))
                }
              />
            ))}
          </div>
        )}

        <div className="mt-14 border-t border-border pt-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-site-navy sm:text-xl">
                {selectedSector ? `Programs — ${selectedSector.name}` : 'All programs'}
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-ink-secondary">
                {selectedSector
                  ? `Showing courses mapped to ${selectedSector.name}. Tap the same card again to clear the filter.`
                  : 'Select a program area above to filter this list, or browse the full catalog below.'}
              </p>
            </div>
            {selectedSlug ? (
              <button
                type="button"
                onClick={() => setSelectedSlug(null)}
                className="shrink-0 text-sm font-semibold text-site-red underline-offset-2 hover:underline"
              >
                Clear filter
              </button>
            ) : null}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {filteredCourses.map((c) => (
              <CourseListCard key={c.id} course={c} />
            ))}
          </div>

          {filteredCourses.length === 0 ? (
            <p className="mt-6 text-center text-sm text-ink-secondary">No courses in this area yet.</p>
          ) : null}
        </div>
      </div>
    </div>
  )
}
