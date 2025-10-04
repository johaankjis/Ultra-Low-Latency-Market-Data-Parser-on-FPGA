import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, Database, Shield, Zap } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Configure system parameters and preferences</p>
      </div>

      <Card className="p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-lg bg-primary/10 p-2">
            <Zap className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">Performance Settings</h3>
            <p className="text-sm text-muted-foreground">Configure latency and throughput parameters</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Target Latency</p>
              <p className="text-sm text-muted-foreground">Maximum acceptable packet latency</p>
            </div>
            <input
              type="text"
              defaultValue="100ns"
              className="w-32 rounded-md border border-border bg-background px-3 py-2 font-mono text-sm"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Parser Lanes</p>
              <p className="text-sm text-muted-foreground">Number of parallel processing lanes</p>
            </div>
            <input
              type="number"
              defaultValue="4"
              className="w-32 rounded-md border border-border bg-background px-3 py-2 font-mono text-sm"
            />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-lg bg-chart-2/10 p-2">
            <Bell className="h-5 w-5 text-chart-2" />
          </div>
          <div>
            <h3 className="font-semibold">Alerts & Notifications</h3>
            <p className="text-sm text-muted-foreground">Configure system alerts and thresholds</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Latency Alert Threshold</p>
              <p className="text-sm text-muted-foreground">Alert when latency exceeds this value</p>
            </div>
            <input
              type="text"
              defaultValue="120ns"
              className="w-32 rounded-md border border-border bg-background px-3 py-2 font-mono text-sm"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Error Rate Alert</p>
              <p className="text-sm text-muted-foreground">Alert when error rate exceeds threshold</p>
            </div>
            <input
              type="text"
              defaultValue="0.1%"
              className="w-32 rounded-md border border-border bg-background px-3 py-2 font-mono text-sm"
            />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-lg bg-chart-3/10 p-2">
            <Database className="h-5 w-5 text-chart-3" />
          </div>
          <div>
            <h3 className="font-semibold">Data Retention</h3>
            <p className="text-sm text-muted-foreground">Configure metrics storage and retention</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Metrics Retention Period</p>
              <p className="text-sm text-muted-foreground">How long to store historical data</p>
            </div>
            <select className="w-32 rounded-md border border-border bg-background px-3 py-2 text-sm">
              <option>7 days</option>
              <option>30 days</option>
              <option>90 days</option>
              <option>1 year</option>
            </select>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-lg bg-chart-4/10 p-2">
            <Shield className="h-5 w-5 text-chart-4" />
          </div>
          <div>
            <h3 className="font-semibold">Security</h3>
            <p className="text-sm text-muted-foreground">Access control and authentication</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">API Authentication</p>
              <p className="text-sm text-muted-foreground">Require authentication for API access</p>
            </div>
            <Button variant="outline" size="sm">
              Configure
            </Button>
          </div>
        </div>
      </Card>

      <div className="flex justify-end gap-3">
        <Button variant="outline">Reset to Defaults</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  )
}
