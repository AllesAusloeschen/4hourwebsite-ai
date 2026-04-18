import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "See real websites built by 4HourWebsite.ai. Case studies featuring fiorellard.com and Cheer Charms  - custom sites with real conversion strategy.",
  openGraph: {
    title: "Portfolio | 4HourWebsite.ai",
    description:
      "Real websites built for real businesses. Custom, conversion-optimized, and live in 4 hours.",
  },
};

const caseStudies = [
  {
    title: "fiorellard.com",
    category: "Authority Site / Healthcare Professional",
    url: "https://fiorellard.com",
    challenge:
      "Fiorella DiCarlo, a Registered Dietitian, needed a professional authority site that would showcase her media features, explain her services, and create a doctor referral funnel  - all while positioning her as a thought leader in GLP-1 nutrition and menopause wellness.",
    solution:
      "Built a multi-page authority site with strategic page architecture: a media features section for credibility, dedicated service pages for each vertical, a doctor referral page (/refer) designed as a lead capture funnel, and integrated interactive tools. Every page was designed with a specific conversion goal in mind.",
    highlights: [
      "Media features section for social proof",
      "Doctor referral funnel with lead capture",
      "Service-specific landing pages",
      "Integrated interactive tools",
      "SEO-optimized for healthcare keywords",
      "Mobile-responsive across all devices",
    ],
  },
  {
    title: "Cheer Charms",
    category: "Ecommerce",
    url: "#",
    challenge:
      "Cheer Charms needed an ecommerce site for kids' bracelets that was fun, colorful, and  - most importantly  - optimized for checkout conversion. The target audience is parents buying gifts, so the purchase flow needed to be fast and frictionless.",
    solution:
      "Built a clean ecommerce experience with Stripe checkout integration, product galleries with quick-add functionality, and a streamlined cart-to-checkout flow. The design balances a playful, kid-friendly aesthetic with serious conversion optimization.",
    highlights: [
      "Stripe checkout integration",
      "Optimized product pages",
      "Streamlined cart-to-checkout flow",
      "Kid-friendly but conversion-focused design",
      "Mobile-first shopping experience",
      "Fast page loads for lower bounce rates",
    ],
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-24 gradient-bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Real sites for{" "}
              <span className="gradient-text">real businesses</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Every project starts with strategy. These aren&apos;t just
              pretty pages  - they&apos;re business tools designed to convert.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Screenshot placeholder */}
              <div
                className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center text-white mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Screenshot coming soon
                    </p>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                  {study.category}
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {study.title}
                </h2>

                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">
                      The Challenge
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">
                      The Solution
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-foreground mb-3">
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {study.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <svg
                          className="w-4 h-4 text-primary shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {study.url !== "#" && (
                  <a
                    href={study.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                  >
                    Visit live site
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* More coming */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-sm">
            More case studies coming soon. Every project adds to the portfolio.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-bg rounded-3xl px-8 py-16 sm:px-16 sm:py-20 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Want to be the next case study?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
              Let&apos;s build something that actually works for your business.
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
