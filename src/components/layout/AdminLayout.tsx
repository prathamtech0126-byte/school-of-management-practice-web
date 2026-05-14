import { Outlet } from 'react-router-dom'
import { useAdminAuth } from '../../context/useAdminAuth'
import { AdminLogin } from '../../pages/admin/AdminLogin'
import { AdminTopbar } from '../admin/AdminTopbar'
import { Sidebar } from '../admin/Sidebar'

export function AdminLayout() {
  const { authenticated } = useAdminAuth()

  if (!authenticated) {
    return <AdminLogin />
  }

  return (
    <div className="flex h-screen min-h-0 w-full bg-surface">
      <Sidebar />
      <div className="flex min-h-0 min-w-0 flex-1 flex-col">
        <AdminTopbar />
        <main className="min-h-0 flex-1 overflow-y-auto p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
