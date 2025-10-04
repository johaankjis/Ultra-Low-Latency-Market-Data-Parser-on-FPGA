import { PerformanceTrends } from "@/components/performance-trends"
import { ErrorAnalysis } from "@/components/error-analysis"
import { ResourceUtilization } from "@/components/resource-utilization"
import { HistoricalMetrics } from "@/components/historical-metrics"
import { Card } from "@/components/ui/card"

export default function AnalyticsPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Performance Analytics</h1>
          <p className="text-muted-foreground">Historical trends and system insights</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="rounded-md border border-border bg-card px-3 py-2 text-sm">
            <option>Last 24 hours</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Avg Uptime</p>
            <p className="font-mono text-3xl font-bold">99.97%</p>
            <p className="text-xs text-success">+0.03% vs last week</p>
          </div>
        </Card>
        <Card className="p-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Total Packets</p>
            <p className="font-mono text-3xl font-bold">2.1B</p>
            <p className="text-xs text-success">+8.4% vs last week</p>
          </div>
        </Card>
        <Card className="p-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Error Rate</p>
            <p className="font-mono text-3xl font-bold">0.05%</p>
            <p className="text-xs text-success">-0.01% vs last week</p>
          </div>
        </Card>
        <Card className="p-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Peak Throughput</p>
            <p className="font-mono text-3xl font-bold">2.8M</p>
            <p className="text-xs text-muted-foreground">Packets/sec</p>
          </div>
        </Card>
      </div>

      <PerformanceTrends />

      <div className="grid gap-6 lg:grid-cols-2">
        <ErrorAnalysis />
        <ResourceUtilization />
      </div>

      <HistoricalMetrics />
    </div>
  )
}
