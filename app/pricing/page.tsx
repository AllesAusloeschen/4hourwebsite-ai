import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "../components/SectionHeading";
import PricingCard from "../components/PricingCard";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for custom-built websites. Starting at $499 with no monthly fees. Starter, Premium, and Advanced tiers available.",
  openGraph: {
    title: "Pricing | 4HourWebsite.ai",
    description:
      "Custom websites starting at $499. No monthly fees. Delivered in 4 hours.",
  },
};

const faqs = [
  {
    question: "What if I don't like it?",
    answer:
      "Every tier includes at least one round of revisions. I work closely with you during the intake call to make sure we're aligned on design direction and goals before I start building. The revision process covers layout, content, and style adjustments.",
  },
  {
    question: "What platform is it built on?",
    answer:
      "Your site is built with Next.js, one of the most popular modern web frameworks used by companies like Netflix, Nike, and Notion. It's hosted for free on Vercel with automatic SSL, global CDN, and instant deployments.",
  },
  {
    question: "Who owns the code?",
    answer:
      "You do — 100%. You get full access to the GitHub repository containing all your code. You can modify it, move it, or hand it to another developer at any time. No lock-in, ever.",
  },
  {
    question: "Do I pay monthly fees?",
    answer:
      "No. Hosting on Vercel is free for most sites. You pay once for the build and that's it. The only ongoing costs would be third-party services you choose to use (like a custom domain, email marketing tool, etc.).",
  },
  {
    question: "Can I update it myself after?",
    answer:
      "Yes! You can use Claude Code (the same AI tool I build with) to make updates yourself - no coding knowledge needed. You can also edit directly in GitHub and changes deploy automatically. Or if you'd rather not touch it, I offer ongoing update services at reasonable hourly rates.",
  },
  {
    question: "Can you integrate my existing tools?",
    answer:
      "Absolutely. I regularly integrate with Stripe, PayPal, MailerLite, Mailchimp, ConvertKit, HubSpot, Calendly, Airtable, Supabase, Google Analytics, and most modern APIs. If it has an API, I can connect it.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-24 gradient-bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Simple, <span className="gradient-text">transparent</span> pricing
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              One price. One delivery. No monthly fees. No surprises.
              You own everything.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              name="Starter"
              price="$499"
              delivery="Delivered in 4 hours"
              features={[
                "Up to 8 pages",
                "Mobile responsive",
                "Contact form",
                "Basic SEO setup (metadata, sitemap, Open Graph)",
                "Free hosting on Vercel",
                "Free SSL certificate",
                "1 round of revisions",
              ]}
            />
            <PricingCard
              name="Premium"
              price="$799"
              delivery="Delivered in 4 hours"
              popular
              features={[
                "Up to 16 pages",
                "Everything in Starter, plus:",
                "Email capture (MailerLite, Mailchimp, or ConvertKit)",
                "Custom animations and interactions",
                "Advanced SEO optimization",
                "Google Analytics 4 setup",
                "2 rounds of revisions",
              ]}
            />
            <PricingCard
              name="Advanced"
              price="$1,199"
              priceNote="starting at"
              delivery="Typical delivery: 1-3 days"
              features={[
                "Everything in Premium, plus:",
                "Ecommerce (Stripe or PayPal)",
                "Database setup (Supabase or Firebase)",
                "User authentication and login",
                "Advanced email automation with segmentation",
                "Custom API integrations",
                "Booking and scheduling systems",
                "Quiz funnels with conditional logic",
                "Final price quoted based on scope",
              ]}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Everything you need to know before booking."
          />
          <div className="mt-16 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-xl border border-border p-6"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-bg rounded-3xl px-8 py-16 sm:px-16 sm:py-20 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
              Book a quick intake call and let&apos;s scope your project.
              Your site could be live today.
            </p>
            <div className="mt-8">
              <Link
                href="/book"
                className="inline-block bg-white text-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-white/90 transition-colors shadow-lg"
              >
                Book Your Build
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
