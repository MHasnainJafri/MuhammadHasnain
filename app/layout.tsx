import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import ResponsiveHeader from "@/components/responsive-header"
import ClientDiagnosticWrapper from "@/components/client-diagnostic-wrapper"

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Ensure text remains visible during font loading
})

export const metadata: Metadata = {
  title: "Muhammad Hasnain | Laravel Developer & Software Engineer",
  description:
    "Portfolio of Muhammad Hasnain, AI Engineer and Community Builder specializing in machine learning, generative AI, and STEM education",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/placeholder.svg?height=400&width=400" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Add preload hints for critical JavaScript */}
        <link rel="preload" href="/_next/static/chunks/framework.js" as="script" />

        {/* Add meta tags for better performance */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className={`${inter.className} theme-transition`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ResponsiveHeader />
          {children}
          <Toaster />
          <ClientDiagnosticWrapper />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'