import { PageHeader } from '../../components/shared/PageHeader'
import { Card } from '../../components/ui/Card'

export function UserProfile() {
  return (
    <Card>
      <PageHeader title="Profile" subtitle="Coming soon" />
      <p className="text-sm text-ink-secondary">Profile settings will appear here.</p>
    </Card>
  )
}
