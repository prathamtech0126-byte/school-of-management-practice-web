import type { ReactNode } from 'react'
import { X } from 'lucide-react'
import { Button } from './Button'

export interface ModalProps {
  open: boolean
  title: string
  children: ReactNode
  onClose: () => void
}

export function Modal({ open, title, children, onClose }: ModalProps) {
  if (!open) return null
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        aria-label="Close dialog"
        className="absolute inset-0 bg-black/40 transition-all duration-200"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-lg rounded-xl border border-border bg-white p-6 shadow-lg transition-all duration-200">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 className="text-lg font-semibold text-ink">{title}</h2>
          <Button
            variant="secondary"
            size="sm"
            className="!p-2"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        {children}
      </div>
    </div>
  )
}
