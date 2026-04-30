import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "../components/SectionHeading";
import PricingCard from "../components/PricingCard";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for custom-built websites. Starting at $499, one-time build cost, no required subscriptions. Starter, Premium, and Advanced tiers available.",
  openGraph: {
    title: "Pricing | 4HourWebsite.ai",
    description:
      "Custom websites starting at $499. One-time build, no required subscriptions. Delivered in 4 hours.",
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
      "You do  - 100%. You get full access to the GitHub repository containing all your code. You can modify it, move it, or hand it to another developer at any time. No lock-in, ever.",
  },
  {
    question: "Do I pay monthly fees?",
    answer:
      "No. Hosting on Vercel is free for most sites. You pay once for the build and that's it. The only ongoing costs would be third-party services you choose to use (like a custom domain, email marketing tool, etc.).",
  },
  {
    question: "What if I need changes later?",
    answer:
      "Optional: $99/month unlimited small updates. Most done same day. Cancel anytime, no contracts, no lock-in. Need ongoing changes? Subscribe. Done? Cancel. No tickets, no portals, no hourly billing. Just send what you need changed and it's handled. You can also update the site yourself through GitHub if you want - you own the code.",
  },
  {
    question: "Will the site need updates over time?",
    answer:
      "Less than you'd think. Sites built on Next.js + Vercel are unusually low-maintenance - most run 1-2 years untouched. When updates are eventually needed (security patches in dependencies, breaking changes in third-party APIs like Stripe or MailerLite, or major framework upgrades every 12-18 months), I handle them as part of the $99/month After Launch subscription. If you want to handle them yourself, the GitHub repo is yours and the deploy pipeline runs automatically - just merge and Vercel ships. The site won't silently rot - I monitor my own builds and flag client sites if a Vercel deploy starts failing.",
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
              One price. One delivery. No required subscriptions. No surprises.
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

      {/* After Launch */}
      <section className="py-20 sm:py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              After Launch
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Your site is yours. The build is one-time, hosting is free, and any changes after launch are optional and pay-as-you-go.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl border-2 border-foreground p-8 sm:p-10 relative">
              <div className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Unlimited
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight">$99</span>
                <span className="text-muted-foreground">/ month</span>
              </div>
              <p className="mt-4 text-base text-foreground leading-relaxed">
                Optional: <span className="font-semibold">$99/month unlimited small updates</span>. Most done same day. Cancel anytime, no contracts, no lock-in. Need ongoing changes? Subscribe. Done? Cancel.
              </p>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
            No tickets. No portals. No hourly billing. Just send what you need changed and it&apos;s handled.
          </p>
          <p className="mt-3 text-center text-xs text-muted-foreground max-w-2xl mx-auto">
            Small updates = text changes, photo swaps, section tweaks. New pages, new funnels, or new integrations quoted separately.
          </p>

          {/* What's not included */}
          <div className="mt-20 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border border-border p-8 sm:p-10">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                What&apos;s not included
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Honest expectations. These aren&apos;t in the build price - some you may not need, some you&apos;ll source separately. I&apos;ll flag any of these on the intake call if your project requires them.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-foreground">·</span>
                  <span><strong className="text-foreground">Logo design</strong> - bring your own, or I can refer a designer.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">·</span>
                  <span><strong className="text-foreground">Copywriting</strong> - I&apos;ll polish what you give me. Full from-scratch copywriting is a separate scope.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">·</span>
                  <span><strong className="text-foreground">Photography or stock images</strong> - bring your own, or I&apos;ll use free Unsplash / royalty-free placeholders you can replace later.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">·</span>
                  <span><strong className="text-foreground">Custom domain</strong> - typically $10-15/year directly from Cloudflare or your registrar of choice.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">·</span>
                  <span><strong className="text-foreground">Third-party tool fees</strong> - if your build uses Stripe, MailerLite, Calendly, etc., those go directly to those providers (most have generous free tiers).</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">·</span>
                  <span><strong className="text-foreground">Ongoing SEO content / blog writing</strong> - structural SEO is included; recurring content production is not.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">·</span>
                  <span><strong className="text-foreground">Paid ad management</strong> - I build the funnel; running and optimizing Meta or Google ads is a different job.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">·</span>
                  <span><strong className="text-foreground">Business formation, trademark, legal</strong> - the site itself doesn&apos;t require these to launch, but if you need them I&apos;ll point you to who does.</span>
                </li>
              </ul>
            </div>
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
