import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { UniverseProvider } from "@/context/UniverseContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://multiverse-engine.vercel.app"),
  title: {
    default: "Arpit Sharma | Product Design Leader & Architect",
    template: "%s | Arpit Sharma Portfolio"
  },
  description: "Immersive product design portfolio of Arpit Sharma. Experiencing systems thinking, enterprise UX, fintech workflows, and interactive case studies.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Arpit Sharma | Product Design Leader & Architect",
    description: "Immersive product design portfolio of Arpit Sharma. Experiencing systems thinking, enterprise UX, fintech workflows, and interactive case studies.",
    url: "https://multiverse-engine.vercel.app",
    siteName: "Arpit Sharma Multiverse",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arpit Sharma | Product Design Leader & Architect",
    description: "Immersive product design portfolio of Arpit Sharma. Experiencing systems thinking, enterprise UX, fintech workflows, and interactive case studies.",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${cormorantGaramond.variable} font-sans`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#ffb000] text-black px-4 py-2 rounded-md font-mono z-[300] focus:ring-2 focus:ring-amber-600 focus:outline-none">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://multiverse-engine.vercel.app/#person",
                  "name": "Arpit Sharma",
                  "url": "https://multiverse-engine.vercel.app",
                  "image": "https://multiverse-engine.vercel.app/images/hero-spotlight.png",
                  "jobTitle": "Product Design Leader & Architect",
                  "sameAs": [
                    "https://www.linkedin.com/in/arpitshrma",
                    "https://github.com/arpitshrm4"
                  ],
                  "description": "Product Design Leader specializing in enterprise systems, fintech, B2B product strategy, and design systems.",
                  "knowsAbout": [
                    "Product Design",
                    "User Experience (UX)",
                    "Information Architecture",
                    "Fintech Design",
                    "Design Systems",
                    "Systems Thinking"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://multiverse-engine.vercel.app/#website",
                  "url": "https://multiverse-engine.vercel.app",
                  "name": "Arpit Sharma | Multiverse Portfolio",
                  "publisher": { "@id": "https://multiverse-engine.vercel.app/#person" }
                },
                {
                  "@type": "ProfilePage",
                  "@id": "https://multiverse-engine.vercel.app/#profile",
                  "url": "https://multiverse-engine.vercel.app",
                  "about": { "@id": "https://multiverse-engine.vercel.app/#person" }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://multiverse-engine.vercel.app/#breadcrumb",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Human", "item": "https://multiverse-engine.vercel.app/human" },
                    { "@type": "ListItem", "position": 2, "name": "Builder", "item": "https://multiverse-engine.vercel.app/builder" },
                    { "@type": "ListItem", "position": 3, "name": "Thinker", "item": "https://multiverse-engine.vercel.app/thinker" },
                    { "@type": "ListItem", "position": 4, "name": "Curiosity", "item": "https://multiverse-engine.vercel.app/curiosity" },
                    { "@type": "ListItem", "position": 5, "name": "Future", "item": "https://multiverse-engine.vercel.app/future" },
                    { "@type": "ListItem", "position": 6, "name": "About", "item": "https://multiverse-engine.vercel.app/about" }
                  ]
                },
                {
                  "@type": "CreativeWork",
                  "@id": "https://multiverse-engine.vercel.app/#portfolio",
                  "name": "Inside the Decision - Gyan Bharatam Case Study",
                  "author": { "@id": "https://multiverse-engine.vercel.app/#person" },
                  "description": "Enterprise case study detailing product design decisions, trade-offs, and design system scale on the Gyan Bharatam Manuscript Platform."
                }
              ]
            })
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <UniverseProvider>
            {children}
          </UniverseProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
