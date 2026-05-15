import { API_BASE_URL } from '../../config/env'

/** Turn a relative API path (e.g. `/uploads/...`) into an absolute URL for opening in a new tab. */
export function resolveApiAssetUrl(pathOrUrl: string): string {
  const s = pathOrUrl.trim()
  if (!s) return ''
  if (s.startsWith('http://') || s.startsWith('https://')) return s
  return `${API_BASE_URL}${s.startsWith('/') ? s : `/${s}`}`
}
