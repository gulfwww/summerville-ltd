import type React from "react"
import type { Metadata, Viewport } from "next"
import { Source_Sans_3, Fraunces } from "next/font/google"
import "./globals.css"

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Summerville Group | Energy & Financial Technology Advisory",
  description:
    "Summerville Group delivers end-to-end advisory and execution across the Energy and Financial Technology sectors — from power purchase agreements and energy project facilitation to core banking assessment, integration and post go-live support. Operating in Mauritius and the United Arab Emirates.",
  keywords:
    "energy advisory, power purchase agreements, PPA, energy trading, petroleum procurement, core banking, fintech consulting, system integration, Mauritius, United Arab Emirates",
  generator: "v0.dev",
}

export const viewport: Viewport = {
  themeColor: "#0b1a33",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
