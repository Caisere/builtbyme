'use client'

import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { downvoteProjectAction, upvoteProjectAction } from "@/lib/projects/project-actions";
import { toast } from "sonner";
import { useOptimistic, useTransition } from "react";

type VoteButtonProps = {
  hasVoted?: boolean;
  voteCount: number;
  projectId: number;
}

export function VoteButton({ hasVoted, voteCount, projectId }: VoteButtonProps) {
  const [isPending, startTransition] = useTransition()
  const [optimisticVoteCount, setOptimisticVoteCount] = useOptimistic(
    voteCount,
    (currentVoteCount: number, change: unknown) => {
      const numericChange = typeof change === "number" ? change : 0;
      return Math.max(0, currentVoteCount + numericChange);
    }
  );

  async function upvoteProject() {

    startTransition(async () => {
      setOptimisticVoteCount(1);
      const response = await upvoteProjectAction({ projectId });
  
      if (!response.success) {
        toast.error(response.message || "Failed to upvote the project. Please try again.");
      }
  
      toast.success(response.message || "Project upvoted successfully!");
    });
  }

  async function downvoteProject() {

    startTransition(async () => { 
        setOptimisticVoteCount(-1);
        const response = await downvoteProjectAction({ projectId });
    
        if (!response.success) {
          toast.error(response.message || "Failed to downvote the project. Please try again.");
        }
    
        toast.success(response.message || "Project downvoted successfully!");
    })

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
        disabled={isPending}
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
        {optimisticVoteCount}
      </span>
      <Button
        variant="ghost"
        size="icon-sm"
        disabled={isPending}
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