import FeaturedProjects from "@/components/homepage/featured-projects";
import { HeroSection } from "@/components/homepage/hero-section";
import RecentlyLaunchedProjects from "@/components/homepage/recently-launched-projects";
import { Suspense } from "react";


export default function Home() {
  return (
    <div>
      <HeroSection  />
      <FeaturedProjects />
      <Suspense fallback={<div>Loading...</div>}>
        <RecentlyLaunchedProjects />
      </Suspense>
    </div>
  );
}
