import { Card } from "@/components/ui/card"

const stats = [
  { label: "ITCH Messages", value: "1,847,293", percentage: "76.8%", color: "bg-primary" },
  { label: "FIX Messages", value: "423,847", percentage: "17.6%", color: "bg-chart-2" },
  { label: "Validation Errors", value: "1,234", percentage: "0.05%", color: "bg-destructive" },
  { label: "Dropped Packets", value: "89", percentage: "0.004%", color: "bg-warning" },
]

export function PacketStats() {
  return (
    <Card className="p-6">
      <div className="mb-4">
        <h3 className="font-semibold">Packet Statistics</h3>
        <p className="text-sm text-muted-foreground">Message type distribution</p>
      </div>
      <div className="space-y-4">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{stat.label}</span>
              <div className="flex items-center gap-3">
                <span className="font-mono font-semibold">{stat.value}</span>
                <span className="font-mono text-muted-foreground">{stat.percentage}</span>
              </div>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
              <div className={`h-full ${stat.color}`} style={{ width: stat.percentage }} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
