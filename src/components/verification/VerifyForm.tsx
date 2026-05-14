import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

export interface VerifyFormProps {
  value: string
  onChange: (v: string) => void
  onSubmit: () => void
  loading?: boolean
}

export function VerifyForm({ value, onChange, onSubmit, loading }: VerifyFormProps) {
  return (
    <form
      className="flex flex-col gap-3 sm:flex-row sm:items-stretch"
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit()
      }}
    >
      <Input
        placeholder="Enter verification code"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="sm:flex-1"
        aria-label="Verification code"
      />
      <Button
        type="submit"
        variant="primary"
        className="bg-blue-600 hover:bg-blue-700 sm:w-40"
        loading={loading}
      >
        Verify
      </Button>
    </form>
  )
}
