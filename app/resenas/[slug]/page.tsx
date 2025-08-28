import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Star, Calendar, User, BookOpen, Building, Hash, ThumbsUp, ThumbsDown, Target } from "lucide-react"
import { getReviewBySlug, reviews } from "@/lib/reviews"
import Link from "next/link"

interface ReviewPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return reviews.map((review) => ({
    slug: review.slug,
  }))
}

export default function ReviewPage({ params }: ReviewPageProps) {
  const review = getReviewBySlug(params.slug)

  if (!review) {
    notFound()
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Book Cover */}
            <div className="lg:col-span-1">
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={review.coverImage || "/placeholder.svg"}
                  alt={`Portada de ${review.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Book Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <Badge variant="secondary" className="mb-3">
                  {review.genre}
                </Badge>
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2 text-balance">{review.title}</h1>
                <p className="text-xl text-muted-foreground mb-4">
                  por <span className="font-semibold text-foreground">{review.author}</span>
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">{renderStars(review.rating)}</div>
                <span className="text-2xl font-bold text-foreground">{review.rating}/5</span>
                <span className="text-muted-foreground">Calificación de nuestro crítico</span>
              </div>

              {/* Book Details */}
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>{review.pages} páginas</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building className="h-4 w-4" />
                  <span>{review.publisher}</span>
                </div>
                
                
              </div>

              {/* Reviewer */}
              <div className="flex items-center gap-2 p-4 bg-muted rounded-lg">
                <User className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-medium text-foreground">Reseñado por {review.reviewer}</p>
                  <p className="text-sm text-muted-foreground">Crítico literario de Letras Hispanas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Summary */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Resumen</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{review.summary}</p>
        </section>

        <Separator />

        {/* Review */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Reseña Completa</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line">{review.review}</p>
          </div>
        </section>

        <Separator />

        {/* Pros and Cons */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Análisis Detallado</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Pros */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  <ThumbsUp className="h-5 w-5" />
                  Aspectos Positivos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {review.pros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{pro}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Cons */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-600">
                  <ThumbsDown className="h-5 w-5" />
                  Aspectos a Considerar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {review.cons.map((con, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{con}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Recommendation */}
        <section>
          <Card className="bg-accent/5 border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <Target className="h-5 w-5" />
                Recomendación Final
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{review.recommendation}</p>
            </CardContent>
          </Card>
        </section>

        {/* Tags */}
        <section>
          <h3 className="text-lg font-semibold text-foreground mb-4">Etiquetas</h3>
          <div className="flex flex-wrap gap-2">
            {review.tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className="pt-8 border-t">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Link
              href="/resenas"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              ← Volver a todas las reseñas
            </Link>
            <Link
              href="/recomendaciones"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Descubre más libros →
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
