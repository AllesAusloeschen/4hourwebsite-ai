import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Mathias Dorr — CX operations professional, not a coder. 10+ years in WordPress, now building modern sites with Claude Code and Vercel. The honest story behind 4HourWebsite.ai.",
  openGraph: {
    title: "About | 4HourWebsite.ai",
    description:
      "Meet Mathias Dorr. CX operations professional turned AI-assisted web developer.",
  },
};

const timeline = [
  {
    period: "10+ Years",
    title: "WordPress, Showit & Web Hosting",
    description:
      "Built dozens of websites using WordPress with Thrive Themes (Thrive Architect, Thrive Quiz Builder), Showit, and managed hosting and domains across Cloudflare, Bluehost, and GoDaddy. Learned that great websites aren't about code - they're about understanding what makes people take action.",
  },
  {
    period: "5+ Years",
    title: "CX Operations",
    description:
      "Worked in CX operations at Every Man Jack (DTC) and B-Stock Solutions (SaaS). Deep experience in funnel architecture, quiz design, email segmentation using BUT/THEREFORE methodology, and conversion optimization.",
  },
  {
    period: "Now",
    title: "AI-Assisted Websites & Apps",
    description:
      "Transitioned to modern development using Claude Code, GitHub, and Vercel. Building not just websites but full web applications — quiz funnels with email segmentation, nutrition tools with user dashboards, ecommerce with Stripe. Combined with a decade of marketing and CX expertise.",
  },
];

const skills = [
  "Funnel Architecture",
  "Email Segmentation",
  "Quiz Design",
  "Conversion Optimization",
  "Customer Journey Mapping",
  "CX Operations",
  "Web App Development",
  "Next.js / React",
  "Tailwind CSS",
  "Stripe Integration",
  "MailerLite / ConvertKit",
  "Supabase / Firebase",
  "User Auth & Dashboards",
  "Vercel Deployment",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-24 gradient-bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
                About
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
                I&apos;m not a programmer.{" "}
                <span className="gradient-text">That&apos;s the point.</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                I&apos;m Mathias Dorr — a CX operations professional based in
                Florida who understands funnels, conversion, and customer
                journey design. I don&apos;t just build websites. I build
                business tools that actually drive results. Every single
                project is built by me personally. No outsourcing, no
                subcontractors, no handoffs.
              </p>
            </div>
            <div className="flex justify-center">
              {/* Photo placeholder */}
              <div className="w-72 h-80 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center text-white mx-auto mb-3">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">Photo coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Honest Story */}
      <section className="py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-8">
            The honest story
          </h2>
          <div className="prose prose-lg text-muted-foreground space-y-5 leading-relaxed">
            <p>
              Here&apos;s the truth that most people in this space won&apos;t tell
              you: the technology to build modern websites is accessible to
              anyone willing to learn. I took a 5-hour course and learned how to
              use Claude Code, GitHub, and Vercel to build production-ready
              websites.
            </p>
            <p>
              But there&apos;s a catch. Knowing <em>how</em> to build a site and
              knowing <em>what</em> to build are two very different things.
              Most people who learn these tools make pretty pages. They look
              great in a screenshot but don&apos;t actually do anything for the
              business.
            </p>
            <p>
              That&apos;s where my background matters. After 10+ years building
              WordPress sites with Thrive Themes and 5+ years in CX operations
              at companies like Every Man Jack and B-Stock Solutions, I
              understand what makes websites <em>work</em>. Not just look good —
              but actually capture leads, segment audiences, qualify prospects,
              and drive conversions.
            </p>
            <p>
              The truth is, I genuinely love doing this work. Building
              something from a blank screen and watching it go live the same
              day never gets old. That energy shows up in every project.
            </p>
            <p>
              So why should you pay me instead of learning it yourself? Because
              you&apos;re busy running your business. And even if you learned the
              tools, you&apos;d still need the decade of marketing and conversion
              thinking that goes into every page I build.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-24 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-12 text-center">
            The journey
          </h2>
          <div className="space-y-8">
            {timeline.map((item) => (
              <div
                key={item.period}
                className="relative bg-white rounded-xl border border-border p-6 pl-8"
              >
                <div className="absolute left-0 top-6 w-1 h-8 gradient-bg rounded-full" />
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
                  {item.period}
                </p>
                <h3 className="text-lg font-semibold text-foreground mb-2">
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

      {/* Skills */}
      <section className="py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-8">
            What I bring to every build
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-muted border border-border rounded-full text-sm font-medium text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Exists */}
      <section className="py-20 sm:py-24 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-6 text-center">
            Why this service exists
          </h2>
          <div className="bg-white rounded-xl border border-border p-8 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Professionals and small business owners deserve modern,
              effective websites without the $5,000+ price tag or 8-week
              timeline. AI-assisted development makes it possible to deliver
              custom sites fast. My CX and marketing background makes sure
              they actually work. That&apos;s the combination. And it
              doesn&apos;t stop at websites — I build full web applications
              too: tools with user accounts, databases, dashboards, and
              real business logic under the hood.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-bg rounded-3xl px-8 py-16 sm:px-16 sm:py-20 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Let&apos;s build something together
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
              Book a quick call and tell me about your business.
              I&apos;ll tell you exactly what I&apos;d build and why.
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
