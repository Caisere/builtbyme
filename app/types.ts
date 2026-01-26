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