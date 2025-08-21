import { Safari } from "@/components/ui/safari";
import projects from "@/data/projects.json";
import { redirect } from "next/navigation";
import Modal from "./modal";

export default async function ProjectModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const selectedProject = projects.find(
    (project) => project.id.toString() === id
  );
  console.log(id);
  if (!selectedProject) {
    return null;
  }

  return <Modal selectedProject={selectedProject} />;
}
