import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const DATA = [
  { name: 'Verified', value: 1102, pct: '58.3%', color: '#16a34a' },
  { name: 'Pre Approved', value: 892, pct: '31.0%', color: '#14b8a6' },
  { name: 'Pending', value: 146, pct: '7.7%', color: '#f97316' },
  { name: 'Rejected', value: 34, pct: '3.0%', color: '#ef4444' },
]

export function VerificationOverviewChart() {
  return (
    <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-ink">Verification Overview</h3>
      <p className="mt-1 text-sm text-ink-secondary">Distribution by certificate status</p>
      <div className="mt-6 flex flex-col items-stretch gap-8 lg:flex-row lg:items-center">
        <div className="mx-auto h-56 w-full max-w-[220px] shrink-0 lg:mx-0 lg:h-64 lg:max-w-[45%] lg:flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={DATA}
                dataKey="value"
                nameKey="name"
                innerRadius={52}
                outerRadius={82}
                paddingAngle={2}
              >
                {DATA.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} stroke="transparent" />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null
                  const p = payload[0].payload as (typeof DATA)[number]
                  return (
                    <div className="rounded-md border border-border bg-white px-3 py-2 text-xs shadow-sm">
                      <div className="font-semibold text-ink">{p.name}</div>
                      <div className="text-ink-secondary">
                        {p.value.toLocaleString()} ({p.pct})
                      </div>
                    </div>
                  )
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <ul className="flex flex-1 flex-col justify-center gap-3 text-sm lg:pl-2">
          {DATA.map((d) => (
            <li key={d.name} className="flex items-center gap-3">
              <span
                className="h-3 w-3 shrink-0 rounded-full"
                style={{ backgroundColor: d.color }}
                aria-hidden
              />
              <span className="font-medium text-ink">
                {d.name}
                <span className="ml-1 font-normal text-ink-secondary">
                  {d.value.toLocaleString()} ({d.pct})
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
