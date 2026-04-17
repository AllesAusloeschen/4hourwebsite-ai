# 4hourwebsite.ai — Requirements

## Overview

**4hourwebsite.ai** is a service website for Mathias Dorr offering custom-built, AI-assisted websites for professionals and small business owners. Sites are delivered in 4 hours, starting at $499.

### Positioning

Fast, affordable, modern websites for busy professionals who don't have time to learn web design tools. Built by a CX operations professional who understands funnels, conversion, and customer journey design.

### Key Differentiator

Most AI website builders just make pretty pages. Mathias doesn't just build websites — he builds business tools. With a background in CX operations, funnel architecture, email segmentation, quiz design, and conversion optimization, every site is designed to actually work: capture leads, segment audiences, drive conversions, and integrate into real business systems. Pretty is easy. Effective is rare.

### Founder Story

Mathias is not a programmer. No coding background. For a decade he built WordPress sites using Thrive Themes (Thrive Architect, Thrive Quiz Builder). Recently transitioned to modern AI-assisted development using Claude Code, GitHub, and Vercel. The honest truth: anyone can learn this. He took a 5-hour course and learned the entire workflow. But if you're a professional with limited time, why spend 5 hours learning the toolchain when you can pay a fixed price and have a production-ready site delivered by someone who also understands marketing, funnels, and conversion?

### Tone

Energetic, direct, honest, results-oriented. Confident and approachable. No gatekeeping. Transparent that the technology exists and anyone could learn it. The value is the time, expertise, AND the marketing/conversion thinking that comes with every build.

---

## Pages

### 1. Homepage (`/`)

- **Hero section**
  - Bold headline: "Your new website, live in 4 hours"
  - Subhead: custom-built, modern, conversion-optimized websites using AI-assisted development
  - Primary CTA: "Book Your Build" (links to Calendly — URL TBD)

- **Founder story callout**
  - "I'm not a programmer. I took a 5-hour course and now I build sites in 4 hours. Anyone could learn this. But you're busy running your business, and most people who do learn this just make pretty pages. I build business tools."

- **"Why this is different" section**
  - Funnel architecture (not just a homepage — a conversion path)
  - Email segmentation built in from day one
  - Quiz and lead capture systems that actually tag and sort subscribers
  - Customer journey mapping informs every page
  - Integrations with real business tools (Stripe, MailerLite, Supabase, Calendly, etc.)

- **Comparison section** (3-column table/cards)
  | Traditional Web Dev | 4 Hour Website | Generic AI Builders |
  |---|---|---|
  | $3,000–$10,000 | $499–$799+ | Varies |
  | 6–8 weeks | Live in 4 hours | Fast |
  | Custom but slow | Custom AND fast | Pretty but not strategic |

- **"How it works" — 3 steps**
  1. Quick intake call to scope the project and strategy
  2. I build it live while you keep working
  3. Site goes live the same day

- **Portfolio section**
  - Featured builds: fiorellard.com, Cheer Charms
  - Screenshots (TBD) and links to live sites

- **Pricing summary** (brief overview linking to `/pricing`)

- **Testimonials placeholder** (TBD)

- **CTA: "Book Your Build"** (links to Calendly — URL TBD)

---

### 2. Pricing Page (`/pricing`)

#### Starter — $499
- Up to 8 pages
- Mobile responsive
- Contact form
- Basic SEO setup (metadata, sitemap, Open Graph)
- Free hosting on Vercel (no monthly fees)
- Free SSL
- 1 round of revisions
- Delivered in 4 hours

#### Premium — $799
- Up to 16 pages
- Everything in Starter, plus:
- Email capture with MailerLite, Mailchimp, or ConvertKit integration
- Custom animations and interactions
- Advanced SEO optimization
- Google Analytics 4 setup
- 2 rounds of revisions
- Delivered in 4 hours

