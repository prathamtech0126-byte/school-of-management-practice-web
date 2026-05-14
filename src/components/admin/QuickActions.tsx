import {
  Activity,
  Building,
  CheckSquare,
  Download,
  FilePlus,
  UserCog,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card } from '../ui/Card'

const ACTIONS: {
  label: string
  to: string
  icon: typeof FilePlus
  color: string
}[] = [
  { label: 'Create Certificate', to: '/admin/certificates', icon: FilePlus, color: 'text-blue-600 bg-blue-50' },
  { label: 'Approve Certificate', to: '/admin/applications', icon: CheckSquare, color: 'text-green-600 bg-green-50' },
  { label: 'Manage Users', to: '/admin/users', icon: UserCog, color: 'text-indigo-600 bg-indigo-50' },
  { label: 'Add Third Party', to: '/admin/third-parties', icon: Building, color: 'text-amber-600 bg-amber-50' },
  { label: 'Verification Logs', to: '/admin/logs', icon: Activity, color: 'text-cyan-600 bg-cyan-50' },
  { label: 'Generate Report', to: '/admin/reports', icon: Download, color: 'text-purple-600 bg-purple-50' },
]

export function QuickActions() {
  return (
    <section className="mt-8">
      <h3 className="text-lg font-semibold text-ink">Quick Actions</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {ACTIONS.map((action) => (
          <Link key={action.label} to={action.to} className="group block">
            <Card className="flex h-32 flex-col items-center justify-center gap-2 p-3 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:h-36 sm:gap-3 sm:p-4">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${action.color} transition-all duration-200 group-hover:scale-105`}
              >
                <action.icon className="h-6 w-6" aria-hidden />
              </span>
              <span className="text-sm font-semibold text-ink">{action.label}</span>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
