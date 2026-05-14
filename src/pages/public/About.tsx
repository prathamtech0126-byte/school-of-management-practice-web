import { PageHeader } from '../../components/shared/PageHeader'
import { Card } from '../../components/ui/Card'

export function About() {
  return (
    <Card>
      <PageHeader title="About CertiVerify" subtitle="Coming soon" />
      <p className="text-sm text-ink-secondary">Company and product information will appear here.</p>
    </Card>
  )
}
