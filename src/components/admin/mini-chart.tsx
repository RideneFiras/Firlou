"use client";

const leadsData = [
  { label: "Jan", value: 8 },
  { label: "Feb", value: 12 },
  { label: "Mar", value: 9 },
  { label: "Apr", value: 18 },
  { label: "May", value: 24 },
];

const revenueData = [
  { label: "Jan", value: 2100 },
  { label: "Feb", value: 3500 },
  { label: "Mar", value: 2800 },
  { label: "Apr", value: 5200 },
  { label: "May", value: 7400 },
];

function SparkLine({ data }: { data: { label: string; value: number }[] }) {
  const max = Math.max(...data.map((d) => d.value));
  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * 100;
      const y = 100 - (d.value / max) * 85 - 5;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="relative mt-6 h-36">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={`0,100 ${points} 100,100`} fill="url(#areaGrad)" />
        <polyline
          points={points}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {data.map((d, i) => {
          const x = (i / (data.length - 1)) * 100;
          const y = 100 - (d.value / max) * 85 - 5;
          return (
            <circle
              key={d.label}
              cx={x}
              cy={y}
              r="1.5"
              fill="hsl(var(--primary))"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>
    </div>
  );
}

export function MiniChart() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {/* Leads chart */}
      <div className="rounded-2xl border border-border/60 bg-card p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-sm text-muted-foreground">Leads over time</p>
            <p className="font-display text-2xl font-semibold">+200%</p>
            <p className="mt-0.5 text-xs text-emerald-500">↑ vs last quarter</p>
          </div>
          <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
            5 months
          </span>
        </div>
        <SparkLine data={leadsData} />
        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
          {leadsData.map((d) => (
            <span key={d.label}>{d.label}</span>
          ))}
        </div>
      </div>

      {/* Revenue chart */}
      <div className="rounded-2xl border border-border/60 bg-card p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-sm text-muted-foreground">Revenue (DT)</p>
            <p className="font-display text-2xl font-semibold">7 400 DT</p>
            <p className="mt-0.5 text-xs text-emerald-500">↑ Best month yet</p>
          </div>
          <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-500">
            May 2026
          </span>
        </div>

        <div className="relative mt-6 h-36">
          <svg
            viewBox={`0 0 ${revenueData.length * 20} 100`}
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <defs>
              <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
            </defs>
            {revenueData.map((d, i) => {
              const maxVal = Math.max(...revenueData.map((r) => r.value));
              const barH = (d.value / maxVal) * 80;
              const x = i * 20 + 2;
              const y = 100 - barH - 5;
              return (
                <rect
                  key={d.label}
                  x={x}
                  y={y}
                  width="16"
                  height={barH}
                  rx="3"
                  fill="#10b981"
                  fillOpacity={0.7}
                />
              );
            })}
          </svg>
        </div>
        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
          {revenueData.map((d) => (
            <span key={d.label}>{d.label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
