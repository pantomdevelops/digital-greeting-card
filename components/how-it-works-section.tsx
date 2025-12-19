import { UserPlus, Sparkles, Calendar } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: UserPlus,
      title: "Add Your Contacts",
      description:
        "Simply add your friends, family, and colleagues' emails along with their important dates - birthdays, anniversaries, and special occasions",
    },
    {
      icon: Sparkles,
      title: "AI Creates Custom Cards",
      description:
        "Our AI generates personalized greeting cards tailored to each recipient and occasion, making every message unique and heartfelt",
    },
    {
      icon: Calendar,
      title: "Auto-Send on Schedule",
      description:
        "Set your preferences once and relax. Cards automatically send on birthdays, holidays, Christmas, New Year, and every special moment",
    },
  ]

  return (
    <section className="py-20 md:py-32" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">{"Simple, fast, thoughtful"}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {"Create your perfect card in three easy steps"}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative text-center">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent/40 to-transparent" />
                )}

                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 mb-6 mx-auto shadow-lg">
                  <div className="absolute inset-2 rounded-full bg-card" />
                  <Icon className="relative h-10 w-10 text-accent" />
                </div>

                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-pretty">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
