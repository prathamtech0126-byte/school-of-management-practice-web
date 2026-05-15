import { Link } from 'react-router-dom'
import { aboutIntroParagraphs, aboutMission, aboutVision } from '../../content/aboutSmp'
import { PageHeader } from '../../components/shared/PageHeader'
import { Card } from '../../components/ui/Card'

export function About() {
  return (
    <Card className="space-y-4">
      <PageHeader
        title="About School of Maintenance Practices"
        subtitle="Vadodara, Gujarat — technical training for maintenance professionals"
      />
      {aboutIntroParagraphs.slice(0, 2).map((paragraph) => (
        <p key={paragraph.slice(0, 48)} className="text-sm leading-relaxed text-ink-secondary">
          {paragraph}
        </p>
      ))}
      <div className="space-y-3 border-t border-border pt-4">
        <p className="text-sm leading-relaxed text-ink-secondary">
          <strong className="font-medium text-ink">Mission:</strong> {aboutMission}
        </p>
        <p className="text-sm leading-relaxed text-ink-secondary">
          <strong className="font-medium text-ink">Vision:</strong> {aboutVision}
        </p>
      </div>
      <p className="text-sm text-ink-secondary">
        <Link to="/about" className="font-medium text-site-red hover:underline">
          Read the full About Us page
        </Link>
      </p>
    </Card>
  )
}
