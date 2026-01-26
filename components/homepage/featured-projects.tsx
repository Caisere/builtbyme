import { ArrowRightIcon, StarIcon } from "lucide-react";
import SectionHeader from "../common-components/section-header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProjectCard from "../projects/project-card";
import { featuredProjects } from "@/lib/data";


export default function FeaturedProjects() {
  return (
    <section className="wrapper py-20">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 w-full">
        <div className="flex items-center justify-between mb-10">
          <SectionHeader 
            title="Featured Projects"
            icon={StarIcon}
            description="Top picks from our commmunity of creators and builders."
          />
        </div>
        <Button asChild variant="outline" className="transtion-colors duration-300 hover:bg-transparent hover:text-accent-foreground">
          <Link href="/explore">
            <span>View All</span>
            <ArrowRightIcon className="size-4" />
          </Link>
        </Button>
      </div>
      <div className="grid-wrapper">
        {featuredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}