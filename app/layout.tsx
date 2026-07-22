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
  metadataBase: new URL("https://multiverse.arpitsharma.design"),
  title: {
    default: "Arpit Sharma | Designer Portfolio",
    template: "%s | Arpit Sharma Portfolio"
  },
  description: "Explore the multiverse design portfolio of Arpit Sharma, featuring personal journal reflections, selected works, storytelling case studies, and systems thinking.",
  openGraph: {
    title: "Arpit Sharma | Designer Portfolio",
    description: "Explore the multiverse design portfolio of Arpit Sharma, featuring personal journal reflections, selected works, storytelling case studies, and systems thinking.",
    url: "https://multiverse.arpitsharma.design",
    siteName: "Arpit Sharma Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arpit Sharma | Designer Portfolio",
    description: "Explore the multiverse design portfolio of Arpit Sharma, featuring personal journal reflections, selected works, storytelling case studies, and systems thinking.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Arpit Sharma",
              "url": "https://multiverse.arpitsharma.design",
              "jobTitle": "Product Designer",
              "sameAs": [
                "https://www.linkedin.com/in/arpitshrma",
                "https://github.com/arpitshrm4"
              ],
              "description": "Product designer with a focus on clarity, systems, and measurable impact at scale.",
              "knowsAbout": [
                "Product Design",
                "User Experience (UX)",
                "Information Architecture",
                "Fintech Design",
                "Design Systems"
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
