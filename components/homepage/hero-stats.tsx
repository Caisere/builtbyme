import { StatsType } from "@/app/types";


export default function HeroStats ({icon:Icon, value, label, hasBorder}:StatsType) {
  return (
    <div className={`space-y-2 ${hasBorder ? 'sm:border-l sm:border-r sm:px-6 sm:dark:border-muted/50 sm:border-muted/50' : ''}`}>
      <div className="flex items-center justify-center gap-2">
        <Icon className="size-5 text-primary" />
        <h3 className="text-3xl sm:text-4xl font-bold">{value}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  )
}