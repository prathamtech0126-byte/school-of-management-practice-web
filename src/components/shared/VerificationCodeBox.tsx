import { Copy } from 'lucide-react'
import { useClipboard } from '../../hooks/useClipboard'
import { Button } from '../ui/Button'

export interface VerificationCodeBoxProps {
  code: string
  copyButtonLabel?: string
  className?: string
}

export function VerificationCodeBox({
  code,
  copyButtonLabel = 'Copy',
  className = '',
}: VerificationCodeBoxProps) {
  const { copied, copy } = useClipboard()
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:items-center ${className}`}>
      <div className="flex min-h-[48px] flex-1 items-center justify-between gap-2 rounded-lg border border-border bg-white px-3 py-2 font-mono text-sm font-semibold text-primary">
        <span className="truncate">{code}</span>
        <button
          type="button"
          onClick={() => copy(code)}
          className="rounded-md p-2 text-ink-secondary transition-all duration-200 hover:bg-surface hover:text-ink"
          aria-label="Copy to clipboard"
        >
          <Copy className="h-4 w-4" />
        </button>
      </div>
      <Button
        variant="primary"
        size="md"
        className="shrink-0 sm:w-auto"
        onClick={() => copy(code)}
      >
        {copied ? 'Copied!' : copyButtonLabel}
      </Button>
    </div>
  )
}
