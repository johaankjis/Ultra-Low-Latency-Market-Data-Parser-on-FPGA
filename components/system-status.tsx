import { Card } from "@/components/ui/card"
import { CheckCircle2, AlertCircle } from "lucide-react"

const systems = [
  { name: "FPGA Core", status: "operational", uptime: "99.99%" },
  { name: "AXI Stream", status: "operational", uptime: "100%" },
  { name: "PTP Clock", status: "operational", uptime: "100%" },
  { name: "Parser Pipeline", status: "operational", uptime: "99.97%" },
  { name: "Timestamp Counter", status: "operational", uptime: "100%" },
  { name: "Output Buffer", status: "degraded", uptime: "98.2%" },
]

export function SystemStatus() {
  return (
    <Card className="p-6">
      <div className="mb-4">
        <h3 className="font-semibold">System Status</h3>
        <p className="text-sm text-muted-foreground">Component health</p>
      </div>
      <div className="space-y-3">
        {systems.map((system) => (
          <div key={system.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {system.status === "operational" ? (
                <CheckCircle2 className="h-4 w-4 text-success" />
              ) : (
                <AlertCircle className="h-4 w-4 text-warning" />
              )}
              <span className="text-sm">{system.name}</span>
            </div>
            <span className="font-mono text-xs text-muted-foreground">{system.uptime}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
