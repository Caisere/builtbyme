'use server'

import { ProjectSchema } from "@/components/projects/product-validations";
import { FormState } from "@/components/projects/project-submit-form";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import z from "zod";



export async function addProject(prev: FormState, formData: FormData){
  try {

    console.log(formData)

      // get user id 
      const {userId, orgId} = await auth()

      if(!userId) {
        return {
          success: false,
          message: 'You must be signed in to submit a product'
        }
      }

      if(!orgId) {
        return {
          success: false,
          message: 'You must belong to an organization to submit a product'
        }
      }

      const user = await currentUser()
      
      const emailAddress = user?.emailAddresses?.[0].emailAddress || 'Anonymous'

      // if no user
      if (!userId) {
        return {
          success: false,
          message: 'User not authenticated',
        }
      }

      // raw-data
      const rawFormData = Object.fromEntries(formData.entries())

      //validate data
      const validateData = ProjectSchema.safeParse(rawFormData)

      if (!validateData.success) {
        return {
          success: false, 
          errors: validateData.error.flatten().fieldErrors,
          message: 'Invalid Data'
        }
      }

      const {name, tagline, tags, slug, description, websiteUrl} = validateData.data

      const tagsArray = tags ? tags.filter((tag) => typeof tag === 'string') : []

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
      })

      
    return {
      success: true,
      message: 'Project added successfully! It will be reviewed shortly',
    }

  } catch (error) {
    console.error('Error adding project:', error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
        message: 'Error during validation'
      }
    }

    // Return a proper error response for any other errors
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again.',
      errors: undefined,
    }
  }
}