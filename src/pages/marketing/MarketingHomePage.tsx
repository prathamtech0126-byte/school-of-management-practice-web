import { MarketingHero } from '../../components/marketing/layout/MarketingHero'
import { PortalCtaSection } from '../../components/marketing/sections/PortalCtaSection'
import { PopularCoursesSection } from '../../components/marketing/sections/PopularCoursesSection'
import { PopularSectorsSection } from '../../components/marketing/sections/PopularSectorsSection'

export function MarketingHomePage() {
  return (
    <>
      <MarketingHero />
      <PopularSectorsSection />
      <PopularCoursesSection />
      <PortalCtaSection />
    </>
  )
}
