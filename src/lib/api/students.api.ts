import type {
  StudentVerificationCertificate,
  StudentVerificationResponse,
} from '../../types/studentVerification.types'
import { apiClient } from './client'

/** Multipart file field name — must match Multer (Postman: `certificate`). */
export const CERTIFICATE_FILE_FIELD = 'certificate'

/** @deprecated Use {@link CERTIFICATE_FILE_FIELD} */
export const STUDENT_CERTIFICATE_FILE_FIELD = CERTIFICATE_FILE_FIELD

export type CreateStudentBody = {
  fullName: string
  /** Optional; omit or empty to let the API auto-generate (e.g. VP-…). */
  studentId?: string
  mobile: string
  /** Optional; must be valid if set. */
  email?: string
  courseName: string
  instituteName: string
  isVerified: boolean
  /** When set, request is multipart/form-data with {@link CERTIFICATE_FILE_FIELD}. */
  certificateFile?: File | null
}

export type StudentRecord = {
  id: string
  fullName: string
  studentId: string
  /** Public URL to stored certificate when present. */
  certificateUrl?: string
  /** Legacy / alternate key some responses may use. */
  stuCertificatePath?: string
}

function normalizeStudent(raw: unknown): StudentRecord | null {
  if (!raw || typeof raw !== 'object') return null
  const s = raw as Record<string, unknown>
  const id = s.id ?? s.uuid
  if (id === undefined || id === null || String(id).length === 0) return null
  const name = s.fullName ?? s.fullname ?? s.name
  const sid = s.studentId ?? s.student_id
  const certUrl =
    typeof s.certificateUrl === 'string'
      ? s.certificateUrl
      : typeof s.certificate_url === 'string'
        ? s.certificate_url
        : undefined
  const legacyPath =
    typeof s.stuCertificatePath === 'string'
      ? s.stuCertificatePath
      : typeof s.stu_certificate_path === 'string'
        ? s.stu_certificate_path
        : undefined
  return {
    id: String(id),
    fullName: String(name ?? ''),
    studentId: String(sid ?? ''),
    certificateUrl: certUrl,
    stuCertificatePath: legacyPath,
  }
}

function parseCreateStudentResponse(data: unknown): StudentRecord {
  if (!data || typeof data !== 'object') {
    throw new Error('Empty response from create student API.')
  }
  const o = data as Record<string, unknown>
  const nested = o.student ?? o.data ?? o.user
  const picked = nested && typeof nested === 'object' ? nested : o
  const student = normalizeStudent(picked)
  if (!student) {
    throw new Error('Could not read student from API response. Expected id and name fields.')
  }
  return student
}

function appendCreateStudentFormData(fd: FormData, body: CreateStudentBody): void {
  fd.append('fullName', body.fullName.trim())
  const sid = body.studentId?.trim()
  if (sid) fd.append('studentId', sid)
  fd.append('mobile', body.mobile.trim())
  const em = body.email?.trim()
  if (em) fd.append('email', em)
  fd.append('courseName', body.courseName.trim())
  fd.append('instituteName', body.instituteName.trim())
  fd.append('isVerified', body.isVerified ? 'true' : 'false')
  if (body.certificateFile) {
    fd.append(CERTIFICATE_FILE_FIELD, body.certificateFile, body.certificateFile.name)
  }
}

function buildCreateStudentJson(body: CreateStudentBody): Record<string, unknown> {
  const payload: Record<string, unknown> = {
    fullName: body.fullName.trim(),
    mobile: body.mobile.trim(),
    courseName: body.courseName.trim(),
    instituteName: body.instituteName.trim(),
    isVerified: body.isVerified,
  }
  const sid = body.studentId?.trim()
  if (sid) payload.studentId = sid
  const em = body.email?.trim()
  if (em) payload.email = em
  return payload
}

/**
 * POST `/api/students` — **multipart/form-data** when `certificateFile` is set (matches Postman “Create student + certificate”).
 * **JSON** when no file (matches Postman “Create student (JSON only)”).
 */
export async function createStudent(body: CreateStudentBody): Promise<{ student: StudentRecord }> {
  if (body.certificateFile) {
    const fd = new FormData()
    appendCreateStudentFormData(fd, body)
    const { data } = await apiClient.post<unknown>('/api/students', fd)
    return { student: parseCreateStudentResponse(data) }
  }

  const { data } = await apiClient.post<unknown>('/api/students', buildCreateStudentJson(body))
  return { student: parseCreateStudentResponse(data) }
}

/** GET `/api/students` — admin list (Bearer token). */
export async function listStudents(params?: { limit?: number }): Promise<unknown> {
  const { data } = await apiClient.get<unknown>('/api/students', {
    params: { limit: params?.limit ?? 100 },
  })
  return data
}

/** GET `/api/students/:id` — internal UUID. */
export async function getStudentById(studentInternalId: string): Promise<unknown> {
  const { data } = await apiClient.get<unknown>(`/api/students/${encodeURIComponent(studentInternalId)}`)
  return data
}

function parseVerificationCertificate(x: unknown): StudentVerificationCertificate | null {
  if (!x || typeof x !== 'object') return null
  const o = x as Record<string, unknown>
  if (typeof o.id !== 'string' || typeof o.certificateUrl !== 'string' || typeof o.createdAt !== 'string') return null
  return { id: o.id, certificateUrl: o.certificateUrl, createdAt: o.createdAt }
}

export function parseStudentVerificationResponse(data: unknown): StudentVerificationResponse {
  if (!data || typeof data !== 'object') {
    return { ok: false, verified: false }
  }
  const o = data as Record<string, unknown>
  const rawCerts = o.certificates
  const certificates = Array.isArray(rawCerts)
    ? rawCerts.map(parseVerificationCertificate).filter((c): c is StudentVerificationCertificate => c !== null)
    : undefined
  return {
    ok: Boolean(o.ok),
    verified: Boolean(o.verified),
    fullName: typeof o.fullName === 'string' ? o.fullName : undefined,
    courseName: typeof o.courseName === 'string' ? o.courseName : undefined,
    instituteName: typeof o.instituteName === 'string' ? o.instituteName : undefined,
    verificationId: typeof o.verificationId === 'string' ? o.verificationId : undefined,
    certificates: certificates && certificates.length > 0 ? certificates : undefined,
  }
}

/** GET `/api/students/by-verification-id/:id` — public third-party verification (no auth). */
export async function getStudentByVerificationId(
  publicVerificationId: string,
): Promise<StudentVerificationResponse> {
  const { data } = await apiClient.get<unknown>(
    `/api/students/by-verification-id/${encodeURIComponent(publicVerificationId)}`,
  )
  return parseStudentVerificationResponse(data)
}
