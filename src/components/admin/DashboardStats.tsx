import { ADMIN_STATS } from '../../constants/mockData'
import { StatsCard } from '../ui/StatsCard'

export function DashboardStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatsCard
        title="Total Certificates"
        value={ADMIN_STATS.totalCertificates.toLocaleString()}
        change="+12.5%"
        changePositive
      />
      <StatsCard
        title="Pre Approved"
        value={ADMIN_STATS.preApproved.toLocaleString()}
        change="+8.3%"
        changePositive
      />
      <StatsCard
        title="Verified"
        value={ADMIN_STATS.verified.toLocaleString()}
        change="+15.7%"
        changePositive
      />
      <StatsCard
        title="Pending"
        value={ADMIN_STATS.pending.toLocaleString()}
        change="-3.2%"
        changePositive={false}
      />
    </div>
  )
}
