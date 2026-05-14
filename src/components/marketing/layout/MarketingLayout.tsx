import { Outlet } from 'react-router-dom'
import { MarketingFooter } from './MarketingFooter'
import { MarketingHeader } from './MarketingHeader'

export function MarketingLayout() {
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
