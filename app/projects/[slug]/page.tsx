import SectionHeader from "@/components/common-components/section-header";
import { VoteButton } from "@/components/projects/vote-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, getProjects } from "@/lib/projects/projects-select";
import {
  ArrowLeftIcon,
  CalendarIcon,
  ExternalLinkIcon,
  StarIcon,
  UserIcon,
} from "lucide-react";
import { Link } from "next-view-transitions";
import { notFound } from "next/navigation";

// allow project to be statically generated as build time using the slug
export const generateStaticParams = async () => {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: String(project.id),
  }));
};

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { name, description, websiteUrl, tags, voteCount, tagline } = project;

  // console.log(project)

  return (
    <main className="py-16">
      <div className="wrapper">
        <Link
          href="/explore"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors duration-300"
        >
          <ArrowLeftIcon className="size-4" />
          Back to Explore
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-start gap-6">
              <div className="flex-1 min-w-0">
                <div className="mb-6">
                  <SectionHeader
                    title={name}
                    icon={StarIcon}
                    description={tagline ?? ""}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags?.map((tag) => (
                    <Badge variant="secondary" key={tag}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h1 className="text-xl font-semibold mb-4">About</h1>
              <p className="text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
            <div className="border rounded-lg p-6 bg-primary/10">
              <h2 className="text-lg font-semibold mb-4">Project Details</h2>
              <div className="space-y-3">
                {[
                  {
                    label: "Launched:",
                    value: new Date(
                      project.createdAt?.toISOString() ?? "",
                    ).toLocaleDateString(),
                    icon: CalendarIcon,
                  },
                  {
                    label: "Submitted By:",
                    value: project.submittedBy,
                    icon: UserIcon,
                  },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-3 text-sm">
                    {Icon && <Icon className="size-4 text-muted-foreground" />}
                    <span className="text-muted-foreground">{label}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="border rounded-lg p-6 bg-background">
                <div className="text-center mb-6">
                  <p className="text-sm text-muted-foreground mb-2">
                    Support this product
                  </p>
                  <VoteButton
                    projectId={project.id}
                    voteCount={project.voteCount}
                    // hasVoted={false}
                  />
                </div>
                {voteCount > 100 && (
                  <div className="pt-6 border-t">
                    <Badge className="w-full justify-center py-2">
                      Featured Project
                    </Badge>
                  </div>
                )}
              </div>
              {websiteUrl && <div>
                <Button asChild className="w-full rounded-lg" variant='outline'>
                  <a href={websiteUrl} target="_blank" rel="noreferer">
                    Vist Website <ExternalLinkIcon className="size-4" />
                  </a>
                </Button>
              </div> }
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
