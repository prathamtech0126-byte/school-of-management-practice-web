import { useState } from 'react'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'

export function ContactUsPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="bg-surface py-12 lg:py-16">
      <div className="mx-auto max-w-xl px-4 lg:px-8">
        <h1 className="text-3xl font-bold text-site-navy">Contact us</h1>
        <p className="mt-2 text-sm text-ink-secondary">
          Send a message to our team. This demo does not deliver email yet—we will wire your backend here later.
        </p>

        <Card className="mt-8">
          {sent ? (
            <p className="text-sm font-medium text-site-red">Thanks — your message has been recorded will reply soon.</p>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="text-xs font-medium text-ink-secondary">
                  Name
                </label>
                <Input
                  id="contact-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 focus:!border-site-navy focus:!ring-site-navy/25"
                  required
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-xs font-medium text-ink-secondary">
                  Email
                </label>
                <Input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 focus:!border-site-navy focus:!ring-site-navy/25"
                  required
                  autoComplete="email"
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
                  placeholder="How can we help?"
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                className="w-full !bg-site-red hover:!bg-site-red-dark sm:w-auto"
              >
                Send message
              </Button>
            </form>
          )}
        </Card>
      </div>
    </div>
  )
}
