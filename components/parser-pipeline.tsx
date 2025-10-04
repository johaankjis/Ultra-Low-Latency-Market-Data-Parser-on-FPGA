import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const stages = [
  {
    name: "Stage 1: Header Extraction",
    description: "Message type, length, timestamp",
    latency: "28ns",
    utilization: "23%",
    status: "operational",
  },
  {
    name: "Stage 2: Field Parsing",
    description: "Symbol, price, volume extraction",
    latency: "34ns",
    utilization: "41%",
    status: "operational",
  },
  {
    name: "Stage 3: Validation",
    description: "Output formatting and checks",
    latency: "25ns",
    utilization: "19%",
    status: "operational",
  },
]

export function ParserPipeline() {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="font-semibold">Cut-Through Parser Pipeline</h3>
        <p className="text-sm text-muted-foreground">Hardware processing stages</p>
      </div>
      <div className="space-y-4">
        {stages.map((stage, index) => (
          <div key={stage.name}>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{stage.name}</h4>
                    <p className="text-sm text-muted-foreground">{stage.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-sm font-semibold">{stage.latency}</p>
                    <p className="text-xs text-muted-foreground">{stage.utilization} util</p>
                  </div>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <div className="h-full bg-primary" style={{ width: stage.utilization }} />
                </div>
              </div>
            </div>
            {index < stages.length - 1 && (
              <div className="ml-5 flex h-8 items-center">
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-lg bg-muted p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Total Pipeline Latency</span>
          <span className="font-mono text-lg font-bold">87ns</span>
        </div>
      </div>
    </Card>
  )
}
