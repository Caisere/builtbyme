"use server";

import { FormState } from "@/app/types";
import { ProjectSchema } from "@/components/projects/product-validations";

import { db } from "@/db";
import { projects } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { eq, sql } from "drizzle-orm";
import z from "zod";
import { authCheck } from "./helper/authcheck";
import { refresh, revalidatePath } from "next/cache";

export async function addProject(prev: FormState, formData: FormData) {
  try {
    console.log(formData);

    // get user id
    const { userId, orgId } = await auth();

    await authCheck()

    const user = await currentUser();

    const emailAddress = user?.emailAddresses?.[0].emailAddress || "Anonymous";

    // if no user
    if (!userId) {
      return {
        success: false,
        message: "User not authenticated",
      };
    }

    // raw-data
    const rawFormData = Object.fromEntries(formData.entries());

    //validate data
    const validateData = ProjectSchema.safeParse(rawFormData);

    if (!validateData.success) {
      return {
        success: false,
        errors: validateData.error.flatten().fieldErrors,
        message: "Invalid Data",
      };
    }

    const { name, tagline, tags, slug, description, websiteUrl } =
      validateData.data;

    const tagsArray = tags ? tags.filter((tag) => typeof tag === "string") : [];

    await db.insert(projects).values({
      name,
      tagline,
      slug,
      description,
      websiteUrl,
      userId,
      organizationId: orgId,
      tags: tagsArray,
      submittedBy: emailAddress,
    });

    return {
      success: true,
      message: "Project added successfully! It will be reviewed shortly",
    };
  } catch (error) {
    console.error("Error adding project:", error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
        message: "Error during validation",
      };
    }

    // Return a proper error response for any other errors
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
      errors: undefined,
    };
  }
}

export async function upvoteProjectAction({
  projectId,
}: {
  projectId: number;
}) {
  try {
    const { userId} = await auth();

    if (!userId) {
      return {
        success: false,
        message: "You must be signed in to vote a project",
      };
    }
    
    await db
      .update(projects)
      .set({
        voteCount: sql`${projects.voteCount} + 1`,
      })
      .where(eq(projects.id, projectId));

    refresh()
    revalidatePath("/");

    return {
      success: true,
      message: "Project upvoted successfully!",
    };
  } catch (error) {
    console.error("Error upvoting project:", error);
    return {
      success: false,
      message: "An unexpected error occurred while upvoting. Please try again.",
    };
  }
}

export async function downvoteProjectAction({
  projectId,
}: {
  projectId: number;
}) {
  try {

    const { userId } = await auth();

    if (!userId) {
      return {
        success: false,
        message: "You must be signed in to vote a project",
      };
    }


    await db
      .update(projects)
      .set({
        voteCount: sql`${projects.voteCount} - 1`,
      })
      .where(eq(projects.id, projectId));


    refresh()
    revalidatePath("/");
    
    return {
      success: true,
      message: "Project downvoted successfully!",
    };
  } catch (error) {
    console.error("Error downvoting project:", error);
    return {
      success: false,
      message: "An unexpected error occurred while downvoting. Please try again.",
    };
  }
}