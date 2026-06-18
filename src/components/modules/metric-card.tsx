import { Activity, type LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function MetricCard({
  label,
  value,
  detail,
  trend,
  icon: Icon = Activity
}: {
  label: string;
  value: string;
  detail: string;
  trend?: string;
  icon?: LucideIcon;
}) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="mt-2 text-2xl font-semibold">{value}</p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary/20 text-secondary-foreground">
            <Icon className="h-4 w-4" />
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between gap-2 text-sm">
          <span className="text-muted-foreground">{detail}</span>
          {trend ? <span className="font-medium text-accent">{trend}</span> : null}
        </div>
      </CardContent>
    </Card>
  );
}
