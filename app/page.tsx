import Link from "next/link";
import SectionHeading from "./components/SectionHeading";
import PricingCard from "./components/PricingCard";

const differentiators = [
  {
    title: "Funnel Architecture",
    description:
      "Not just a homepage  - a complete conversion path designed to turn visitors into customers.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    ),
  },
  {
    title: "Email Segmentation Built In",
    description:
      "From day one, your email capture tags and sorts subscribers so your marketing actually works.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Quiz & Lead Capture Systems",
    description:
      "Interactive quizzes that qualify leads, tag subscribers, and route them into the right email sequences.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Customer Journey Mapping",
    description:
      "Every page is designed with intent  - because visitors should always know what to do next.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: "Real Business Integrations",
    description:
      "Stripe, MailerLite, Supabase, Calendly, HubSpot  - your site connects to the tools you actually use.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
];

const steps = [
  {
    step: "01",
    title: "Quick Intake Call",
    description:
      "We scope the project, discuss strategy, and identify exactly what your site needs to accomplish.",
  },
  {
    step: "02",
    title: "I Build It Live",
    description:
      "While you keep running your business, I build your entire site using AI-assisted development.",
  },
  {
    step: "03",
    title: "Site Goes Live",
    description:
      "Your production-ready website launches the same day, fully deployed and ready for traffic.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Your new website,{" "}
              <span className="gradient-text">live in 4 hours</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Custom-built, modern, conversion-optimized websites using
              AI-assisted development. Not templates. Not drag-and-drop.
              Real sites that actually work for your business.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="btn-primary px-8 py-3.5 rounded-full text-base font-semibold shadow-lg shadow-primary/25"
              >
                Book Your Build
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-3.5 rounded-full text-base font-semibold border border-border hover:bg-muted transition-colors"
              >
                View Pricing
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Starting at $499 &middot; No monthly fees &middot; You own the code
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              The honest truth
            </div>
            <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed text-foreground/90">
              &ldquo;I&rsquo;m not a programmer. I took a 5-hour course and now I
              build sites in 4 hours. Anyone could learn this. But you&rsquo;re
              busy running your business, and most people who do learn this{" "}
              <span className="gradient-text font-bold">
                just make pretty pages
              </span>
              . I build business tools.&rdquo;
            </blockquote>
            <p className="mt-6 text-muted-foreground">
               - Mathias Dorr, Founder
            </p>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-20 sm:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why this is different"
            title="Pretty is easy. Effective is rare."
            description="Most AI website builders just make pretty pages. Every site I build is a business tool  - designed to capture leads, segment audiences, and drive conversions."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, i) => (
              <div
                key={item.title}
                className={`bg-white rounded-xl p-6 border border-border card-hover animate-fade-in-up animate-delay-${(i + 1) * 100}`}
              >
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center text-white mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Compare"
            title="How we stack up"
            description="See how 4HourWebsite compares to traditional agencies and generic AI builders."
          />
          <div className="mt-16 overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 pr-6 text-sm font-semibold text-muted-foreground w-1/4">
                    &nbsp;
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold text-muted-foreground">
                    Traditional Web Dev
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold">
                    <span className="gradient-text font-bold">4 Hour Website</span>
                  </th>
                  <th className="py-4 pl-6 text-sm font-semibold text-muted-foreground">
                    Generic AI Builders
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  {
                    label: "Cost",
                    values: ["$3,000 - $10,000", "$499 - $799+", "Varies"],
                  },
                  {
                    label: "Timeline",
                    values: ["6 - 8 weeks", "Live in 4 hours", "Fast"],
                  },
                  {
                    label: "Custom Design",
                    values: ["Yes", "Yes", "Template-based"],
                  },
                  {
                    label: "Conversion Strategy",
                    values: ["Sometimes", "Always", "No"],
                  },
                  {
                    label: "Code Ownership",
                    values: ["Varies", "100% yours", "Platform-locked"],
                  },
                  {
                    label: "Monthly Fees",
                    values: ["Hosting costs", "Free on Vercel", "$12 - $40/mo"],
                  },
                ].map((row) => (
                  <tr key={row.label} className="border-b border-border/50">
                    <td className="py-4 pr-6 font-medium text-foreground">
                      {row.label}
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">
                      {row.values[0]}
                    </td>
                    <td className="py-4 px-6 font-medium text-foreground bg-primary/5 rounded-lg">
                      {row.values[1]}
                    </td>
                    <td className="py-4 pl-6 text-muted-foreground">
                      {row.values[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How it works"
            title="Three steps. One day."
            description="No drawn-out timelines. No scope creep. Just results."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl gradient-bg text-white text-xl font-bold mb-5">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Portfolio"
            title="Recent builds"
            description="Real sites, built for real businesses."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "fiorellard.com",
                category: "Authority Site / Dietitian",
                description:
                  "Registered Dietitian authority site with media features, doctor referral page, and integrated interactive tools.",
              },
              {
                title: "Cheer Charms",
                category: "Ecommerce",
                description:
                  "Kids bracelet ecommerce site with Stripe checkout integration and optimized conversion flow.",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="group bg-white rounded-2xl border border-border overflow-hidden card-hover"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">
                    Screenshot coming soon
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              View all projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 sm:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pricing"
            title="Simple, transparent pricing"
            description="No hidden fees. No monthly charges. One price, one delivery."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              name="Starter"
              price="$499"
              delivery="Delivered in 4 hours"
              features={[
                "Up to 8 pages",
                "Mobile responsive",
                "Contact form",
                "Basic SEO setup",
                "Free hosting on Vercel",
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
                "Everything in Starter",
                "Email integration",
                "Custom animations",
                "Advanced SEO",
                "Google Analytics 4",
                "2 rounds of revisions",
              ]}
            />
            <PricingCard
              name="Advanced"
              price="$1,199"
              priceNote="starting at"
              delivery="1-3 day delivery"
              features={[
                "Everything in Premium",
                "Ecommerce / Stripe",
                "Database setup",
                "User authentication",
                "Custom API integrations",
                "Quiz funnels",
              ]}
            />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              See full pricing details
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="What clients are saying"
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-border p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-5 h-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  &ldquo;Testimonial coming soon. This space is reserved for
                  real client feedback.&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Client Name
                    </p>
                    <p className="text-xs text-muted-foreground">Business</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-bg rounded-3xl px-8 py-16 sm:px-16 sm:py-20 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Ready to launch?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
              Book a quick intake call and your site could be live today.
              No contracts, no monthly fees.
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
