import type { Certificate, VerificationLog } from '../types/certificate.types'

export const MOCK_CERTIFICATES: Certificate[] = [
  {
    id: 'CERT-2024-00124',
    clientName: 'Acme Corporation',
    type: 'ISO 9001:2015',
    name: 'Quality Management System',
    status: 'pre-approved',
    issuedOn: '24 May 2024',
    validUntil: '23 May 2027',
    issuedBy: 'SGS India',
    verificationCode: 'ACME-CERT-2024-00124',
  },
  {
    id: 'CERT-2024-00123',
    clientName: 'Globex Solutions',
    type: 'ISO 27001:2022',
    name: 'Information Security Management',
    status: 'verified',
    issuedOn: '23 May 2024',
    validUntil: '22 May 2027',
    issuedBy: 'Bureau Veritas',
    verificationCode: 'GLOB-CERT-2024-00123',
  },
  {
    id: 'CERT-2024-00122',
    clientName: 'Innotech Pvt Ltd',
    type: 'ISO 14001:2015',
    name: 'Environmental Management System',
    status: 'pre-approved',
    issuedOn: '23 May 2024',
    validUntil: '22 May 2027',
    issuedBy: 'TÜV Rheinland',
    verificationCode: 'INNO-CERT-2024-00122',
  },
  {
    id: 'CERT-2024-00121',
    clientName: 'Stark Industries',
    type: 'ISO 45001:2018',
    name: 'Occupational Health & Safety',
    status: 'pending',
    issuedOn: '22 May 2024',
    validUntil: '21 May 2027',
    issuedBy: 'SGS India',
    verificationCode: 'STARK-CERT-2024-00121',
  },
  {
    id: 'CERT-2024-00120',
    clientName: 'Wayne Enterprises',
    type: 'ISO 9001:2015',
    name: 'Quality Management System',
    status: 'verified',
    issuedOn: '21 May 2024',
    validUntil: '20 May 2027',
    issuedBy: 'Bureau Veritas',
    verificationCode: 'WAYNE-CERT-2024-00120',
  },
]

export const MOCK_VERIFICATION_LOGS: VerificationLog[] = [
  {
    verifiedBy: 'SGS India',
    verifiedOn: '24 May 2024',
    ipAddress: '203.122.45.67',
    remarks: 'Document verified successfully.',
    status: 'verified',
  },
  {
    verifiedBy: 'Bureau Veritas',
    verifiedOn: '20 May 2024',
    ipAddress: '198.51.100.12',
    remarks: 'Pre-approval granted.',
    status: 'verified',
  },
  {
    verifiedBy: 'TÜV Rheinland',
    verifiedOn: '18 May 2024',
    ipAddress: '192.0.2.55',
    remarks: 'Pre-approval pending full audit.',
    status: 'pre-approved',
  },
]

export const ADMIN_STATS = {
  totalCertificates: 1248,
  preApproved: 892,
  verified: 1102,
  pending: 146,
}
