"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail, Clock, MessageSquare, Calendar } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { EventRegistrationForm } from "@/components/event-registration-form"

export default function ContactPage() {
  const [activeForm, setActiveForm] = useState<"contact" | "event">("contact")

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Ponte en Contacto</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            ¿Tienes alguna pregunta sobre literatura? ¿Quieres participar en nuestros eventos? Estamos aquí para
            ayudarte.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Información de Contacto</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Dirección</h3>
                    <p className="text-muted-foreground">
                      Centro de Negocios Azca
                      <br />
                      Paseo de la Castellana, 95
                      <br />
                      28046 Madrid, España
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                    <p className="text-muted-foreground">+34 91 684 6252</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">contacto@letrashispanas.online</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Horario de Atención</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Lunes - Viernes: 9:00 - 18:00</p>
                      <p>Sábados: 10:00 - 14:00</p>
                      <p>Domingos: Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="text-accent">¿Necesitas ayuda rápida?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Para consultas urgentes, puedes llamarnos directamente o enviarnos un WhatsApp.
                </p>
                <p className="text-sm text-muted-foreground">
                  Tiempo de respuesta promedio: <span className="font-semibold text-foreground">24 horas</span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Forms Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Form Toggle */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant={activeForm === "contact" ? "default" : "outline"}
                onClick={() => setActiveForm("contact")}
                className="flex-1"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Consulta General
              </Button>
              <Button
                variant={activeForm === "event" ? "default" : "outline"}
                onClick={() => setActiveForm("event")}
                className="flex-1"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Registro para Eventos
              </Button>
            </div>

            {/* Forms */}
            <div className="min-h-[600px]">
              {activeForm === "contact" ? <ContactForm /> : <EventRegistrationForm />}
            </div>
          </div>
        </div>

        <Separator className="my-16" />

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Preguntas Frecuentes</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Cómo puedo participar en un club de lectura?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Puedes registrarte usando el formulario de eventos. Selecciona "Club de Lectura" y te contactaremos
                  con los detalles del próximo encuentro.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Organizan presentaciones de libros?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sí, organizamos presentaciones regulares. Si eres autor o editorial, contáctanos para coordinar una
                  presentación de tu obra.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Hay talleres de escritura disponibles?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ofrecemos talleres de escritura creativa mensualmente. Regístrate en nuestros eventos para recibir
                  información sobre las próximas fechas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Puedo sugerir libros para reseñar?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  ¡Por supuesto! Envíanos tus sugerencias a través del formulario de contacto. Siempre estamos buscando
                  nuevas obras para reseñar.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
