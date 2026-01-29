import { db } from "@/db";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getProjects() {
  const allProjects = await db.select().from(projects).where(eq(
    projects.status, 'approved'
  ))
  console.log('Projects:', allProjects);
  return allProjects;
}