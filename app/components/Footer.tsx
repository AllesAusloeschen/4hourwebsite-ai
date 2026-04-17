import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight">
              <span className="text-primary-light">4Hour</span>Website
            </Link>
            <p className="mt-3 text-white/60 text-sm max-w-md leading-relaxed">
              Custom-built, AI-assisted websites for professionals and small
              business owners. Live in 4 hours, starting at $499.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Pages
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/pricing", label: "Pricing" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/about", label: "About" },
                { href: "/book", label: "Book Your Build" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Tech
            </h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>Built with Next.js</li>
              <li>Hosted on Vercel</li>
              <li>Styled with Tailwind CSS</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} 4HourWebsite.ai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
