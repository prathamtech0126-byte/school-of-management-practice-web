import { Link } from 'react-router-dom'
import { useCertificates } from '../../hooks/useCertificates'
import { CertificateCard } from '../shared/CertificateCard'
import { PageHeader } from '../shared/PageHeader'

export function MyCertificatesList() {
  const certs = useCertificates()
  return (
    <section className="mt-10">
      <PageHeader
        title="My Certificates"
        subtitle="View, download and share your verified certificates."
        action={
          <Link
            to="/portal/certificates"
            className="inline-flex items-center justify-center rounded-lg border border-primary bg-transparent px-4 py-2 text-sm font-medium text-primary transition-all duration-200 hover:bg-green-50"
          >
            View All
          </Link>
        }
      />
      <div className="space-y-4">
        {certs.map((c) => (
          <CertificateCard key={c.id} certificate={c} variant="user" />
        ))}
      </div>
    </section>
  )
}
