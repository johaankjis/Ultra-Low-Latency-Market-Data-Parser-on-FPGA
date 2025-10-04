import { Card } from "@/components/ui/card"

const messageTypes = [
  { type: "Add Order", code: "A", count: "847,293", percentage: 42.3, color: "bg-primary" },
  { type: "Order Executed", code: "E", count: "523,847", percentage: 26.1, color: "bg-chart-2" },
  { type: "Order Cancel", code: "X", count: "412,234", percentage: 20.6, color: "bg-chart-3" },
  { type: "Trade", code: "P", count: "189,456", percentage: 9.5, color: "bg-chart-4" },
  { type: "System Event", code: "S", count: "31,234", percentage: 1.5, color: "bg-chart-5" },
]

export function MessageTypes() {
  return (
    <Card className="p-6">
      <div className="mb-4">
        <h3 className="font-semibold">Message Type Distribution</h3>
        <p className="text-sm text-muted-foreground">ITCH protocol breakdown</p>
      </div>
      <div className="space-y-4">
        {messageTypes.map((msg) => (
          <div key={msg.type} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground">{msg.code}</span>
                <span>{msg.type}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono font-semibold">{msg.count}</span>
                <span className="font-mono text-muted-foreground">{msg.percentage}%</span>
              </div>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
              <div className={`h-full ${msg.color}`} style={{ width: `${msg.percentage}%` }} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
