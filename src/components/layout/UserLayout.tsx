import { Outlet } from 'react-router-dom'
import { UserTopNav } from '../user/UserTopNav'

export function UserLayout() {
  return (
    <div className="min-h-screen bg-surface">
      <UserTopNav />
      <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
        <Outlet />
      </div>
    </div>
  )
}
