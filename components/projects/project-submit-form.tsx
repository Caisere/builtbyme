"use client";

import { Loader2Icon, SparklesIcon } from "lucide-react";
import { Button } from "../ui/button";
import FormField  from "../form/form-field";
import { useActionState } from "react";
import { addProject } from "@/lib/projects/project-actions";
import { cn } from "@/lib/utils";


type Errors = {
  name: string | string[]
}

export interface FormState {
  success: boolean;
  errors?: Record<string, string[]> | undefined;
  message: string;
}

export const initialState: FormState = {
  success: false,
  errors: undefined,
  message: "",
};



function ProjectSubmitForm() {

  const [state, formAction, isPending] = useActionState(addProject, initialState)

  const {errors, message, success} = state

  const getFieldErrors = (fieldName: string) => {
    return errors?.[fieldName]
  };
  

  return (
    <form 
      className="space-y-6" 
      action={formAction}
    >
      {message && (
        <div
          className={cn(
            "p-4 rounded-lg border",
            success
              ? "bg-primary/10 border-primary text-primary"
              : "bg-destructive/10 border-destructive text-destructive"
          )}
          role="alert"
          aria-live="polite"
        >
          {message}
        </div>
      )}
      <FormField
        label="Project Name"
        name="name"
        id="name"
        placeholder="My Awesome Project"
        required
        onChange={() => {}}
        error={getFieldErrors("name")}
      />
      <FormField
        label="Slug"
        name="slug"
        id="slug"
        placeholder="my-awesome-project"
        required
        onChange={() => {}}
        helperText="URL-friendly version of your project name"
        error={getFieldErrors("slug")}
      />

      <FormField
        label="Tagline"
        name="tagline"
        id="tagline"
        placeholder="A brief, catchy description"
        required
        onChange={() => {}}
        error={getFieldErrors("tagline")}
      />

      <FormField
        label="Description"
        name="description"
        id="description"
        placeholder="Tell us more about your project..."
        required
        onChange={() => {}}
        error={getFieldErrors("description")}
        textarea
      />

      <FormField
        label="Website URL"
        name="websiteUrl"
        id="websiteUrl"
        placeholder="https://yourproject.com"
        required
        onChange={() => {}}
        error={getFieldErrors("websiteUrl")}
        helperText="Enter your project's website or landing page"
      />
      <FormField
        label="Tags"
        name="tags"
        id="tags"
        placeholder="AI, Projectivity, SaaS"
        required
        onChange={() => {}}
        error={getFieldErrors("tags")}
        helperText="Comma-separated tags (e.g., AI, SaaS, Projectivity)"
      />

      <Button type="submit" size="lg" className="w-full">
        {isPending ? (
          <Loader2Icon className="size-4 animate-spin" />
        ) : (
          <>
            <SparklesIcon className="size-4" />
            Submit Project
          </>
        )}
      </Button>
    </form>
  )
}

export default ProjectSubmitForm;