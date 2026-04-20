"use client";

import type { Metadata } from "next";
import { useState, type FormEvent } from "react";

// Note: metadata export requires a separate file for client components
// We handle this with a metadata export in a separate layout or by
// using generateMetadata in a server wrapper. For simplicity, we'll
// move metadata to a separate file.

const tiers = ["Starter ($499)", "Premium ($799)", "Advanced ($1,199+)"];

export default function BookPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const endpoint = formspreeId
        ? `https://formspree.io/f/${formspreeId}`
        : "#";

      if (!formspreeId) {
        // Demo mode — simulate success
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setStatus("success");
        form.reset();
        return;
      }

      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-24 gradient-bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Book your <span className="gradient-text">build</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Start with a quick intake call or fill out the form below.
              I&apos;ll get back to you within 24 hours with a plan.
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              After launch: you own everything. Optional <span className="font-semibold">$95/change</span> or <span className="font-semibold">$99/mo unlimited</span> if you want updates handled for you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Calendly placeholder */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Schedule a call
              </h2>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Book a 30-minute intake call to discuss your project scope,
                goals, and strategy. This is where I learn about your business
                so I can build something that actually works.
              </p>
              <iframe
                src="https://calendly.com/mathias-4hourwebsite/30min?hide_gdpr_banner=1"
                width="100%"
                height="700"
                frameBorder="0"
                title="Schedule an intake call"
                className="rounded-2xl border border-border"
              />
            </div>

            {/* Intake Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Or fill out the intake form
              </h2>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Prefer to write it out? Tell me about your project and
                I&apos;ll follow up with a proposal.
              </p>

              {status === "success" ? (
                <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    Form submitted!
                  </h3>
                  <p className="text-sm text-green-700">
                    Thanks for reaching out. I&apos;ll get back to you within
                    24 hours with a plan for your project.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Your name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl border border-border px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="Jane Smith"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="business"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Business name *
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      required
                      className="w-full rounded-xl border border-border px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="Acme Co."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="siteType"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      What kind of site do you need? *
                    </label>
                    <textarea
                      id="siteType"
                      name="siteType"
                      required
                      rows={3}
                      className="w-full rounded-xl border border-border px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                      placeholder="e.g., Portfolio site, ecommerce store, service business website, landing page..."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="tier"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Preferred tier
                    </label>
                    <select
                      id="tier"
                      name="tier"
                      className="w-full rounded-xl border border-border px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    >
                      <option value="">Not sure yet</option>
                      {tiers.map((tier) => (
                        <option key={tier} value={tier}>
                          {tier}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="references"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Reference URLs (sites you like)
                    </label>
                    <textarea
                      id="references"
                      name="references"
                      rows={2}
                      className="w-full rounded-xl border border-border px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                      placeholder="Paste any URLs of sites whose style or layout you admire..."
                    />
                  </div>

                  {status === "error" && (
                    <div className="rounded-xl bg-red-50 border border-red-200 p-4">
                      <p className="text-sm text-red-700">
                        Something went wrong. Please try again or email me
                        directly.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full btn-primary py-3.5 rounded-full font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "submitting"
                      ? "Sending..."
                      : "Submit Intake Form"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
