import type { ReactNode } from 'react'

export interface TableColumn<T> {
  key: string
  label: string
  render?: (row: T) => ReactNode
}

export interface TableProps<T> {
  columns: TableColumn<T>[]
  data: T[]
  rowKey: (row: T) => string
  className?: string
}

export function Table<T>({ columns, data, rowKey, className = '' }: TableProps<T>) {
  return (
    <div className={`overflow-x-auto rounded-xl border border-border bg-white shadow-sm ${className}`}>
      <table className="min-w-full divide-y divide-border text-sm">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-ink-secondary"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-white">
          {data.map((row) => (
            <tr
              key={rowKey(row)}
              className="transition-all duration-200 hover:bg-gray-50/80"
            >
              {columns.map((col) => (
                <td key={col.key} className="whitespace-nowrap px-4 py-3 text-ink">
                  {col.render ? col.render(row) : String((row as Record<string, unknown>)[col.key] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
