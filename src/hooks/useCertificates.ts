import { useMemo } from 'react'
import { MOCK_CERTIFICATES } from '../constants/mockData'
import type { Certificate } from '../types/certificate.types'

const DEFAULT_CLIENT = 'Acme Corporation'

export function useCertificates(clientName: string = DEFAULT_CLIENT) {
  return useMemo(
    () => MOCK_CERTIFICATES.filter((c) => c.clientName === clientName),
    [clientName],
  )
}

export function useCertificateByCode(code: string): Certificate | undefined {
  return useMemo(
    () =>
      MOCK_CERTIFICATES.find(
        (c) => c.verificationCode.toLowerCase() === code.trim().toLowerCase(),
      ),
    [code],
  )
}