#### Advanced — Starting at $1,199
- Everything in Premium, plus:
- Ecommerce with Stripe or PayPal integration
- Database setup with Supabase or Firebase
- User authentication and login systems
- Advanced email automation with conditional segmentation
- Custom API integrations (HubSpot, Airtable, Calendly, CRM systems, etc.)
- Booking and scheduling systems
- Quiz funnels with conditional logic and persona-based email paths
- Final price quoted based on scope
- Typical delivery: 1–3 days

#### FAQ Section
- **What if I don't like it?** (revision policy)
- **What platform is it built on?** Next.js, hosted on Vercel.
- **Who owns the code?** You do — full GitHub access.
- **Do I pay monthly fees?** No, hosting is free on Vercel.
- **Can I update it myself after?** Yes, or hire me for updates.
- **Can you integrate my existing tools?** Yes — Stripe, PayPal, MailerLite, Mailchimp, ConvertKit, HubSpot, Calendly, Airtable, Supabase, and most modern APIs.

---

### 3. Portfolio Page (`/portfolio`)

Case studies with screenshots (TBD), descriptions, and links to live sites.

#### fiorellard.com
- Registered Dietitian authority site
- Media features, services pages, doctor referral page, integrated nutrition tools
- Emphasis on strategic funnel thinking, not just design

#### Cheer Charms
- Kids bracelet ecommerce site
- Stripe checkout integration
- Emphasis on conversion flow

*(More case studies to be added over time.)*

---

### 4. About Page (`/about`)

- Mathias Dorr introduction
- Photo placeholder (TBD)
- The honest story: CX operations professional, not a coder
- 10+ years building WordPress sites with Thrive Themes
- 5+ years in CX operations at Every Man Jack (DTC) and B-Stock Solutions (SaaS)
- Deep background in funnel architecture, quiz design, email segmentation (BUT/THEREFORE methodology), and conversion optimization
- Recent transition to modern AI-assisted development (Claude Code, GitHub, Vercel)
- Why the service exists

---

### 5. Contact / Book Page (`/book`)

- Calendly embed (URL TBD)
- Simple intake form with fields:
  - Name
  - Business name
  - What kind of site needed
  - Preferred tier (Starter / Premium / Advanced)
  - Project examples they like (reference URLs)

---

## Design System

- **Style:** Modern, fresh, bold. Stripe-meets-startup aesthetic.
- **Color palette:** White base, electric blue or teal as primary accent, gradient pops for CTAs and highlights.
- **Typography:** Clean modern sans-serif — Inter, Geist, or similar. Large type on hero sections.
- **Layout:** Generous whitespace, clean grid, mobile-first responsive.
- **Animations:** Subtle scroll-triggered animations (fade-in, slide-up). Nothing distracting.
- **Imagery:** Portfolio screenshots should be prominent, displayed in browser/device mockups where appropriate. Screenshots TBD.
- **Mobile:** Fully responsive across all breakpoints.

---

## Tech Stack

- **Framework:** Next.js (App Router) with TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Contact form:** Formspree or MailerLite integration
- **Analytics:** Google Analytics 4 (ready to wire up)
- **Version control:** GitHub

---

## SEO

- Page-level metadata (title, description) on every route
- Open Graph tags for social sharing (og:title, og:description, og:image)
- Twitter Card tags
- `schema.org` structured data (LocalBusiness, Service, FAQPage)
- Auto-generated sitemap (`sitemap.xml`)
- Canonical URLs
- Semantic HTML throughout

---

## Deployment

- Deploy to **Vercel** via GitHub integration
- Domain: **4hourwebsite.ai**
- SSL: Automatic via Vercel
- CI/CD: Push-to-deploy from `main` branch

---

## Open Questions / TBD

- [ ] Calendly booking URL
- [ ] Mathias headshot / photo for About page
- [ ] Portfolio screenshots (fiorellard.com, Cheer Charms)
- [ ] Testimonials content
- [ ] "What if I don't like it?" — exact revision/refund policy wording
- [ ] Contact form backend choice (Formspree vs MailerLite vs other)
- [ ] Exact color values for the palette (electric blue/teal, gradient specifics)
- [ ] Google Analytics 4 measurement ID
- [ ] Additional portfolio case studies
