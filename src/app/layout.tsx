import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "../components/Analytics.tsx";
import { ClickTracking } from "../components/ClickTracking.tsx";
import { WhatsAppButton } from "../components/WhatsAppButton.tsx";
import "./globals.css";

const siteUrl = "https://www.yelurunitish.tech";
const pageTitle = "Nitish Yeluru | Full-Stack & GenAI Engineer";
const pageDescription =
  "Nitish Yeluru, full-stack and GenAI engineer. React, TypeScript and Python. Open to remote engineering roles, including US-based teams.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: [
      "BMeV2wHlKB6D4kCe1L1FaU-gDaVclbotL5twLNO1_f0",
      "1sY5Po9RDJuqiBmEpCkAUJbpRqMkkEmCE0716a6XrxY",
    ],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: "/",
    images: [
      {
        url: "/og/home.png",
        width: 1200,
        height: 630,
        alt: "Nitish Yeluru, full-stack and GenAI engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    creator: "@Vibe_User",
    images: ["/og/home.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nitish Yeluru",
  alternateName: "Yeluru Nitish",
  jobTitle: "Full-Stack & GenAI Engineer",
  url: siteUrl,
  image: `${siteUrl}/nitish.jpg`,
  sameAs: [
    "https://github.com/Nitish-1303",
    "https://linkedin.com/in/yeluru-nitish",
    "https://x.com/Vibe_User",
    "https://www.youtube.com/@buildwithnitish",
  ],
  description: pageDescription,
  homeLocation: {
    "@type": "Place",
    address: { "@type": "PostalAddress", addressCountry: "IN" },
  },
  knowsAbout: [
    "Full-Stack Development",
    "Generative AI",
    "React",
    "TypeScript",
    "Python",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#faf7f4] text-stone-900 antialiased selection:bg-stone-900 selection:text-stone-50 min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <WhatsAppButton />
        <Analytics />
        <ClickTracking />
        <SpeedInsights />
      </body>
    </html>
  );
}
