import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, SparkleIcon } from "lucide-react";
import Link from "next/link";
import HeroStats  from "./hero-stats";
import { statsData } from "@/lib/data";



export function HeroSection () {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20">
      <div className="wrapper">
        <div className="flex flex-col items-center justify-center lg:py-24 py-12 text-center gap-4">
          <LiveBagde />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-b max-w-5xl">Share What You&apos;ve Built, Discover What&apos;s Launching </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">A community platform for creators to showcase their apps, Al tools, SaaS products, and creative projects. Authentic launches, real builders, genuine feedback</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button asChild className="transtion-colors duration-300">
              <Link href="/submit">
                <span><SparkleIcon className="size-5" /></span>
                <span>Share Your Project</span>
              </Link>
            </Button>
            <Button asChild variant="secondary" className="transtion-colors duration-300">
              <Link href="/projects">
                <span>Discover Projects</span>
                <span><ArrowRightIcon className="size-5" /></span>
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 w-full max-w-2xl">
            {statsData.map(stat => (
              <HeroStats 
                key={stat.label} 
                icon={stat.icon} 
                value={stat.value} 
                label={stat.label}
                hasBorder={stat.hasBorder} 
              />
            ))}
            
          </div>
        </div>
      </div>
    </section>
  )
}




const LiveBagde = () => {
  return (
    <Badge 
      variant='outline' 
      className="px-4 py-2 mb-8 text-sm backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity/75"/>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"/>
      </span>
      <span className="text-muted-foreground">
        Join thousands of creators sharing their work
        </span>
    </Badge>
  )
}