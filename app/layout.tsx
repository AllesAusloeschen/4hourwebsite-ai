import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const GTM_ID = "GTM-5V5T99DM";

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
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
