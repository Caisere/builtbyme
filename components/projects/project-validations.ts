import z from "zod";

export const ProjectSchema = z.object({
  name: z.string().min(3, "Project name must be at least 3 characters long").max(100, "Project name must be at most 100 characters long"),
  slug: z.string().min(3, "Slug must be at least 3 characters long").max(140, "Slug must be at most 100 characters long").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug can only contain lowercase letters, numbers, and hyphens"),
  tagline: z.string().min(10, "Tagline must be at least 10 characters long").max(150, "Tagline must be at most 150 characters long"),
  description: z.string().min(20, "Description must be at least 20 characters long").max(2000, "Description must be at most 2000 characters long").optional(),
  websiteUrl: z.string().min(10, "Website URL must be at least 10 characters long"),
  tags: z.string().min(1, "Each tag must be at least 1 character long").transform((val) => val.split(',').map((tag) => tag.trim().toLowerCase()))
})