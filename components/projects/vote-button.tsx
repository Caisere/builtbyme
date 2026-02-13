'use client'

import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { downvoteProjectAction, upvoteProjectAction } from "@/lib/projects/project-actions";
import { toast } from "sonner";

type VoteButtonProps = {
  hasVoted: boolean;
  voteCount: number;
  projectId: number;
}

export function VoteButton({hasVoted, voteCount, projectId}: VoteButtonProps) {
  
  async function upvoteProject() {
    const response = await upvoteProjectAction({ projectId });

    if (!response.success) {
      toast.error(response.message || "Failed to upvote the project. Please try again.");
    }

    toast.success(response.message || "Project upvoted successfully!");
  }

  async function downvoteProject() {
    const respose = await downvoteProjectAction({ projectId });

    if (!respose.success) {
      toast.error(respose.message || "Failed to downvote the project. Please try again.");
    }

    toast.success(respose.message || "Project downvoted successfully!");
  }
  
  return (
    <div
      className="flex flex-col items-center gap-1 shrink-0"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <Button
        variant="ghost"
        size="icon-sm"
        className={cn(
          "h-8 w-8 text-primary cursor-pointer",
          hasVoted
            ? "bg-primary/10 text-primary hover:bg-primary/20"
            : "hover:bg-primary/20 hover:text-primary",
        )}
        onClick={upvoteProject}
      >
        <ChevronUp className="size-4" />
      </Button>
      <span className="text-sm font-semibold transition-colors text-foreground">
        {voteCount}
      </span>
      <Button
        variant="ghost"
        size="icon-sm"
        className={cn(
          "h-8 w-8 text-primary",
          hasVoted
            ? "hover:text-destructive cursor-pointer"
            : "opacity/50 cursor-not-allowed",
        )}
        onClick={hasVoted ? downvoteProject : undefined}
      >
        <ChevronDown className="size-4" />
      </Button>
    </div>
  );
}