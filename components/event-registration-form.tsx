"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Users } from "lucide-react"
import { SuccessModal } from "./success-modal"

export function EventRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    preferredDate: "",
    attendees: "",
    specialRequests: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setShowSuccess(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      preferredDate: "",
      attendees: "",
      specialRequests: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      eventType: value,
    }))
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-accent" />
            Registro para Eventos Literarios
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="event-name">Nombre completo</Label>
                <Input
                  id="event-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="event-email">Correo electrónico</Label>
                <Input
                  id="event-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+34 600 000 000"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="eventType">Tipo de evento</Label>
                <Select onValueChange={handleSelectChange} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un evento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="club-lectura">Club de Lectura</SelectItem>
                    <SelectItem value="presentacion-libro">Presentación de Libro</SelectItem>
                    <SelectItem value="taller-escritura">Taller de Escritura</SelectItem>
                    <SelectItem value="conferencia">Conferencia Literaria</SelectItem>
                    <SelectItem value="recital-poesia">Recital de Poesía</SelectItem>
                    <SelectItem value="feria-libro">Feria del Libro</SelectItem>
                    <SelectItem value="otro">Otro evento</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="preferredDate">Fecha preferida</Label>
                <Input
                  id="preferredDate"
                  name="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="attendees">Número de asistentes</Label>
                <Input
                  id="attendees"
                  name="attendees"
                  type="number"
                  min="1"
                  max="100"
                  value={formData.attendees}
                  onChange={handleChange}
                  placeholder="1"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialRequests">Solicitudes especiales</Label>
              <Textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                placeholder="¿Hay algo específico que te gustaría incluir en el evento? (opcional)"
                rows={4}
              />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                "Registrando..."
              ) : (
                <>
                  <Users className="h-4 w-4 mr-2" />
                  Registrarse para el Evento
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="¡Registro Exitoso!"
        message="Te has registrado correctamente para el evento literario. Te contactaremos pronto con más detalles sobre la fecha y ubicación."
      />
    </>
  )
}
