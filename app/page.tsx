import { HeroSection } from "@/components/hero-section"
import { BrandBanner } from "@/components/brand-banner"
import { CardPreviewSection } from "@/components/card-preview-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { TrustSection } from "@/components/trust-section"
import { FinalCTASection } from "@/components/final-cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BrandBanner />
      <CardPreviewSection />
      <HowItWorksSection />
      <UseCasesSection />
      <TrustSection />
      <FinalCTASection />
    </main>
  )
}
