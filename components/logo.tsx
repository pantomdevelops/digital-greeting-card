import { Heart, Trees } from "lucide-react"

export function Logo({ showTagline = false }: { showTagline?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative flex items-center justify-center">
        <Trees className="h-6 w-6 text-accent" />
        <Heart className="absolute h-3 w-3 text-accent -bottom-0.5 -right-0.5" fill="currentColor" />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-tight">CardTree</span>
        {showTagline && <span className="text-[10px] text-muted-foreground leading-tight">Tree of Greetings</span>}
      </div>
    </div>
  )
}
