"use client"

import { Card } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

const data = [
  { range: "70-75", count: 1240 },
  { range: "75-80", count: 8920 },
  { range: "80-85", count: 45230 },
  { range: "85-90", count: 89450 },
  { range: "90-95", count: 34120 },
  { range: "95-100", count: 12340 },
  { range: "100-105", count: 3450 },
  { range: "105-110", count: 890 },
  { range: "110+", count: 234 },
]

export function LatencyDistribution() {
  return (
    <Card className="p-6">
      <div className="mb-4">
        <h3 className="font-semibold">Latency Distribution</h3>
        <p className="text-sm text-muted-foreground">Histogram of packet processing times</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey="range"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            label={{ value: "Latency (ns)", position: "insideBottom", offset: -5 }}
          />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
            formatter={(value: number) => [`${value.toLocaleString()} packets`, "Count"]}
          />
          <Bar dataKey="count" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}
