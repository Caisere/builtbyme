import { db } from "@/db";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";
// import { cacheLife } from "next/cache";

export async function getProjects() {
  'use cache';
  // cacheLife('minutes')
  const allProjects = await db.select().from(projects).where(eq(
    projects.status, 'approved'
  ))
  return allProjects;
}

export async function getAllProjects() {
  const allProjects = await db.select().from(projects).where(eq(
    projects.status, 'approved'
  ))
  return allProjects;
}

export async function getRecentlyLaunchedProjects() {

  const allProjects = await getAllProjects()

  const oneWeekAgo = new Date()
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 14)

  // filter out recently launched projects within the last week
  const recentProjects = allProjects.filter(project => project.createdAt && new Date(project.createdAt.toISOString()) >= oneWeekAgo);

  console.log(recentProjects, oneWeekAgo)
  return recentProjects;
}