import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import ErrorBoundary from "@/components/ErrorBoundary"
import PWAProvider from "@/components/PWAProvider"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"
import CustomCursor from "@/components/CustomCursor"

const inter = Inter({ subsets: ["latin"] })



export const metadata: Metadata = {
  title: {
    default: "Muhammed Mekky - Marketing Automation Specialist",
    template: "%s | Muhammed Mekky - Marketing Automation Specialist",
  },
  description:
    "Expert Marketing Manager & Automation Specialist with 6+ years of experience in data-driven campaigns, lead generation, and marketing technology integration.",
  keywords: [
    "Marketing Automation",
    "Campaign Management",
    "Lead Generation",
    "Marketing Technology",
    "Data Analytics",
    "Email Marketing",
    "CRM Integration",
    "Marketing Specialist",
  ],
  authors: [{ name: "Muhammed Mekky" }],
  creator: "Muhammed Mekky",
  publisher: "Muhammed Mekky",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ahmed-hassan-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmed-hassan-portfolio.vercel.app",
    title: "Muhammed Mekky - Marketing Automation Specialist",
    description:
      "Expert Marketing Manager & Automation Specialist with 6+ years of experience in data-driven campaigns and marketing technology.",
    siteName: "Muhammed Mekky Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammed Mekky - Marketing Automation Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Mekky - Marketing Automation Specialist",
    description:
      "Expert Marketing Manager & Automation Specialist with 6+ years of experience in data-driven campaigns.",
    images: ["/og-image.jpg"],
    creator: "@muhammedmekky",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#FE7743" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ahmed Hassan Portfolio" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#FE7743" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammed Mekky",
              jobTitle: "Marketing Automation Specialist",
              description: "Expert Marketing Manager & Automation Specialist",
              url: "https://ahmed-hassan-portfolio.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/muhammedmekky/",
                "https://twitter.com/ahmedhassan",
                "https://github.com/ahmed-hassan",
              ],
              knowsAbout: [
                "Marketing Automation",
                "Campaign Management",
                "Lead Generation",
                "Email Marketing",
                "Analytics",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <PWAProvider>
            <Suspense>{children}</Suspense>
            <Toaster />
            {/* Global custom cursor */}
            <CustomCursor />
          </PWAProvider>
        </ErrorBoundary>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
