import { ParserPipeline } from "@/components/parser-pipeline"
import { ParserConfig } from "@/components/parser-config"
import { MessageTypes } from "@/components/message-types"
import { TimingClosure } from "@/components/timing-closure"
import { Card } from "@/components/ui/card"
import { Cpu, Zap, Clock, Activity } from "lucide-react"

export default function ParserPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Parser Status</h1>
          <p className="text-muted-foreground">FPGA hardware parser configuration and monitoring</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-3">
              <Cpu className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">FPGA Utilization</p>
              <p className="font-mono text-2xl font-bold">67%</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-chart-2/10 p-3">
              <Zap className="h-5 w-5 text-chart-2" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Power Draw</p>
              <p className="font-mono text-2xl font-bold">18.4W</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-chart-3/10 p-3">
              <Clock className="h-5 w-5 text-chart-3" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Clock Freq</p>
              <p className="font-mono text-2xl font-bold">312.5MHz</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-success/10 p-3">
              <Activity className="h-5 w-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pipeline Depth</p>
              <p className="font-mono text-2xl font-bold">3 stages</p>
            </div>
          </div>
        </Card>
      </div>

      <ParserPipeline />

      <div className="grid gap-6 lg:grid-cols-2">
        <MessageTypes />
        <TimingClosure />
      </div>

      <ParserConfig />
    </div>
  )
}
