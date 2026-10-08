import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nitish Yeluru — Full-stack & GenAI engineer",
  description: "Personal portfolio of Nitish Yeluru, Full-stack & GenAI engineer. Founder @ PatchBay, Ex-Alignerr. Chennai, moving to Bangalore.",
  openGraph: {
    title: "Nitish Yeluru — Full-stack & GenAI engineer",
    description: "Personal portfolio of Nitish Yeluru, Full-stack & GenAI engineer. Founder @ PatchBay, Ex-Alignerr. Chennai, moving to Bangalore.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitish Yeluru — Full-stack & GenAI engineer",
    description: "Personal portfolio of Nitish Yeluru, Full-stack & GenAI engineer. Founder @ PatchBay, Ex-Alignerr.",
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%23171717'/%3E%3Cpath d='M8 22V10l6.5 8.5V10h2.5v12L10.5 13.5V22H8zm12.5-4.2V10h2.5v4.5L26.5 10H29l-4 5.2V22h-2.5v-4.2z' fill='%23ffffff'/%3E%3C/svg%3E",
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
                  var isDark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
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
        <Analytics />
      </body>
    </html>
  );
}
