"use client"

import { Card } from "@/components/ui/card"

const hours = Array.from({ length: 24 }, (_, i) => i)
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const generateHeatmapData = () => {
  return days.map((day) =>
    hours.map((hour) => ({
      day,
      hour,
      latency: 80 + Math.random() * 20 + (hour >= 9 && hour <= 16 ? 10 : 0),
    })),
  )
}

const heatmapData = generateHeatmapData()

const getColor = (latency: number) => {
  if (latency < 85) return "bg-success/20"
  if (latency < 90) return "bg-success/40"
  if (latency < 95) return "bg-primary/40"
  if (latency < 100) return "bg-primary/60"
  if (latency < 105) return "bg-warning/60"
  return "bg-destructive/60"
}

export function LatencyHeatmap() {
  return (
    <Card className="p-6">
      <div className="mb-4">
        <h3 className="font-semibold">Latency Heatmap</h3>
        <p className="text-sm text-muted-foreground">Average latency by time of day</p>
      </div>
      <div className="overflow-x-auto">
        <div className="inline-flex flex-col gap-1">
          <div className="flex gap-1">
            <div className="w-12" />
            {hours.map((hour) => (
              <div key={hour} className="flex h-6 w-6 items-center justify-center text-xs text-muted-foreground">
                {hour % 3 === 0 ? hour : ""}
              </div>
            ))}
          </div>
          {heatmapData.map((dayData, dayIndex) => (
            <div key={days[dayIndex]} className="flex gap-1">
              <div className="flex w-12 items-center text-xs text-muted-foreground">{days[dayIndex]}</div>
              {dayData.map((cell, hourIndex) => (
                <div
                  key={`${dayIndex}-${hourIndex}`}
                  className={`h-6 w-6 rounded-sm ${getColor(cell.latency)}`}
                  title={`${cell.day} ${cell.hour}:00 - ${cell.latency.toFixed(1)}ns`}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="h-4 w-4 rounded-sm bg-success/20" />
            <div className="h-4 w-4 rounded-sm bg-success/40" />
            <div className="h-4 w-4 rounded-sm bg-primary/40" />
            <div className="h-4 w-4 rounded-sm bg-primary/60" />
            <div className="h-4 w-4 rounded-sm bg-warning/60" />
            <div className="h-4 w-4 rounded-sm bg-destructive/60" />
          </div>
          <span>More</span>
        </div>
      </div>
    </Card>
  )
}
