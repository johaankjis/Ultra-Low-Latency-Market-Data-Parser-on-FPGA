"use client"

import { Card } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

const data = [
  { type: "Checksum", count: 423 },
  { type: "Timeout", count: 234 },
  { type: "Malformed", count: 189 },
  { type: "Overflow", count: 156 },
  { type: "Underflow", count: 98 },
  { type: "Protocol", count: 67 },
]

export function ErrorAnalysis() {
  return (
    <Card className="p-6">
      <div className="mb-4">
        <h3 className="font-semibold">Error Analysis</h3>
        <p className="text-sm text-muted-foreground">Error types in last 24 hours</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            type="category"
            dataKey="type"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
          />
          <Bar dataKey="count" fill="hsl(var(--destructive))" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}
