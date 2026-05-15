import { Outlet } from 'react-router-dom'
import { MarketingFooter } from './MarketingFooter'
import { MarketingHeader } from './MarketingHeader'

/** Shared chrome for public marketing pages and certificate verification. */
export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <MarketingHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <MarketingFooter />
    </div>
  )
}
