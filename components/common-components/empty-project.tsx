import { LucideIcon } from "lucide-react";

function EmptyProject ({message, icon: Icon}:{message: string, icon: LucideIcon}) {
  return (
    <div className="empty-state flex flex-col items-center justify-center p-10 text-center border border-dashed border-muted rounded-lg">
      <Icon className="size-12 text-primary" />
      <p className="text-lg font-medium">{message}</p>
    </div>
  )
}

export default EmptyProject;