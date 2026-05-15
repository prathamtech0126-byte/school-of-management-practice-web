import { useState } from 'react'
import type { MarketingSector } from '../../../site/constants/sectors'

export interface SectorExploreCardProps {
  sector: MarketingSector
  selected: boolean
  onSelect: () => void
}

export function SectorExploreCard({ sector, selected, onSelect }: SectorExploreCardProps) {
  const [imageFailed, setImageFailed] = useState(false)
  const Icon = sector.icon

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group w-full overflow-hidden rounded-2xl border bg-white text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-site-navy focus-visible:ring-offset-2 ${
        selected ? 'border-site-red ring-2 ring-site-red/30' : 'border-gray-100'
      }`}
    >
      <div className="aspect-[16/10] w-full overflow-hidden bg-surface">
        {imageFailed ? (
          <div
            className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200"
            aria-hidden
          >
            <span className={`flex h-20 w-20 items-center justify-center rounded-2xl ${sector.accent}`}>
              <Icon className="h-10 w-10" strokeWidth={1.5} />
            </span>
          </div>
        ) : (
          <img
            src={sector.imageSrc}
            alt={sector.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
          />
        )}
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-base font-bold leading-snug text-ink sm:text-lg">{sector.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-secondary">{sector.blurb}</p>
        <p className="mt-3 text-xs font-medium text-site-red">{sector.count}</p>
      </div>
    </button>
  )
}
