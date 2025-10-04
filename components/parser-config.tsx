"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const config = [
  { name: "AXI Stream Width", value: "512 bits", editable: false },
  { name: "Parser Lanes", value: "4", editable: true },
  { name: "Buffer Depth", value: "1024 packets", editable: true },
  { name: "PTP Clock Source", value: "External 1588", editable: false },
  { name: "Validation Mode", value: "Strict", editable: true },
  { name: "Output Format", value: "Binary", editable: true },
]

export function ParserConfig() {
  return (
    <Card className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold">Parser Configuration</h3>
          <p className="text-sm text-muted-foreground">Hardware parameters</p>
        </div>
        <Button variant="outline" size="sm">
          Edit Config
        </Button>
      </div>
      <div className="space-y-3">
        {config.map((item) => (
          <div key={item.name} className="flex items-center justify-between rounded-lg border border-border p-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">{item.name}</span>
              {item.editable && (
                <span className="rounded bg-primary/10 px-2 py-0.5 text-xs text-primary">Configurable</span>
              )}
            </div>
            <span className="font-mono text-sm">{item.value}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
