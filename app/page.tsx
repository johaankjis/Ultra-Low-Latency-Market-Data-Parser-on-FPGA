import { MetricCard } from "@/components/metric-card"
import { LatencyChart } from "@/components/latency-chart"
import { ThroughputChart } from "@/components/throughput-chart"
import { PacketStats } from "@/components/packet-stats"
import { SystemStatus } from "@/components/system-status"

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">System Overview</h1>
          <p className="text-muted-foreground">Real-time monitoring of FPGA market data parser</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-mono">Last updated: 2ms ago</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard title="Avg Latency" value="87ns" change="-3ns" trend="down" description="Sub-100ns target" />
        <MetricCard title="Throughput" value="2.4M" change="+12%" trend="up" description="Packets/sec" />
        <MetricCard title="Parse Rate" value="99.97%" change="+0.02%" trend="up" description="Success rate" />
        <MetricCard title="Clock Freq" value="312.5MHz" change="0" trend="stable" description="Timing closure" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <LatencyChart />
        <ThroughputChart />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <PacketStats />
        </div>
        <SystemStatus />
      </div>
    </div>
  )
}
