import { Brain, Clock, Calendar, Zap } from "lucide-react"

export function TrustSection() {
  const trustPoints = [
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Personalized cards for each recipient",
    },
    {
      icon: Clock,
      title: "Set Once, Forget",
      description: "Never miss an occasion again",
    },
    {
      icon: Calendar,
      title: "Auto-Scheduling",
      description: "Birthdays, holidays, and more",
    },
    {
      icon: Zap,
      title: "Instant Creation",
      description: "Cards ready in seconds",
    },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {trustPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-colors mb-4 mx-auto">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
