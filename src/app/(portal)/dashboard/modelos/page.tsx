"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ExternalLink,
  FileText,
  Info,
  RotateCcw,
  Search,
  ShieldAlert,
  Star,
  Share2,
  ChevronDown
} from "lucide-react";
import { SectionHeader } from "@/components/modules/section-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  cocenCenters,
  fundingModelAgencies,
  fundingModelCallStatuses,
  fundingModelProjectStages,
  fundingModelResourceSections,
  fundingModelResourceTypes,
  fundingModelResources
} from "@/data/funding-models";

const ALL_CENTERS = "Todos";
const ALL_LINES = "Todas as linhas";

function formatDate(date: string) {
  const parts = date.split("-");
  if (parts.length !== 3) return date;
  return parts[2] + "/" + parts[1] + "/" + parts[0];
}

export default function TemplatesPage() {
  const [selectedAgency, setSelectedAgency] = useState<(typeof fundingModelAgencies)[number]>("Todos");
  const [selectedSection, setSelectedSection] =
    useState<(typeof fundingModelResourceSections)[number]>("Todas as seções");
  const [selectedCenter, setSelectedCenter] = useState(ALL_CENTERS);
  const [selectedLine, setSelectedLine] = useState(ALL_LINES);
  const [selectedType, setSelectedType] =
    useState<(typeof fundingModelResourceTypes)[number]>("Todos os tipos");
  const [selectedStage, setSelectedStage] =
    useState<(typeof fundingModelProjectStages)[number]>("Todas as etapas");
  const [selectedStatus, setSelectedStatus] =
    useState<(typeof fundingModelCallStatuses)[number]>("Todos os status");
  const [query, setQuery] = useState("");
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [savedOnly, setSavedOnly] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("cocen-saved-research-resources");
      if (stored) setSavedIds(JSON.parse(stored) as string[]);
    } catch {
      setSavedIds([]);
    }
  }, []);

  const allResearchLines = useMemo(
    () => Array.from(new Set(cocenCenters.flatMap((center) => center.researchLines))).sort((a, b) => a.localeCompare(b, "pt-BR")),
    []
  );
  const selectedCenterRecord = cocenCenters.find((center) => center.id === selectedCenter);
  const availableResearchLines =
    selectedCenter === ALL_CENTERS ? allResearchLines : selectedCenterRecord?.researchLines ?? [];

  const filteredResources = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("pt-BR");

    return fundingModelResources.filter((resource) => {
      const matchesAgency = selectedAgency === "Todos" || resource.agency === selectedAgency;
      const matchesSection = selectedSection === "Todas as seções" || resource.section === selectedSection;
      const matchesCenter = selectedCenter === ALL_CENTERS || resource.centers.includes(selectedCenter);
      const matchesLine = selectedLine === ALL_LINES || resource.researchLines.includes(selectedLine);
      const matchesType = selectedType === "Todos os tipos" || resource.resourceType === selectedType;
      const matchesStage = selectedStage === "Todas as etapas" || resource.projectStage === selectedStage;
      const matchesStatus = selectedStatus === "Todos os status" || resource.callStatus === selectedStatus;
      const searchable = [
        resource.title,
        resource.agency,
        resource.organization,
        resource.description,
        resource.category,
        resource.scope,
        resource.resourceType,
        resource.section,
        resource.projectStage,
        resource.eligibilitySummary,
        resource.relevanceNote,
        resource.callStatus,
        resource.deadline ?? "",
        ...resource.centers,
        ...resource.researchLines,
        ...resource.tags
      ]
        .join(" ")
        .toLocaleLowerCase("pt-BR");

      return (
        (!savedOnly || savedIds.includes(resource.id)) &&
        matchesAgency &&
        matchesSection &&
        matchesCenter &&
        matchesLine &&
        matchesType &&
        matchesStage &&
        matchesStatus &&
        (!normalizedQuery || searchable.includes(normalizedQuery))
      );
    });
  }, [
    query,
    savedOnly,
    savedIds,
    selectedAgency,
    selectedCenter,
    selectedLine,
    selectedSection,
    selectedStage,
    selectedStatus,
    selectedType
  ]);

  function resetFilters() {
    setSelectedAgency("Todos");
    setSelectedSection("Todas as seções");
    setSelectedCenter(ALL_CENTERS);
    setSelectedLine(ALL_LINES);
    setSelectedType("Todos os tipos");
    setSelectedStage("Todas as etapas");
    setSelectedStatus("Todos os status");
    setQuery("");
    setSavedOnly(false);
  }

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Biblioteca de apoio ao pesquisador"
        title="Recursos para Pesquisa"
        description="Encontre modelos, formulários, guias, documentos institucionais e orientações de ética e integridade para apoiar cada etapa da pesquisa."
      />

      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
        <div className="flex items-start gap-3">
          <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <div className="space-y-1">
            <p className="font-semibold">A associação temática ainda não confirma elegibilidade.</p>
            <p className="leading-6">
              As recomendações são uma triagem inicial baseada nos temas publicados pela COCEN. Antes de submeter,
              confira o edital e os requisitos na fonte oficial. A validação institucional dos itens está pendente
              e a data de checagem de cada link ainda não foi registrada; por isso, o portal não os apresenta como
              “verificados pela COCEN”.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <h2 className="text-sm font-semibold text-foreground">Encontre o recurso que você precisa</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Comece pelo objetivo. Os atalhos aplicam filtros ao catálogo; confira os requisitos na fonte oficial.
          </p>
        </div>
        <div className="flex flex-wrap gap-2" aria-label="Atalhos por objetivo">
          {[
            { label: "Elaborar projeto", section: "Elaboração e submissão" },
            { label: "Preparar submissão", section: "Elaboração e submissão" },
            { label: "Prestação de contas", section: "Execução e prestação de contas" },
            { label: "Organizar evento", section: "Apoio a eventos" },
            { label: "Ética e integridade", section: "Ética, integridade e compliance em pesquisa" },
            { label: "Fomento internacional", section: "Fomento internacional" }
          ].map((shortcut) => (
            <button key={shortcut.label} type="button" onClick={() => setSelectedSection(shortcut.section as (typeof fundingModelResourceSections)[number])} className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">{shortcut.label}</button>
          ))}
          <button type="button" onClick={() => setSavedOnly((value) => !value)} aria-pressed={savedOnly} className={savedOnly ? "rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground" : "rounded-lg border px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"}>
            <Star className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" /> Meus salvos ({savedIds.length})
          </button>
        </div>
        <div className="flex flex-wrap gap-2" aria-label="Filtrar por seção do catálogo">
          {fundingModelResourceSections.map((section) => {
            const active = selectedSection === section;
            return (
              <button
                key={section}
                type="button"
                onClick={() => setSelectedSection(section)}
                aria-pressed={active}
                className={
                  active
                    ? "rounded-full bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm"
                    : "rounded-full border bg-background px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                }
              >
                {section}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground">Filtrar por instituição ou agência</h2>
        <div className="flex flex-wrap gap-2" aria-label="Filtrar por agência">
          {fundingModelAgencies.map((agency) => {
            const active = selectedAgency === agency;
            return (
              <button
                key={agency}
                type="button"
                onClick={() => setSelectedAgency(agency)}
                aria-pressed={active}
                className={
                  active
                    ? "rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm"
                    : "rounded-full border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                }
              >
                {agency}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <label className="relative block sm:col-span-2 xl:col-span-3">
          <span className="sr-only">Buscar modelo, agência, centro ou tema de pesquisa</span>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar modelo, agência, centro, tema ou requisito..."
            className="h-11 w-full rounded-md border border-input bg-background pl-10 pr-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
          />
        </label>

        <label>
          <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Centro ou núcleo</span>
          <select
            value={selectedCenter}
            onChange={(event) => {
              setSelectedCenter(event.target.value);
              setSelectedLine(ALL_LINES);
            }}
            className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
          >
            <option value={ALL_CENTERS}>Todos os centros e núcleos</option>
            {cocenCenters.map((center) => (
              <option key={center.id} value={center.id}>
                {center.id} — {center.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Tema/linha de pesquisa</span>
          <select
            value={selectedLine}
            onChange={(event) => setSelectedLine(event.target.value)}
            disabled={availableResearchLines.length === 0}
            className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <option value={ALL_LINES}>Todas as linhas disponíveis</option>
            {availableResearchLines.map((line) => (
              <option key={line} value={line}>
                {line}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Tipo de recurso</span>
          <select
            value={selectedType}
            onChange={(event) => setSelectedType(event.target.value as (typeof fundingModelResourceTypes)[number])}
            className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
          >
            {fundingModelResourceTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Etapa do projeto</span>
          <select
            value={selectedStage}
            onChange={(event) => setSelectedStage(event.target.value as (typeof fundingModelProjectStages)[number])}
            className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
          >
            {fundingModelProjectStages.map((stage) => (
              <option key={stage} value={stage}>
                {stage}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Situação do recurso/chamada</span>
          <select
            value={selectedStatus}
            onChange={(event) => setSelectedStatus(event.target.value as (typeof fundingModelCallStatuses)[number])}
            className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
          >
            {fundingModelCallStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>
      </div>

      {selectedCenterRecord && selectedCenterRecord.researchLines.length === 0 && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
          <p className="font-semibold">{selectedCenterRecord.id}: linhas de pesquisa a confirmar</p>
          <p className="mt-1 leading-6">
            A página pública de linhas de pesquisa da COCEN consultada não apresenta linhas para este centro/núcleo.
            Os recursos transversais continuam disponíveis, mas a recomendação temática precisa ser validada com a unidade.
          </p>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border bg-muted/30 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-foreground">
            {filteredResources.length} de {fundingModelResources.length} recursos
          </p>
          <p className="text-xs text-muted-foreground">
            {selectedCenterRecord ? `Filtro de centro: ${selectedCenterRecord.id}` : "Todos os centros e núcleos"}
            {selectedLine !== ALL_LINES ? ` · Tema: ${selectedLine}` : ""}
            {selectedSection !== "Todas as seções" ? ` · Categoria: ${selectedSection}` : ""}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Links para fontes oficiais; validação institucional e checagem de links ainda pendentes.
          </p>
        </div>
        <button
          type="button"
          onClick={resetFilters}
          className="inline-flex min-h-9 items-center gap-2 rounded-md border bg-background px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
          Limpar filtros
        </button>
      </div>

      {filteredResources.length === 0 ? (
        <div className="rounded-xl border border-dashed p-10 text-center">
          <p className="font-semibold">Nenhum recurso encontrado.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Tente outro termo ou limpe algum dos filtros selecionados.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {filteredResources.map((resource) => {
            const centerLabel = resource.associationStatus === "Transversal"
              ? "Referência transversal aos centros e núcleos"
              : resource.associationStatus === "Não classificada"
                ? "Associação temática ainda não classificada"
                : resource.centers.join(", ");
            const lineLabels = resource.associationStatus === "Transversal"
              ? "Referência geral; não indica aderência a uma linha específica"
              : resource.researchLines.length > 0
                ? resource.researchLines.slice(0, 3).join(" · ") + (resource.researchLines.length > 3 ? " · +" + (resource.researchLines.length - 3) : "")
                : "Linha de pesquisa não informada";
            const relevanceLabel = resource.associationStatus === "Transversal" ? "Referência geral" : resource.associationStatus === "Temática" ? "Aderência temática sugerida" : "Associação pendente";
            const actionLabel = resource.resourceType === "Edital de referência" || resource.callStatus === "Chamada aberta"
              ? "Confira elegibilidade, prazo e documentos exigidos antes de iniciar a submissão."
              : resource.section === "Ética, integridade e compliance em pesquisa"
                ? "Consulte a orientação institucional aplicável e confirme com a área responsável quando necessário."
                : resource.projectStage === "Execução e prestação de contas"
                  ? "Confira as regras do instrumento concedido e organize os comprovantes exigidos."
                  : resource.resourceType === "Modelo/roteiro" || resource.resourceType === "Formulário"
                    ? "Use como ponto de partida e adapte às instruções da modalidade e da instituição financiadora."
                    : "Consulte o documento para entender quais orientações se aplicam ao seu projeto.";
            const statusLabel =
              resource.callStatus === "Chamada aberta" && resource.deadline
                ? "Chamada aberta · prazo " + formatDate(resource.deadline)
                : resource.callStatus === "Encerrada / histórica" && resource.deadline
                  ? "Referência histórica · prazo encerrado em " + formatDate(resource.deadline)
                  : resource.callStatus === "Permanente"
                    ? "Referência contínua; não é uma chamada específica"
                    : resource.callStatus;
            const relatedResources = fundingModelResources
              .filter((other) => other.id !== resource.id && (other.section === resource.section || other.tags.some((tag) => resource.tags.includes(tag))))
              .slice(0, 3);

            return (
              <Card key={resource.id} className="flex h-full flex-col">
                <CardHeader className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <FileText className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex flex-wrap gap-2">
                        <Badge variant="secondary">{resource.agency}</Badge>
                        <Badge variant="outline">{resource.resourceType}</Badge>
                        <Badge variant={resource.reviewStatus === "Validado pela COCEN" ? "secondary" : "outline"}>{resource.reviewStatus === "Validado pela COCEN" ? "Validado pela COCEN" : "Pendente de validação"}</Badge>
                        {resource.callStatus === "Chamada aberta" || resource.callStatus === "Encerrada / histórica" ? <Badge variant="outline">{resource.callStatus}</Badge> : null}
                      </div>
                      <CardTitle className="text-lg leading-6">{resource.title}</CardTitle>
                      <p className="mt-1 text-sm text-muted-foreground">{resource.organization}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col gap-4">
                  <p className="text-sm leading-6 text-muted-foreground">{resource.description}</p>

                  <div className="rounded-lg border bg-muted/30 p-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-xs font-semibold uppercase tracking-wide text-foreground">Relevância para a pesquisa</p>
                      <Badge variant={resource.associationStatus === "Temática" ? "secondary" : "outline"}>{relevanceLabel}</Badge>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{resource.relevanceNote}</p>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">{actionLabel}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">{resource.section}</Badge>
                    <Badge variant="outline">{resource.projectStage}</Badge>
                    <Badge variant="secondary">{resource.category}</Badge>
                    {resource.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>

                  <details className="rounded-lg border px-3 py-2 text-sm">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-ring">Ver detalhes e orientações <ChevronDown className="h-4 w-4 shrink-0" aria-hidden="true" /></summary>
                    <div className="mt-3 space-y-2 text-xs">
                      <p><span className="font-semibold text-foreground">Centros/núcleos:</span>{" "}<span className="text-muted-foreground">{centerLabel}</span></p>
                      <p><span className="font-semibold text-foreground">Temas relacionados:</span>{" "}<span className="text-muted-foreground">{lineLabels}</span></p>
                      <p><span className="font-semibold text-foreground">Situação:</span>{" "}<span className="text-muted-foreground">{statusLabel}</span></p>
                      <p><span className="font-semibold text-foreground">Como usar:</span>{" "}<span className="text-muted-foreground">{actionLabel}</span></p>
                      <p><span className="font-semibold text-foreground">Elegibilidade:</span>{" "}<span className="text-muted-foreground">{resource.eligibilitySummary}</span></p>
                      {relatedResources.length > 0 ? (
                        <div className="border-t pt-2">
                          <p className="mb-1 font-semibold text-foreground">Recursos relacionados</p>
                          <ul className="space-y-1">
                            {relatedResources.map((related) => <li key={related.id}><a href={related.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:no-underline">{related.title}</a></li>)}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </details>

                  <div className="mt-auto border-t pt-4">
                    <div className="mb-4 grid gap-2 text-xs text-muted-foreground sm:grid-cols-2">
                      <p>
                        <span className="font-semibold text-foreground">Fonte:</span> {resource.sourceLabel}
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Etapa:</span> {resource.projectStage}
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Última checagem do link:</span>{" "}
                        {resource.lastCheckedAt ? formatDate(resource.lastCheckedAt) : "Não registrada"}
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Validação institucional:</span>{" "}
                        {resource.reviewStatus === "Validado pela COCEN"
                          ? "Validado pela COCEN" + (resource.reviewedBy ? " · " + resource.reviewedBy : "")
                          : "Pendente"}
                      </p>
                    </div>

                    <div className="mb-3 flex flex-wrap gap-2">
                      <button type="button" onClick={() => {
                        const next = savedIds.includes(resource.id) ? savedIds.filter((id) => id !== resource.id) : [...savedIds, resource.id];
                        setSavedIds(next);
                        try { window.localStorage.setItem("cocen-saved-research-resources", JSON.stringify(next)); } catch { /* favoritos ficam apenas nesta sessão */ }
                      }} aria-pressed={savedIds.includes(resource.id)} className="inline-flex min-h-9 items-center gap-2 rounded-md border bg-background px-3 py-2 text-xs font-semibold hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                        <Star className={savedIds.includes(resource.id) ? "h-3.5 w-3.5 fill-current" : "h-3.5 w-3.5"} aria-hidden="true" /> {savedIds.includes(resource.id) ? "Salvo" : "Salvar recurso"}
                      </button>
                      <button type="button" onClick={() => {
                        const url = resource.sourceUrl;
                        if (navigator.clipboard?.writeText) void navigator.clipboard.writeText(url);
                        else window.prompt("Copie o link do recurso:", url);
                      }} className="inline-flex min-h-9 items-center gap-2 rounded-md border bg-background px-3 py-2 text-xs font-semibold hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                        <Share2 className="h-3.5 w-3.5" aria-hidden="true" /> Compartilhar fonte oficial
                      </button>
                    </div>
                    <a
                      href={resource.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 sm:w-auto"
                    >
                      Consultar fonte oficial
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      <div className="rounded-xl border bg-card p-5">
        <div className="flex items-start gap-3">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
          <div>
            <h2 className="font-semibold text-foreground">Como interpretar o catálogo</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              A associação por centro é uma triagem temática, não uma confirmação de elegibilidade. Recursos marcados como referência geral não indicam aderência específica; itens ainda não classificados precisam de revisão. A validação institucional e a checagem dos links devem ser registradas antes de divulgar o catálogo como oficialmente revisado. A biblioteca reúne modelos, guias, portais, documentos para eventos, materiais de execução e referências de ética, integridade e compliance.
            </p>
            <a
              href="https://www.cocen.unicamp.br/centros-e-nucleos/linhas-de-pesquisa"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4 hover:no-underline"
            >
              Consultar linhas de pesquisa na página oficial da COCEN
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
