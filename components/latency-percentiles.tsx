"use client"

import { Card } from "@/components/ui/card"

const percentiles = [
  { label: "P50", value: "84ns", description: "50% of packets" },
  { label: "P75", value: "88ns", description: "75% of packets" },
  { label: "P90", value: "92ns", description: "90% of packets" },
  { label: "P95", value: "94ns", description: "95% of packets" },
  { label: "P99", value: "96ns", description: "99% of packets" },
  { label: "P99.9", value: "103ns", description: "99.9% of packets" },
  { label: "P99.99", value: "118ns", description: "99.99% of packets" },
  { label: "Max", value: "127ns", description: "Maximum observed" },
]

export function LatencyPercentiles() {
  return (
    <Card className="p-6">
      <div className="mb-4">
        <h3 className="font-semibold">Latency Percentiles</h3>
        <p className="text-sm text-muted-foreground">Statistical breakdown</p>
      </div>
      <div className="space-y-3">
        {percentiles.map((percentile) => (
          <div
            key={percentile.label}
            className="flex items-center justify-between border-b border-border pb-3 last:border-0"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-semibold text-muted-foreground">{percentile.label}</span>
              <span className="text-sm text-muted-foreground">{percentile.description}</span>
            </div>
            <span className="font-mono text-lg font-bold">{percentile.value}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
