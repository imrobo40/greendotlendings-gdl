import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Green Dot Lending - Personal Loans with No Fees",
  description:
    "Get a personal loan up to $100,000 with competitive rates, no fees, and fast funding. Apply online in minutes with Green Dot Lending.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
