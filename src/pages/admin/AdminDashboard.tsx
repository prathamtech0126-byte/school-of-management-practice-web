import { DashboardStats } from '../../components/admin/DashboardStats'
import { QuickActions } from '../../components/admin/QuickActions'
import { RecentCertificatesTable } from '../../components/admin/RecentCertificatesTable'
import { RecentVerificationRequests } from '../../components/admin/RecentVerificationRequests'
import { VerificationOverviewChart } from '../../components/admin/VerificationOverviewChart'

export function AdminDashboard() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col items-center text-center">
        <span className="rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700">
          Admin Panel
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink">Dashboard</h1>
      </header>
      <DashboardStats />
      <RecentCertificatesTable />
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <VerificationOverviewChart />
        </div>
        <div className="lg:col-span-2">
          <RecentVerificationRequests />
        </div>
      </div>
      <QuickActions />
    </div>
  )
}
