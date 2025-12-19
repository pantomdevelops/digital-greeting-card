import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions | CardLove",
  description: "Read the terms and conditions for using CardLove digital greeting card service.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using CardLove, you agree to be bound by these Terms and Conditions. If you disagree with
              any part of these terms, you may not access our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Service Description</h2>
            <p className="text-muted-foreground leading-relaxed">
              CardLove provides a platform for creating and sharing digital greeting cards. We offer tools to customize
              cards with messages, designs, and other personalization options. The service is currently in development
              and available through a waitlist.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">When using CardLove, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Provide accurate information when joining the waitlist</li>
              <li>Use the service only for lawful purposes</li>
              <li>Not create offensive, harmful, or inappropriate content</li>
              <li>Respect intellectual property rights</li>
              <li>Not attempt to harm or disrupt our service</li>
              <li>Not use the service to spam or harass others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Content Ownership</h2>
            <p className="text-muted-foreground leading-relaxed">
              You retain ownership of the content you create using CardLove. By using our service, you grant us a
              limited license to host, store, and display your content as necessary to provide the service. We do not
              claim ownership of your cards or messages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Prohibited Content</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You may not create or share cards that contain:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Hate speech, discrimination, or harassment</li>
              <li>Illegal content or content promoting illegal activities</li>
              <li>Explicit or inappropriate material</li>
              <li>Spam or misleading information</li>
              <li>Malware, viruses, or harmful code</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Service Availability</h2>
            <p className="text-muted-foreground leading-relaxed">
              We strive to provide reliable service but cannot guarantee uninterrupted access. We reserve the right to
              modify, suspend, or discontinue any part of the service at any time without notice. We are not liable for
              any loss resulting from service interruptions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All CardLove branding, designs, templates, and software are our intellectual property or licensed to us.
              You may not copy, modify, distribute, or reverse engineer any part of our service without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              CardLove is provided as-is without warranties of any kind. We are not liable for any damages arising from
              your use of the service, including lost data, business interruption, or other losses. Our total liability
              shall not exceed the amount you paid for the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to terminate or suspend access to our service immediately, without prior notice, for
              conduct that violates these Terms or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may revise these Terms at any time. Continued use of CardLove after changes constitutes acceptance of
              the new Terms. We will notify users of significant changes through our website or email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by and construed in accordance with applicable laws. Any disputes shall be
              resolved in the appropriate courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms, please contact us at terms@cardlove.app or visit our{" "}
              <a href="/contact" className="text-accent hover:underline">
                contact page
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
