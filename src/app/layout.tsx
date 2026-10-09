import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { WhatsAppButton } from "../components/WhatsAppButton.tsx";
import "./globals.css";

const siteUrl = "https://yeluru-nitish.vercel.app";
const pageTitle = "Nitish Yeluru - Full-Stack & GenAI Engineer";
const pageDescription =
  "Portfolio of Nitish Yeluru (Yeluru Nitish), full-stack developer and GenAI engineer in India building AI agents, LLM products, developer tools and web applications with Next.js, React, TypeScript and Python.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  verification: {
    google: "BMeV2wHlKB6D4kCe1L1FaU-gDaVclbotL5twLNO1_f0",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/nitish.jpg",
        width: 1264,
        height: 842,
        alt: "Nitish Yeluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/nitish.jpg"],
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
  sameAs: ["https://github.com/Nitish-1303"],
  knowsAbout: [
    "Artificial Intelligence",
    "Generative AI",
    "LLM Engineering",
    "Voice AI",
    "AI Agents",
    "Developer Tools",
    "Full-Stack Development",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "FastAPI",
    "Open Source",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var stored=localStorage.getItem('theme');var followsSystem=!stored||stored==='system';var isDark=stored==='dark'||(followsSystem&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(isDark){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 antialiased selection:bg-neutral-900 selection:text-neutral-50 dark:selection:bg-neutral-100 dark:selection:text-neutral-900 min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
