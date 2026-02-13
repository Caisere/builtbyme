import { Skeleton } from "../ui/skeleton";

export function ProjectSkeleton() {
  return (
    <section className="py-20">
      <div className="wrapper border-solid border-gray-400">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <Skeleton className="size-6" />
            <Skeleton className="h-9 w-64" />
          </div>
          <Skeleton className="h-7 w-96" />
        </div>

        <div className="grid-wrapper">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="border rounded-lg p-6 space-y-4 min-h-[180px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </div>
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-16" />
                  <Skeleton className="h-6 w-20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}