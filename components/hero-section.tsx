import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Users, BookOpen } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background to-muted py-20 lg:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Descubre el mundo de la
                <span className="text-accent"> literatura española</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Tu portal definitivo para reseñas, artículos y recomendaciones de los mejores libros en español. Únete a
                nuestra comunidad de lectores apasionados.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg">
                <Link href="/resenas">
                  Explorar Reseñas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg bg-transparent">
                <Link href="/sobre-nosotros">Conoce más</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground">+500 Reseñas</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground">+2,000 Lectores</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground">Contenido de Calidad</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/20 p-8">
              <img
                src="/elegant-stack-of-books-with-warm-lighting--literar.png"
                alt="Colección de libros españoles"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
              ¡Nuevo!
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
