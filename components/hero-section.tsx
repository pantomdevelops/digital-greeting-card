"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, ArrowRight, Gift, Star, Check } from "lucide-react"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setEmail("")
        setIsSubmitted(false)
      }, 3000)
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="absolute top-20 left-10 text-accent/20">
        <Star className="h-8 w-8" fill="currentColor" />
      </div>
      <div className="absolute top-40 right-20 text-accent/15">
        <Gift className="h-12 w-12" />
      </div>
      <div className="absolute bottom-20 left-20 text-accent/15">
        <Star className="h-6 w-6" fill="currentColor" />
      </div>
      <div className="absolute bottom-40 right-10 text-accent/20">
        <Gift className="h-8 w-8" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 self-center lg:self-start bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>{"AI-Powered Greetings"}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              {"Never forget to wish your "}
              <span className="text-accent">{"loved ones"}</span>
              {" again"}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto lg:mx-0">
              {
                "Create AI-powered greeting cards instantly and schedule them to auto-send on birthdays, holidays, and special occasions. Set it once, never miss a moment."
              }
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-16 text-base px-6 py-4"
                  required
                  disabled={isSubmitted}
                />
                <Button
                  type="submit"
                  size="lg"
                  className="text-base group h-16 px-8 whitespace-nowrap"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      {"Joined!"}
                    </>
                  ) : (
                    <>
                      {"Join Waitlist"}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </div>
              {isSubmitted && (
                <p className="text-sm text-accent flex items-center gap-2 justify-center sm:justify-start">
                  <Sparkles className="h-4 w-4" />
                  {"You're on the list! We'll notify you when we launch."}
                </p>
              )}
            </form>
          </div>

          {/* Right Visual Preview */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md mx-auto">
              {/* Phone mockup frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/20 to-accent/20 rounded-[3rem] blur-3xl" />
              <div className="relative bg-card rounded-[2.5rem] shadow-2xl p-4 border-[8px] border-foreground/10">
                <img
                  src="/images/birthday-card.jpg"
                  alt="Beautiful birthday greeting card preview"
                  className="w-full h-auto rounded-[2rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
