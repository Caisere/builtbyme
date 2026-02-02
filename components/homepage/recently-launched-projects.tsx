// 'use cache'

import { Calendar1Icon, RocketIcon } from "lucide-react";
import SectionHeader from "../common-components/section-header";
import ProjectCard from "../projects/project-card";
import EmptyProject from "../common-components/empty-project";
import { getRecentlyLaunchedProjects } from "@/lib/projects/projects-select";

async function RecentlyLaunchedProjects() {
  const recentlyLaunchedProjects = await getRecentlyLaunchedProjects()
  return (
    <section className="py-20">
      <div className="wrapper space-y-12">
        <SectionHeader 
          title="Recently Launched Projects" 
          description="Discover the latest projects shared by our vibrant community of creators."
          icon={RocketIcon}
        /> 
        <div >
          {recentlyLaunchedProjects.length > 0 
            ? 
              <div className="grid-wrapper">
                {recentlyLaunchedProjects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            : (
              <EmptyProject message='No Projects launched in the last week. Check back soon for new launches!'icon={Calendar1Icon}/>
            )
          }
        </div>
      </div>
    </section>
  );
}

export default RecentlyLaunchedProjects