import { Clock, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  contactAddress,
  contactEmail,
  contactFormNote,
  contactHours,
  contactInstituteName,
  contactIntro,
  contactSuccessMessage,
  contactWebsite,
} from '../../content/contactSmp'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Input } from '../../components/ui/Input'
import { getApiErrorMessage, submitContactEnquiry } from '../../lib/api'

function ContactDetail({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Mail
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-site-navy/5 text-site-navy">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{label}</p>
        <div className="mt-1 text-sm leading-relaxed text-ink-secondary">{children}</div>
      </div>
    </div>
  )
}

export function ContactUsPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [successMessage, setSuccessMessage] = useState(contactSuccessMessage)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSubmitting(true)
    try {
      const result = await submitContactEnquiry({
        fullName: name,
        email,
        subject,
        message,
      })
      setSuccessMessage(
        result.message?.trim() || contactSuccessMessage,
      )
      setSent(true)
    } catch (err) {
      setError(getApiErrorMessage(err, 'Unable to send your enquiry. Please try again.'))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-surface py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <h1 className="text-3xl font-bold text-site-navy">Contact us</h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-secondary">{contactIntro}</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-5">
          <Card className="space-y-6 lg:col-span-2">
            <div>
              <p className="text-sm font-semibold text-site-navy">{contactInstituteName}</p>
              <p className="mt-1 text-xs text-ink-secondary">Vadodara, Gujarat</p>
            </div>

            <ContactDetail icon={MapPin} label="Address">
              <address className="not-italic">
                {contactAddress.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${contactAddress.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block font-medium text-site-red hover:underline"
              >
                Get directions
              </a>
            </ContactDetail>

            <ContactDetail icon={Mail} label="Email">
              <a href={`mailto:${contactEmail}`} className="font-medium text-site-red hover:underline">
                {contactEmail}
              </a>
            </ContactDetail>

            <ContactDetail icon={Clock} label="Office hours">
              <p>{contactHours}</p>
            </ContactDetail>

            <p className="border-t border-border pt-4 text-xs leading-relaxed text-ink-secondary">
              Website:{' '}
              <a
                href={contactWebsite}
                className="font-medium text-site-red hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                sompindia.org
              </a>
              <br />
              <span className="mt-2 inline-block">
                To verify a training certificate, visit{' '}
                <Link to="/verify" className="font-medium text-site-red hover:underline">
                  certificate verification
                </Link>
                .
              </span>
            </p>
          </Card>

          <Card className="lg:col-span-3">
            <h2 className="text-lg font-semibold text-site-navy">Send an enquiry</h2>
            <p className="mt-2 text-sm text-ink-secondary">{contactFormNote}</p>

            {sent ? (
              <p className="mt-6 text-sm font-medium leading-relaxed text-site-navy">{successMessage}</p>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                {error ? (
                  <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
                    {error}
                  </p>
                ) : null}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="text-xs font-medium text-ink-secondary">
                      Full name
                    </label>
                    <Input
                      id="contact-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1 focus:!border-site-navy focus:!ring-site-navy/25"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-xs font-medium text-ink-secondary">
                      Email address
                    </label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 focus:!border-site-navy focus:!ring-site-navy/25"
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-subject" className="text-xs font-medium text-ink-secondary">
                    Subject
                  </label>
                  <Input
                    id="contact-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="mt-1 focus:!border-site-navy focus:!ring-site-navy/25"
                    required
                    placeholder="e.g. Course enquiry, certificate verification"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="text-xs font-medium text-ink-secondary">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="mt-1 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-ink shadow-sm outline-none transition-all duration-200 placeholder:text-ink-muted focus:border-site-navy focus:ring-2 focus:ring-site-navy/20"
                    placeholder="Describe your enquiry — training program, dates, group registration, or other questions."
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  disabled={submitting}
                  className="w-full !bg-site-red hover:!bg-site-red-dark sm:w-auto disabled:opacity-60"
                >
                  {submitting ? 'Sending…' : 'Send message'}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
