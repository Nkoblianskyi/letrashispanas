import Link from "next/link"
import { BookOpen, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
              <span className="text-xl font-bold text-foreground">Letras Hispanas</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tu portal definitivo para descubrir, explorar y disfrutar de la mejor literatura en español.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Centro de Negocios Azca, Madrid, España</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contacto@letrashispanas.online</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+34 91 684 6252</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-nosotros"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/articulos"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Artículos
                </Link>
              </li>
              <li>
                <Link href="/resenas" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Reseñas
                </Link>
              </li>
              <li>
                <Link
                  href="/recomendaciones"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Recomendaciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Categorías</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/categoria/novela"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Novela
                </Link>
              </li>
              <li>
                <Link
                  href="/categoria/poesia"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Poesía
                </Link>
              </li>
              <li>
                <Link
                  href="/categoria/ensayo"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Ensayo
                </Link>
              </li>
              <li>
                <Link
                  href="/categoria/biografia"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Biografía
                </Link>
              </li>
              <li>
                <Link
                  href="/categoria/clasicos"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Clásicos
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Letras Hispanas. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidad
            </Link>
            
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
