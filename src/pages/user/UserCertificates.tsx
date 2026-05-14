import { PageHeader } from '../../components/shared/PageHeader'
import { Card } from '../../components/ui/Card'

export function UserCertificates() {
  return (
    <Card>
      <PageHeader title="My Certificates" subtitle="Coming soon" />
      <p className="text-sm text-ink-secondary">Your full certificate library will appear here.</p>
    </Card>
  )
}
