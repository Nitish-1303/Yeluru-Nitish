import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { WhatsAppButton } from "../components/WhatsAppButton.tsx";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nitish Yeluru - Full-Stack & GenAI Engineer",
  description: "Portfolio of Nitish Yeluru, full-stack and GenAI engineer building AI agents, developer tools and web applications.",
  openGraph: {
    title: "Nitish Yeluru - Full-Stack & GenAI Engineer",
    description: "Portfolio of Nitish Yeluru, full-stack and GenAI engineer building AI agents, developer tools and web applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitish Yeluru - Full-Stack & GenAI Engineer",
    description: "Portfolio of Nitish Yeluru, full-stack and GenAI engineer building AI agents, developer tools and web applications.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
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
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var followsSystem = !stored || stored === 'system';
                  var isDark = stored === 'dark' || (followsSystem && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 antialiased selection:bg-neutral-900 selection:text-neutral-50 dark:selection:bg-neutral-100 dark:selection:text-neutral-900 min-h-screen">
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
