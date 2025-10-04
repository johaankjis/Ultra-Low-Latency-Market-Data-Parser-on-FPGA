"use client"

import { Card } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = Array.from({ length: 50 }, (_, i) => ({
  time: i,
  packets: 2300000 + Math.random() * 200000 + Math.sin(i / 8) * 100000,
}))

export function ThroughputChart() {
  return (
    <Card className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold">Packet Throughput</h3>
          <p className="text-sm text-muted-foreground">Messages processed per second</p>
        </div>
        <div className="rounded-md bg-success/10 px-2 py-1 text-xs font-mono text-success">2.4M pps</div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="throughputGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
            formatter={(value: number) => [`${(value / 1000000).toFixed(2)}M pps`, "Throughput"]}
          />
          <Area
            type="monotone"
            dataKey="packets"
            stroke="hsl(var(--chart-2))"
            strokeWidth={2}
            fill="url(#throughputGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  )
}
