import SectionHeader from "@/components/common-components/section-header";
import ProjectSubmitForm from "@/components/projects/project-submit-form";
import { SparklesIcon } from "lucide-react";

function Page () {
  return (
        <section className="py-20">
      <div className="wrapper">
        <div className="mb-12">
          <SectionHeader
            title="Submit Your Project"
            icon={SparklesIcon}
            description="Share your creation with the community. Your submission will be reviewed before going live."
          />
        </div>
        <div className="max-w-2xl mx-auto">
          <ProjectSubmitForm />
        </div>
      </div>
    </section>
  )
}

export default Page;