import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Inter, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Dr. Davinder Paul Singh — AI Researcher, Educator, Innovator",
  description:
    "Academic portfolio of Dr. Davinder Paul Singh: AI, Deep Learning, Medical Imaging, Drug Discovery. Publications, patents, teaching, and contact.",
  keywords: [
    "AI",
    "Deep Learning",
    "Medical Imaging",
    "Drug Response Prediction",
    "Computational Biology",
    "Academic Portfolio",
    "Publications",
  ],
  authors: [{ name: "Dr. Davinder Paul Singh" }],
  openGraph: {
    title: "Dr. Davinder Paul Singh — Academic Portfolio",
    description: "AI Researcher | Educator",
    url: "https://example.com",
    siteName: "Dr. Davinder Paul Singh",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Davinder Paul Singh — Academic Portfolio",
    description: "AI Researcher | Educator",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="font-sans bg-background text-foreground">
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
