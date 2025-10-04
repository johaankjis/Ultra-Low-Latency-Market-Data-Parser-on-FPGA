import { Card } from "@/components/ui/card"
import { CheckCircle2, AlertCircle } from "lucide-react"

const timingPaths = [
  { path: "AXI Stream Input → Stage 1", slack: "+2.34ns", status: "pass" },
  { path: "Stage 1 → Stage 2", slack: "+1.87ns", status: "pass" },
  { path: "Stage 2 → Stage 3", slack: "+3.12ns", status: "pass" },
  { path: "Stage 3 → Output Buffer", slack: "+1.45ns", status: "pass" },
  { path: "PTP Timestamp Counter", slack: "+4.23ns", status: "pass" },
  { path: "Validation Logic", slack: "+0.89ns", status: "warning" },
]

export function TimingClosure() {
  return (
    <Card className="p-6">
      <div className="mb-4">
        <h3 className="font-semibold">Timing Closure Analysis</h3>
        <p className="text-sm text-muted-foreground">Static timing analysis @ 312.5 MHz</p>
      </div>
      <div className="space-y-3">
        {timingPaths.map((path) => (
          <div key={path.path} className="flex items-center justify-between rounded-lg border border-border p-3">
            <div className="flex items-center gap-3">
              {path.status === "pass" ? (
                <CheckCircle2 className="h-4 w-4 text-success" />
              ) : (
                <AlertCircle className="h-4 w-4 text-warning" />
              )}
              <span className="text-sm">{path.path}</span>
            </div>
            <span className="font-mono text-sm font-semibold text-success">{path.slack}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg bg-success/10 p-3 text-center">
        <p className="text-sm font-medium text-success">All critical paths meet timing @ 312.5 MHz</p>
      </div>
    </Card>
  )
}
