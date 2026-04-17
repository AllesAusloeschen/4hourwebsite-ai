import Link from "next/link";

interface PricingCardProps {
  name: string;
  price: string;
  priceNote?: string;
  features: string[];
  delivery: string;
  popular?: boolean;
  href?: string;
}

export default function PricingCard({
  name,
  price,
  priceNote,
  features,
  delivery,
  popular = false,
  href = "/book",
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col card-hover ${
        popular
          ? "bg-foreground text-white ring-2 ring-primary shadow-xl"
          : "bg-white border border-border shadow-sm"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="gradient-bg text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      <div className="mb-6">
        <h3
          className={`text-lg font-semibold ${
            popular ? "text-white" : "text-foreground"
          }`}
        >
          {name}
        </h3>
        <div className="mt-3 flex items-baseline gap-1">
          <span
            className={`text-4xl font-bold tracking-tight ${
              popular ? "text-white" : "text-foreground"
            }`}
          >
            {price}
          </span>
          {priceNote && (
            <span
              className={`text-sm ${
                popular ? "text-white/60" : "text-muted-foreground"
              }`}
            >
              {priceNote}
            </span>
          )}
        </div>
        <p
          className={`mt-2 text-sm font-medium ${
            popular ? "text-primary-light" : "text-primary"
          }`}
        >
          {delivery}
        </p>
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <svg
              className={`w-5 h-5 shrink-0 mt-0.5 ${
                popular ? "text-primary-light" : "text-primary"
              }`}
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
            <span className={popular ? "text-white/80" : "text-muted-foreground"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className={`block text-center py-3 px-6 rounded-full font-semibold text-sm transition-all ${
          popular
            ? "bg-white text-foreground hover:bg-white/90"
            : "btn-primary"
        }`}
      >
        Book Your Build
      </Link>
    </div>
  );
}
