"use client";

import { ClockIcon, SearchIcon, TrendingUpIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import ProjectCard from "./project-card";
import { Project } from "@/app/types";
import { useMemo, useState } from "react";

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"trending" | "recent">("trending");

  const filteredProjects = useMemo(() => {
    const filtered = [...projects];

    if (searchQuery.length > 0) {
      return filtered.filter((project) =>
        project.name.toLowerCase().includes(searchQuery?.toLowerCase()),
      );
    }

    switch (sortBy) {
      case "trending": {
        return filtered.sort((a, b) => b.voteCount - a.voteCount);
      }

      case "recent": {
        return filtered.sort(
          (a, b) =>
            new Date(b.createdAt || "").getTime() -
            new Date(a.createdAt || "").getTime(),
        );
      }

      default: {
        return filtered;
      }
    }
  }, [searchQuery, projects, sortBy]);

  return (
    <main>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <SearchIcon className="size-4 absolute text-muted-foreground left-2 top-1/2 -translate-y-1/2" />
          <Input
            type="text"
            placeholder="Search projects"
            className="pl-10"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={sortBy === "trending" ? "default" : "outline"}
            onClick={() => setSortBy("trending")}
          >
            <TrendingUpIcon className="size-4 cursor-pointer" />
            <span>Trending</span>
          </Button>
          <Button variant={sortBy === 'recent' ? 'default' : 'outline'} onClick={() => setSortBy("recent")}>
            <ClockIcon className="size-4 cursor-pointer" />
            <span>Recent</span>
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          Showing {projects?.length} products
        </p>
      </div>

      <div className="grid-wrapper">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
