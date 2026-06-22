import { notFound } from "next/navigation";
import { ResearchProjectDetail } from "@/components/modules/research-project-detail";
import { researchProjects } from "@/data/research-projects";

export function generateStaticParams() {
  return researchProjects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = researchProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return <ResearchProjectDetail project={project} />;
}
