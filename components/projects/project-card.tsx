import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import {  StarIcon } from "lucide-react";
import { InferSelectModel } from "drizzle-orm";
import { projects } from "@/db/schema";
import { VoteButton } from "./vote-button";


type ProjectType = InferSelectModel<typeof projects>

export default function ProjectCard({project}:{project:ProjectType}) {
  const hasVoted = true

  return (
    <Link href={`/projects/${project.id}`}>
      <Card className="group card-hover hover:bg-primary-foreground/10 border-solid border-gray-400 max-h-[200px]">
        <CardHeader className="flex-1">
          <div className="flex items-start gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{project.name}</CardTitle>
                {project.status && 
                  <Badge className="gap-1 bg-primary text-primary-foreground">
                    <StarIcon className="size-3 fill-current" />
                    <span>Featured</span>
                  </Badge>}
              </div>
              <CardDescription>{project.description}</CardDescription>
            </div>
            {/* voting button */}
            <>
              <VoteButton hasVoted={hasVoted} voteCount={project.voteCount} projectId={project.id}/>
            </>
          </div>
        </CardHeader>
        <CardFooter>
          {project.tags?.map(tag => (
            <Badge variant='secondary' key={tag} className="mr-2 mb-2">{tag}</Badge>
          ))}
        </CardFooter>
      </Card>
    </Link>
  )
}