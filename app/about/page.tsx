import type { Metadata } from "next"
import { Heart, Sparkles, Users, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | CardTree",
  description:
    "Learn about CardTree's mission to help you never forget to wish your loved ones with AI-powered greeting cards.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="h-4 w-4 fill-current" />
              <span>Our Story</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Never forget to wish your <span className="text-accent">loved ones</span> again
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              CardTree was born from a universal problem: we all forget to send birthday wishes, holiday greetings, and
              special occasion messages to the people we care about.
            </p>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Life gets busy. We forget birthdays, miss anniversaries, and let holidays pass without reaching out.
                CardTree uses AI to solve this universal problem by creating and sending personalized greeting cards
                automatically, so you never miss another important moment with friends, family, or colleagues.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Why We Built CardTree</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We've all been there—realizing it's someone's birthday after the day has passed, or forgetting to send
                holiday greetings to people who matter. Traditional reminder apps don't help because they just remind
                you, but you still need to create and send the card yourself.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                CardTree is different. You set up your contacts and their important dates once, and our AI creates
                personalized, beautiful greeting cards and sends them automatically. Set it and forget it—your
                relationships stay strong without the mental burden.
              </p>
            </section>

            <div className="grid md:grid-cols-3 gap-8 my-12 not-prose">
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">AI-Powered</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every card is uniquely crafted by AI for each recipient and occasion.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Auto-Scheduled</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Birthdays, holidays, anniversaries—all handled automatically.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Set Once</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Add your contacts once and relax—we handle everything else.
                </p>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-semibold mb-4">What's Next</h2>
              <p className="text-muted-foreground leading-relaxed">
                We're putting the finishing touches on CardTree and will be launching soon. Join our waitlist to be
                among the first to never miss another birthday, holiday, or special occasion. Your relationships deserve
                it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground leading-relaxed">
                We'd love to hear from you. Whether you have questions, feedback, or just want to say hello, visit our{" "}
                <a href="/contact" className="text-accent hover:underline">
                  contact page
                </a>{" "}
                or reach out at hello@cardtreeaihq.com.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
