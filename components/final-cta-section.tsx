"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"
import { WaitlistModal } from "./waitlist-modal"

export function FinalCTASection() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-accent/10 via-primary/5 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.02),transparent_50%)]" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Heart className="h-4 w-4 fill-current" />
              <span>{"Never Miss a Moment"}</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              {"Stop forgetting, start celebrating"}
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 text-pretty">
              {
                "Set up once and let AI handle the rest. Your loved ones will always feel remembered on every special occasion."
              }
            </p>

            <Button
              size="lg"
              className="text-base group shadow-lg hover:shadow-xl transition-all"
              onClick={() => setIsWaitlistOpen(true)}
            >
              {"Join Waitlist"}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <p className="text-sm text-muted-foreground mt-6">{"Launching soon • AI-Powered Scheduling"}</p>
          </div>
        </div>
      </section>

      <WaitlistModal open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
    </>
  )
}
