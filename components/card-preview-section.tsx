export function CardPreviewSection() {
  const previewCards = [
    {
      title: "Birthday Wishes",
      message: "AI-crafted birthday cards sent automatically on their special day",
      image: "/images/birthday-card.jpg",
    },
    {
      title: "Holiday Greetings",
      message: "Spread joy on Christmas, New Year, and all major holidays automatically",
      image: "/images/thank-you-card.jpg",
    },
    {
      title: "Anniversary Celebration",
      message: "Never miss a milestone with scheduled anniversary greetings",
      image: "/images/anniversary-card.jpg",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            {"Cards that "}
            <span className="text-accent">{"send themselves"}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {"AI-powered greeting cards automatically created and sent on the perfect moment, every time"}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {previewCards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-border hover:border-accent/50"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-pretty">{card.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
