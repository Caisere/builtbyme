import { projects } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";
import { LucideIcon } from "lucide-react";

export type ProjectType = {
  id: number;
  name: string;
  description: string;
  link: string;
  tags: string[];
  votes: number;
  isFeatured: boolean;
} 


export type StatsType = {
  icon: LucideIcon;
  value: string;
  label: string;
  hasBorder?: boolean;
}

export interface FormState {
  success: boolean;
  errors?: Record<string, string[]> | undefined;
  message: string;
}


export type Project = InferSelectModel<typeof projects>;