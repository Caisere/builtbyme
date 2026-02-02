import { db } from "@/db";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";
// import { cacheLife } from "next/cache";

export async function getProjects() {
  // 'use cache';
  // cacheLife('minutes')
  const allProjects = await db.select().from(projects).where(eq(
    projects.status, 'approved'
  ))
  // console.log('Projects:', allProjects);
  return allProjects;
}