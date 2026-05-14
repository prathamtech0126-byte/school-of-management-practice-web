import { useSearchParams } from 'react-router-dom'
import { VerifyCertificate } from './VerifyCertificate'

export function VerifyCertificateEntry() {
  const [sp] = useSearchParams()
  const urlCode = sp.get('code') ?? ''
  return <VerifyCertificate key={urlCode} initialCode={urlCode} />
}
