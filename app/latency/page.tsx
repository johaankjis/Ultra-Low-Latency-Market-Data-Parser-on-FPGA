import { LatencyDistribution } from "@/components/latency-distribution"
import { LatencyHeatmap } from "@/components/latency-heatmap"
import { LatencyPercentiles } from "@/components/latency-percentiles"
import { LatencyTimeline } from "@/components/latency-timeline"
import { Card } from "@/components/ui/card"

export default function LatencyPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Latency Monitoring</h1>
          <p className="text-muted-foreground">Nanosecond-precision latency analysis</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="rounded-md border border-border bg-card px-3 py-2 text-sm">
            <option>Last 5 minutes</option>
            <option>Last 15 minutes</option>
            <option>Last hour</option>
            <option>Last 24 hours</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">P50 Latency</p>
            <p className="font-mono text-3xl font-bold">84ns</p>
            <p className="text-xs text-muted-foreground">Median processing time</p>
          </div>
        </Card>
        <Card className="p-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">P99 Latency</p>
            <p className="font-mono text-3xl font-bold">96ns</p>
            <p className="text-xs text-muted-foreground">99th percentile</p>
          </div>
        </Card>
        <Card className="p-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">P99.9 Latency</p>
            <p className="font-mono text-3xl font-bold">103ns</p>
            <p className="text-xs text-muted-foreground">99.9th percentile</p>
          </div>
        </Card>
        <Card className="p-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Max Latency</p>
            <p className="font-mono text-3xl font-bold">127ns</p>
            <p className="text-xs text-muted-foreground">Peak observed</p>
          </div>
        </Card>
      </div>

      <LatencyTimeline />

      <div className="grid gap-6 lg:grid-cols-2">
        <LatencyDistribution />
        <LatencyPercentiles />
      </div>

      <LatencyHeatmap />
    </div>
  )
}
