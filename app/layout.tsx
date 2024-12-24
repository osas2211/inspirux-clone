import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { SmoothScroller } from "@/components/SmoothScroller"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const PPMori = localFont({
  variable: "--font-pp-mori",
  src: [
    { path: "../fonts/PPMori-Regular.otf", weight: "400" },
    { path: "../fonts/PPMori-SemiBold.otf", weight: "600" },
  ],
})

export const metadata: Metadata = {
  title: "Meta4 Assessment - Inspirux Clone",
  description: "Meta4 Assessment - Inspirux Clone",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${PPMori.variable}  font-pp antialiased bg-[#101012]`}
      >
        <SmoothScroller>{children}</SmoothScroller>
      </body>
    </html>
  )
}
