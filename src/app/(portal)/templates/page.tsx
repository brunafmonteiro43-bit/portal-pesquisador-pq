import { Download, Eye, FileCheck2, Filter } from "lucide-react";
import { FavoriteButton } from "@/components/modules/favorite-button";
import { SectionHeader } from "@/components/modules/section-header";
import { StatusPill } from "@/components/modules/status-pill";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { templates } from "@/data/portal-content";

export default function TemplatesPage() {
  const categories = Array.from(new Set(templates.map((template) => template.category)));

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Repositório institucional"
        title="Modelos e Templates"
        description="Cards com categoria, descrição, versão, data de atualização, tipo de arquivo e downloads."
        action={
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" /> Filtros por categoria
          </Button>
        }
      />

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge key={category} variant="secondary">
            {category}
          </Badge>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {templates.map((template) => (
          <Card key={template.slug}>
            <CardHeader className="space-y-4">
              <div className="flex flex-row items-start justify-between gap-4">
                <div className="flex gap-3">
                  <span className="mt-1 flex h-12 w-12 items-center justify-center rounded-md bg-primary-soft text-accent">
                    <FileCheck2 className="h-6 w-6" />
                  </span>
                  <div>
                    <CardTitle className="text-xl">{template.title}</CardTitle>
                    <p className="mt-1 text-sm text-muted-foreground">{template.category}</p>
                  </div>
                </div>
                <StatusPill status={template.status} />
              </div>
              <div className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-3">
                <p><span className="font-semibold text-foreground">Versão:</span> {template.version}</p>
                <p><span className="font-semibold text-foreground">Atualização:</span> {template.updatedAt}</p>
                <p><span className="font-semibold text-foreground">Arquivo:</span> {template.fileType}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-6 text-muted-foreground">{template.description}</p>
              <div className="flex flex-wrap gap-2">
                {template.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-col gap-3 border-t pt-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm text-muted-foreground">{template.downloads} downloads</span>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline">
                    <Eye className="mr-2 h-4 w-4" /> Visualizar
                  </Button>
                  <Button>
                    <Download className="mr-2 h-4 w-4" /> Baixar
                  </Button>
                  <FavoriteButton item={{ id: template.slug, type: "documento", title: template.title, href: "/templates" }} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
