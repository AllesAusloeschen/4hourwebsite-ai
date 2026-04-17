import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Build",
  description:
    "Book your custom website build with 4HourWebsite.ai. Schedule an intake call or fill out our project form. Your site could be live today.",
  openGraph: {
    title: "Book Your Build | 4HourWebsite.ai",
    description:
      "Schedule an intake call or submit a project form. Your custom website could be live today.",
  },
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
