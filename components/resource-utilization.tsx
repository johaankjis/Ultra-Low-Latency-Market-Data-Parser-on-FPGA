"use client"

import { Card } from "@/components/ui/card"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

const data = Array.from({ length: 24 }, (_, i) => ({
  hour: i,
  fpga: 65 + Math.random() * 10,
  memory: 45 + Math.random() * 15,
  power: 17 + Math.random() * 3,
}))

export function ResourceUtilization() {
  return (
    <Card className="p-6">
      <div className="mb-4">
        <h3 className="font-semibold">Resource Utilization</h3>
        <p className="text-sm text-muted-foreground">FPGA and system resources</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="fpgaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="memoryGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
            </linearGradient>
          </defs>
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
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
          />
          <Area
            type="monotone"
            dataKey="fpga"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            fill="url(#fpgaGradient)"
            name="FPGA"
          />
          <Area
            type="monotone"
            dataKey="memory"
            stroke="hsl(var(--chart-2))"
            strokeWidth={2}
            fill="url(#memoryGradient)"
            name="Memory"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  )
}
