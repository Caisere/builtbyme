import FeaturedProjects from "@/components/homepage/featured-projects";
import { HeroSection } from "@/components/homepage/hero-section";
import RecentlyLaunchedProjects from "@/components/homepage/recently-launched-projects";
import { ProjectSkeleton } from "@/components/projects/project-skeleton";
import { Suspense } from "react";


export default function Home() {
  return (
    <div>
      <HeroSection  />
      <FeaturedProjects />
      <Suspense fallback={<ProjectSkeleton />}>
        <RecentlyLaunchedProjects />
      </Suspense>
    </div>
  );
}
