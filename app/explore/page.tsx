// 'use cache'

import SectionHeader from "@/components/common-components/section-header";
import { ProjectExplorer } from "@/components/projects/project-explorer";
import { getAllProjects } from "@/lib/projects/projects-select";
import { CompassIcon } from "lucide-react";

async function Page() {
  const projects = await getAllProjects();
  return (
    <div className="py-20">
      <div className="wrapper">
        <SectionHeader
          title="Explore All Projects"
          icon={CompassIcon}
          description="Browse and discover amazing projects from out community"
        />
        <ProjectExplorer projects={projects}/>
      </div>
    </div>
  );
}

export default Page;
