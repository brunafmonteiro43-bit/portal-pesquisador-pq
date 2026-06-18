import { Activity, Database, Upload, UsersRound } from "lucide-react";
import { redirect } from "next/navigation";
import { SectionHeader } from "@/components/modules/section-header";
import { MetricCard } from "@/components/modules/metric-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { adminMetrics, adminQueues, auditEvents } from "@/data/portal-content";
import { auth } from "@/lib/auth";

const icons = [UsersRound, Database, Activity, Upload];

export default async function AdminPage() {
  const session = await auth();

  if (!session?.user || !["COCEN_ADMIN", "SUPER_ADMIN"].includes(session.user.role)) {
    redirect("/dashboard?denied=1");
  }

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Gestão COCEN"
        title="Gestão COCEN"
        description="Gestão de termos, documentos, editais, trilhas, FAQs, métricas, upload e controle de versões."
      />

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {adminMetrics.map((metric, index) => (
          <MetricCard key={metric.label} {...metric} icon={icons[index]} />
        ))}
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Fila editorial</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 lg:grid-cols-3">
          {adminQueues.map((item, index) => (
            <div key={item.title} className="rounded-md border p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium">{item.title}</p>
                <Badge variant={index === 0 ? "default" : "secondary"}>
                  {item.count}
                </Badge>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Auditoria recente</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {auditEvents.map((event) => (
            <div key={event.id} className="flex flex-col gap-1 rounded-md border p-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-medium">{event.action}</p>
                <p className="text-sm text-muted-foreground">{event.detail}</p>
              </div>
              <span className="text-sm text-muted-foreground">{event.when}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
