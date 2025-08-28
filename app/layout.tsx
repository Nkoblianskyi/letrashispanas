import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import "./globals.css"

export const metadata: Metadata = {
  title: "Letras Hispanas - Portal Literario",
  description: "Tu portal de literatura en español. Reseñas, artículos y recomendaciones de libros.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
        </div>
      </body>
    </html>
  )
}
