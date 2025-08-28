"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cookie } from "lucide-react"
import Link from "next/link"
import { setCookieConsent, shouldShowCookieBanner } from "@/lib/cookies"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(shouldShowCookieBanner())
  }, [])

  const handleAccept = () => {
    setCookieConsent(true)
    setIsVisible(false)
  }

  const handleDecline = () => {
    setCookieConsent(false)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-4xl mx-auto border-border bg-background/95 backdrop-blur-sm shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Uso de Cookies</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Utilizamos cookies para mejorar tu experiencia de navegación, analizar el tráfico del sitio y
                  personalizar el contenido. Al continuar navegando, aceptas nuestro uso de cookies.{" "}
                  <Link href="/privacidad" className="text-accent hover:underline">
                    Política de Privacidad
                  </Link>{" "}
                  |{" "}
                  <Link href="/terminos" className="text-accent hover:underline">
                    Términos y Condiciones
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Button variant="outline" onClick={handleDecline} className="flex-1 lg:flex-none bg-transparent">
                Rechazar
              </Button>
              <Button onClick={handleAccept} className="flex-1 lg:flex-none">
                Aceptar Cookies
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
