import {
  aboutCommitment,
  aboutIndustryFocus,
  aboutIndustryProgramsIntro,
  aboutIndustryRelevant,
  aboutIntroParagraphs,
  aboutMission,
  aboutPracticalLearning,
  aboutProgramsClosing,
  aboutTrainingAreas,
  aboutVision,
  aboutWhatWeOfferIntro,
} from '../../content/aboutSmp'
import { Card } from '../../components/ui/Card'

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg font-semibold text-site-navy">{children}</h2>
}

function BodyText({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{children}</p>
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm leading-relaxed text-ink-secondary">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-site-red" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function AboutUsPage() {
  return (
    <div className="bg-surface py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <h1 className="text-3xl font-bold text-site-navy">About Us</h1>
        <p className="mt-2 text-sm text-ink-secondary">
          School of Maintenance Practices (SMP) — Vadodara, Gujarat
        </p>

        <Card className="mt-8 space-y-4">
          {aboutIntroParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="text-sm leading-relaxed text-ink-secondary">
              {paragraph}
            </p>
          ))}
        </Card>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Card>
            <SectionTitle>Our Mission</SectionTitle>
            <BodyText>{aboutMission}</BodyText>
          </Card>
          <Card>
            <SectionTitle>Our Vision</SectionTitle>
            <BodyText>{aboutVision}</BodyText>
          </Card>
        </div>

        <Card className="mt-8">
          <SectionTitle>What We Offer</SectionTitle>
          <BodyText>{aboutWhatWeOfferIntro}</BodyText>
          <BulletList items={aboutTrainingAreas} />
          <BodyText>{aboutProgramsClosing}</BodyText>
        </Card>

        <Card className="mt-8">
          <SectionTitle>Practical Learning Environment</SectionTitle>
          {aboutPracticalLearning.map((paragraph) => (
            <BodyText key={paragraph.slice(0, 48)}>{paragraph}</BodyText>
          ))}
        </Card>

        <Card className="mt-8">
          <SectionTitle>Industry-Relevant Training</SectionTitle>
          <BodyText>{aboutIndustryRelevant}</BodyText>
          <BodyText>{aboutIndustryProgramsIntro}</BodyText>
          <BulletList items={aboutIndustryFocus} />
        </Card>

        <Card className="mt-8">
          <SectionTitle>Commitment to Excellence</SectionTitle>
          <BodyText>{aboutCommitment}</BodyText>
        </Card>
      </div>
    </div>
  )
}
