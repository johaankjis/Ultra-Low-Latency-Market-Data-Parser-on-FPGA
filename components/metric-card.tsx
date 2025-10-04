import { Card } from "@/components/ui/card"
import { ArrowDown, ArrowUp, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

interface MetricCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down" | "stable"
  description: string
}

export function MetricCard({ title, value, change, trend, description }: MetricCardProps) {
  const TrendIcon = trend === "up" ? ArrowUp : trend === "down" ? ArrowDown : Minus
  const trendColor = trend === "up" ? "text-success" : trend === "down" ? "text-primary" : "text-muted-foreground"

  return (
    <Card className="p-6">
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <div className="flex items-baseline gap-2">
          <p className="font-mono text-3xl font-bold">{value}</p>
          <div className={cn("flex items-center gap-1 text-sm font-medium", trendColor)}>
            <TrendIcon className="h-3 w-3" />
            <span className="font-mono">{change}</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </Card>
  )
}
