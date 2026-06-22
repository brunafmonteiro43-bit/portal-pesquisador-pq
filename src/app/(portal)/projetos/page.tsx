import { ResearchProjectsOverview } from "@/components/modules/research-projects-overview";
import { researchProjects } from "@/data/research-projects";

export default function ProjetosPage() {
  return <ResearchProjectsOverview projects={researchProjects} />;
}
