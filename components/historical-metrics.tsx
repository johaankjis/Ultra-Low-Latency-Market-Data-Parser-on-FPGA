import { Card } from "@/components/ui/card"

const metrics = [
  {
    date: "2025-01-10",
    avgLatency: "87ns",
    throughput: "2.4M",
    uptime: "99.98%",
    errors: "1,234",
  },
  {
    date: "2025-01-09",
    avgLatency: "89ns",
    throughput: "2.3M",
    uptime: "99.95%",
    errors: "1,456",
  },
  {
    date: "2025-01-08",
    avgLatency: "86ns",
    throughput: "2.5M",
    uptime: "99.99%",
    errors: "987",
  },
  {
    date: "2025-01-07",
    avgLatency: "88ns",
    throughput: "2.2M",
    uptime: "99.97%",
    errors: "1,123",
  },
  {
    date: "2025-01-06",
    avgLatency: "90ns",
    throughput: "2.1M",
    uptime: "99.94%",
    errors: "1,678",
  },
]

export function HistoricalMetrics() {
  return (
    <Card className="p-6">
      <div className="mb-4">
        <h3 className="font-semibold">Historical Metrics</h3>
        <p className="text-sm text-muted-foreground">Daily performance summary</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Date</th>
              <th className="pb-3 text-right text-sm font-medium text-muted-foreground">Avg Latency</th>
              <th className="pb-3 text-right text-sm font-medium text-muted-foreground">Throughput</th>
              <th className="pb-3 text-right text-sm font-medium text-muted-foreground">Uptime</th>
              <th className="pb-3 text-right text-sm font-medium text-muted-foreground">Errors</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map((metric) => (
              <tr key={metric.date} className="border-b border-border last:border-0">
                <td className="py-3 text-sm">{metric.date}</td>
                <td className="py-3 text-right font-mono text-sm">{metric.avgLatency}</td>
                <td className="py-3 text-right font-mono text-sm">{metric.throughput}</td>
                <td className="py-3 text-right font-mono text-sm">{metric.uptime}</td>
                <td className="py-3 text-right font-mono text-sm">{metric.errors}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
