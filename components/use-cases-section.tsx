import { Cake, Heart, Calendar, PartyPopper, Gift, TreePine } from "lucide-react"

export function UseCasesSection() {
  const useCases = [
    { icon: Cake, label: "Birthday Reminders", color: "bg-accent/10 text-accent" },
    { icon: TreePine, label: "Holiday Greetings", color: "bg-primary/10 text-primary" },
    { icon: Heart, label: "Anniversaries", color: "bg-accent/15 text-accent" },
    { icon: PartyPopper, label: "Special Events", color: "bg-primary/15 text-primary" },
    { icon: Gift, label: "Thank You Notes", color: "bg-accent/10 text-accent" },
    { icon: Calendar, label: "Work Celebrations", color: "bg-primary/10 text-primary" },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-secondary/30 to-background" id="use-cases">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            {"Perfect for every occasion"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {
              "Schedule greetings for all life's moments. From birthdays to holidays, never miss an opportunity to show you care"
            }
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center items-center max-w-4xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <div
                key={index}
                className={`flex items-center gap-3 ${useCase.color} px-6 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{useCase.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
