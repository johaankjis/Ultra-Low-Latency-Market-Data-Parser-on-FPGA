"use client"

import { Card } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts"

const data = Array.from({ length: 24 }, (_, i) => ({
  hour: i,
  latency: 85 + Math.random() * 8 + Math.sin(i / 4) * 3,
  throughput: 2.2 + Math.random() * 0.4 + Math.sin(i / 6) * 0.2,
  errors: Math.random() * 0.1,
}))

export function PerformanceTrends() {
  return (
    <Card className="p-6">
      <div className="mb-4">
        <h3 className="font-semibold">Performance Trends</h3>
        <p className="text-sm text-muted-foreground">24-hour system metrics</p>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey="hour"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}:00`}
          />
          <YAxis
            yAxisId="left"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}ns`}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}M`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
          />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="latency"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={false}
            name="Latency (ns)"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="throughput"
            stroke="hsl(var(--chart-2))"
            strokeWidth={2}
            dot={false}
            name="Throughput (M pps)"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}
