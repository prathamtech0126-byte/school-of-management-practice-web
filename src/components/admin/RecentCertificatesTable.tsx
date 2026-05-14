import { Link } from 'react-router-dom'
import { MOCK_CERTIFICATES } from '../../constants/mockData'
import type { Certificate } from '../../types/certificate.types'
import { PageHeader } from '../shared/PageHeader'
import { StatusBadge } from '../shared/StatusBadge'
import { Table } from '../ui/Table'

export function RecentCertificatesTable() {
  const columns = [
    {
      key: 'id',
      label: 'Certificate ID',
      render: (row: Certificate) => (
        <Link
          to={`/admin/certificates#${row.id}`}
          className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-800"
        >
          {row.id}
        </Link>
      ),
    },
    { key: 'clientName', label: 'Client Name' },
    { key: 'type', label: 'Type' },
    {
      key: 'status',
      label: 'Status',
      render: (row: Certificate) => <StatusBadge status={row.status} />,
    },
    { key: 'issuedOn', label: 'Issued On' },
  ]

  return (
    <section className="mt-8">
      <PageHeader
        title="Recent Certificates"
        action={
          <Link
            to="/admin/certificates"
            className="inline-flex items-center justify-center rounded-lg border border-primary bg-transparent px-4 py-2 text-sm font-medium text-primary transition-all duration-200 hover:bg-green-50"
          >
            View All
          </Link>
        }
      />
      <Table
        columns={columns}
        data={MOCK_CERTIFICATES}
        rowKey={(row) => row.id}
      />
    </section>
  )
}
