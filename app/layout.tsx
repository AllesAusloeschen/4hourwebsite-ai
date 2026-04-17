import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "4HourWebsite.ai | Custom Websites, Live in 4 Hours",
    template: "%s | 4HourWebsite.ai",
  },
  description:
    "Custom-built, AI-assisted websites for professionals and small business owners. Conversion-optimized, modern, and live in 4 hours. Starting at $499.",
  metadataBase: new URL("https://4hourwebsite.ai"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://4hourwebsite.ai",
    siteName: "4HourWebsite.ai",
    title: "4HourWebsite.ai | Custom Websites, Live in 4 Hours",
    description:
      "Custom-built, AI-assisted websites for professionals and small business owners. Conversion-optimized, modern, and live in 4 hours. Starting at $499.",
  },
  twitter: {
    card: "summary_large_image",
    title: "4HourWebsite.ai | Custom Websites, Live in 4 Hours",
    description:
      "Custom-built, AI-assisted websites for professionals and small business owners. Live in 4 hours. Starting at $499.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
