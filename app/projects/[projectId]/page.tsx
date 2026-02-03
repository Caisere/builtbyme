import { getProjects } from "@/lib/projects/projects-select";

export const generateStaticParams = async () => {
  const projects = await getProjects();
  return projects.map((project) => ({
    projectId: String(project.id),
  }));
};

async function Page({params}: {params: Promise<{projectId: string}>}) {

  const {projectId} = await params;
  
  return <div>Project Details Page {projectId}</div>;
}

export default Page;