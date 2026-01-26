import FeaturedProjects from "@/components/homepage/featured-projects";
import { HeroSection } from "@/components/homepage/hero-section";
import RecentlyLaunchedProjects from "@/components/homepage/recently-launched-projects";


export default function Home() {
  return (
    <div>
      <HeroSection  />
      <FeaturedProjects />
      <RecentlyLaunchedProjects />
    </div>
  );
}
