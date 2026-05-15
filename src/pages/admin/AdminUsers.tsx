import { useRef, useState } from 'react'
import { PageHeader } from '../../components/shared/PageHeader'
import { Card } from '../../components/ui/Card'
import { createStudent, getApiErrorMessage, CERTIFICATE_FILE_FIELD, type StudentRecord } from '../../lib/api'

const inputClass =
  'mt-1 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-ink outline-none ring-site-navy/20 transition focus:border-site-navy focus:ring-2 disabled:opacity-60'

const fileInputClass =
  'mt-1 block w-full cursor-pointer rounded-lg border border-dashed border-border bg-white px-3 py-6 text-sm text-ink-secondary file:mr-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-site-navy file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:border-site-navy/40 disabled:opacity-60'

export function AdminUsers() {
  const certFileRef = useRef<HTMLInputElement>(null)
  const [fullName, setFullName] = useState('')
  const [studentId, setStudentId] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [courseName, setCourseName] = useState('')
  const [instituteName, setInstituteName] = useState('')
  const [certificateFile, setCertificateFile] = useState<File | null>(null)
  const [isVerified, setIsVerified] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [successStudent, setSuccessStudent] = useState<StudentRecord | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccessStudent(null)
    if (!fullName.trim() || !mobile.trim() || !courseName.trim() || !instituteName.trim()) {
      setError('Enter full name, mobile, course name, and institute name.')
      return
    }
    setSubmitting(true)
    try {
      const { student } = await createStudent({
        fullName: fullName.trim(),
        studentId: studentId.trim() || undefined,
        mobile: mobile.trim(),
        email: email.trim() || undefined,
        courseName: courseName.trim(),
        instituteName: instituteName.trim(),
        isVerified,
        certificateFile: certificateFile ?? undefined,
      })
      setSuccessStudent(student)
      setFullName('')
      setStudentId('')
      setMobile('')
      setEmail('')
      setCourseName('')
      setInstituteName('')
      setCertificateFile(null)
      if (certFileRef.current) certFileRef.current.value = ''
      setIsVerified(true)
    } catch (err) {
      setError(getApiErrorMessage(err, 'Could not create student.'))
    } finally {
      setSubmitting(false)
    }
  }

  const certLine = successStudent?.certificateUrl ?? successStudent?.stuCertificatePath

  return (
    <div className="space-y-6">
      <Card>
        <PageHeader
          title="Users & students"
          subtitle="Matches POST /api/students from the Verified Portal Students API: JSON when no file; multipart with field certificate when you attach a file (PDF, PNG, JPG, JPEG, WEBP — max 15 MB on server)."
        />

        {successStudent ? (
          <div
            className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900"
            role="status"
          >
            <p className="font-semibold">Student created</p>
            <p className="mt-1 text-emerald-800">
              {successStudent.fullName} · Verification ID {successStudent.studentId} · Internal UUID{' '}
              {successStudent.id}
              {certLine ? (
                <span className="mt-1 block text-xs text-emerald-900/90">Certificate: {certLine}</span>
              ) : null}
            </p>
          </div>
        ) : null}

        <form onSubmit={onSubmit} className="grid max-w-2xl gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="stu-fullname" className="block text-sm font-medium text-ink">
              Full name <span className="text-site-red">*</span>
            </label>
            <input
              id="stu-fullname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              disabled={submitting}
              className={inputClass}
              placeholder="Jane Student"
              autoComplete="name"
            />
          </div>
          <div>
            <label htmlFor="stu-id" className="block text-sm font-medium text-ink">
              Student ID <span className="font-normal text-ink-secondary">(optional)</span>
            </label>
            <input
              id="stu-id"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              disabled={submitting}
              className={inputClass}
              placeholder="TESTQEW2026 — leave empty to auto-generate"
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="stu-mobile" className="block text-sm font-medium text-ink">
              Mobile <span className="text-site-red">*</span>
            </label>
            <input
              id="stu-mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              disabled={submitting}
              className={inputClass}
              placeholder="6666666666"
              inputMode="numeric"
              autoComplete="tel"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="stu-email" className="block text-sm font-medium text-ink">
              Email <span className="font-normal text-ink-secondary">(optional)</span>
            </label>
            <input
              id="stu-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submitting}
              className={inputClass}
              placeholder="jane@example.com"
              autoComplete="email"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="stu-course" className="block text-sm font-medium text-ink">
              Course name <span className="text-site-red">*</span>
            </label>
            <input
              id="stu-course"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              disabled={submitting}
              className={inputClass}
              placeholder="new course"
              autoComplete="off"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="stu-institute" className="block text-sm font-medium text-ink">
              Institute name <span className="text-site-red">*</span>
            </label>
            <input
              id="stu-institute"
              value={instituteName}
              onChange={(e) => setInstituteName(e.target.value)}
              disabled={submitting}
              className={inputClass}
              placeholder="svit"
              autoComplete="organization"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="stu-cert-file" className="block text-sm font-medium text-ink">
              Certificate file <span className="font-normal text-ink-secondary">(optional)</span>
            </label>
            <input
              ref={certFileRef}
              id="stu-cert-file"
              type="file"
              accept=".pdf,.png,.jpg,.jpeg,.webp,application/pdf,image/png,image/jpeg,image/webp"
              disabled={submitting}
              className={fileInputClass}
              onChange={(e) => setCertificateFile(e.target.files?.[0] ?? null)}
            />
            <p className="mt-1 text-xs text-ink-secondary">
              With a file: <code className="rounded bg-surface px-1">multipart/form-data</code>, same field names as
              Postman, file key <code className="rounded bg-surface px-1">{CERTIFICATE_FILE_FIELD}</code>. Without a
              file: JSON body with camelCase <code className="rounded bg-surface px-1">fullName</code>,{' '}
              <code className="rounded bg-surface px-1">isVerified</code> boolean, etc.
            </p>
            {certificateFile ? (
              <p className="mt-1 text-xs font-medium text-ink">Selected: {certificateFile.name}</p>
            ) : null}
          </div>
          <div className="flex items-center gap-2 sm:col-span-2">
            <input
              id="stu-verified"
              type="checkbox"
              checked={isVerified}
              onChange={(e) => setIsVerified(e.target.checked)}
              disabled={submitting}
              className="h-4 w-4 rounded border-border text-site-navy focus:ring-site-navy"
            />
            <label htmlFor="stu-verified" className="text-sm font-medium text-ink">
              Verified (multipart sends &quot;true&quot; / &quot;false&quot;; JSON sends boolean)
            </label>
          </div>
          {error ? <p className="text-sm font-medium text-red-600 sm:col-span-2">{error}</p> : null}
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-xl bg-site-navy px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-site-navy-dark disabled:opacity-60"
            >
              {submitting ? 'Creating…' : 'Create student'}
            </button>
          </div>
        </form>
      </Card>
    </div>
  )
}
