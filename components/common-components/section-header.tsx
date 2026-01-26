import { LucideIcon } from "lucide-react";


export type SectionHeaderProps = {
  icon:LucideIcon,
  title: string, 
  description: string, 
}

export default function SectionHeader({icon: Icon, title, description}: SectionHeaderProps) {
  return (
    <div className="">
      <div className="flex flex-col mb-4">
        <div className="flex items-center gap-2 mb-3">
          <Icon className="size-6 text-primary" />
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>
        <p className="text-muted-foreground text-lg">{description}</p>
      </div>
    </div>
  )
}