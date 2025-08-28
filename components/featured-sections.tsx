import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, TrendingUp, Award, BookOpen } from "lucide-react"
import Link from "next/link"

export function FeaturedSections() {
  const featuredBooks = [
    {
      title: "Cien años de soledad",
      author: "Gabriel García Márquez",
      rating: 5,
      category: "Realismo Mágico",
      excerpt: "Una obra maestra que narra la historia de la familia Buendía a lo largo de siete generaciones...",
      image: "/book-cover-cien-a-os-de-soledad-gabriel-garc-a-m-r.png",
    },
    {
      title: "La sombra del viento",
      author: "Carlos Ruiz Zafón",
      rating: 4,
      category: "Misterio",
      excerpt: "Una novela que nos transporta al Barcelona de posguerra, donde los libros guardan secretos...",
      image: "/book-cover-la-sombra-del-viento-carlos-ruiz-zaf-n.png",
    },
    {
      title: "Rayuela",
      author: "Julio Cortázar",
      rating: 5,
      category: "Literatura Experimental",
      excerpt: "Una novela revolucionaria que puede leerse de múltiples formas, explorando el amor y la búsqueda...",
      image: "/book-cover-rayuela-julio-cort-zar.png",
    },
  ]

  const recentArticles = [
    {
      title: "El boom latinoamericano: 60 años después",
      excerpt: "Reflexionamos sobre el impacto duradero del boom literario latinoamericano en la literatura mundial.",
      date: "15 Dic 2024",
      readTime: "8 min",
      category: "Análisis",
    },
    {
      title: "Nuevas voces de la literatura española contemporánea",
      excerpt: "Descubre a los autores emergentes que están redefiniendo la narrativa española actual.",
      date: "12 Dic 2024",
      readTime: "6 min",
      category: "Tendencias",
    },
    {
      title: "Guía de lectura: Clásicos imprescindibles",
      excerpt: "Una selección curada de obras fundamentales que todo amante de la literatura debe conocer.",
      date: "10 Dic 2024",
      readTime: "10 min",
      category: "Guías",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Featured Reviews Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Reseñas Destacadas</h2>
            <p className="text-muted-foreground">Nuestras recomendaciones más populares</p>
          </div>
          <Button asChild variant="outline">
            <Link href="/resenas">Ver todas</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBooks.map((book, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2 p-3">
                <div className="aspect-[3/5] mb-2 overflow-hidden rounded-lg">
                  <img
                    src={book.image || "/placeholder.svg"}
                    alt={`Portada de ${book.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <Badge variant="secondary" className="w-fit mb-2">
                  {book.category}
                </Badge>
                <CardTitle className="text-sm leading-tight">{book.title}</CardTitle>
                <CardDescription className="text-xs">por {book.author}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0 px-3 pb-3">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${i < book.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-2">({book.rating}/5)</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2 line-clamp-1">{book.excerpt}</p>
                <Button variant="ghost" size="sm" className="w-full text-xs h-7">
                  Leer reseña completa
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Articles Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Artículos Recientes</h2>
            <p className="text-muted-foreground">Las últimas reflexiones sobre literatura</p>
          </div>
          <Button asChild variant="outline">
            <Link href="/articulos">Ver todos</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentArticles.map((article, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">
                    {article.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </div>
                </div>
                <CardTitle className="text-sm leading-tight group-hover:text-accent transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-xs text-muted-foreground">{article.date}</CardDescription>
              </CardHeader>
              <CardContent className="px-3 pb-3">
                <p className="text-xs text-muted-foreground mb-2 line-clamp-1">{article.excerpt}</p>
                <Button variant="ghost" size="sm" className="w-full text-xs h-7">
                  Leer artículo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted rounded-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Nuestra Comunidad</h2>
          <p className="text-muted-foreground">Creciendo cada día con lectores apasionados</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mx-auto mb-3">
              <BookOpen className="h-6 w-6 text-accent" />
            </div>
            <div className="text-2xl font-bold text-foreground">500+</div>
            <div className="text-sm text-muted-foreground">Libros Reseñados</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mx-auto mb-3">
              <TrendingUp className="h-6 w-6 text-accent" />
            </div>
            <div className="text-2xl font-bold text-foreground">2,000+</div>
            <div className="text-sm text-muted-foreground">Lectores Activos</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mx-auto mb-3">
              <Award className="h-6 w-6 text-accent" />
            </div>
            <div className="text-2xl font-bold text-foreground">50+</div>
            <div className="text-sm text-muted-foreground">Autores Destacados</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mx-auto mb-3">
              <Star className="h-6 w-6 text-accent" />
            </div>
            <div className="text-2xl font-bold text-foreground">4.8/5</div>
            <div className="text-sm text-muted-foreground">Valoración Media</div>
          </div>
        </div>
      </section>
    </div>
  )
}
