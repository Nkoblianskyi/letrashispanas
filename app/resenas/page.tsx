"use client"

import { useState, useMemo } from "react"
import { ReviewCard } from "@/components/review-card"
import { ReviewFilters } from "@/components/review-filters"
import { Badge } from "@/components/ui/badge"
import { reviews, searchReviews } from "@/lib/reviews"
import { BookOpen, Star, Users } from "lucide-react"

export default function ResenasPage() {
  const [filters, setFilters] = useState({
    search: "",
    genre: "Todos los géneros",
    rating: 0,
  })

  const filteredReviews = useMemo(() => {
    let result = reviews

    // Apply search filter
    if (filters.search) {
      result = searchReviews(filters.search)
    }

    // Apply genre filter
    if (filters.genre !== "Todos los géneros") {
      result = result.filter((review) => review.genre === filters.genre)
    }

    // Apply rating filter
    if (filters.rating > 0) {
      result = result.filter((review) => review.rating >= filters.rating)
    }

    return result
  }, [filters])

  const handleSearch = (query: string) => {
    setFilters((prev) => ({ ...prev, search: query }))
  }

  const handleGenreFilter = (genre: string) => {
    setFilters((prev) => ({ ...prev, genre }))
  }

  const handleRatingFilter = (rating: number) => {
    setFilters((prev) => ({ ...prev, rating }))
  }

  const handleClearFilters = () => {
    setFilters({
      search: "",
      genre: "Todos los géneros",
      rating: 0,
    })
  }

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Reseñas de <span className="text-accent">Libros</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty mb-8">
            Análisis profundos y reseñas detalladas de las mejores obras de la literatura en español. Descubre tu
            próxima lectura favorita.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mx-auto mb-2">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground">{reviews.length}</div>
              <div className="text-sm text-muted-foreground">Reseñas</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mx-auto mb-2">
                <Star className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground">{averageRating.toFixed(1)}</div>
              <div className="text-sm text-muted-foreground">Calificación promedio</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mx-auto mb-2">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground">4</div>
              <div className="text-sm text-muted-foreground">Críticos expertos</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filters */}
        <ReviewFilters
          onSearch={handleSearch}
          onGenreFilter={handleGenreFilter}
          onRatingFilter={handleRatingFilter}
          onClearFilters={handleClearFilters}
          activeFilters={filters}
        />

        {/* Results Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {filteredReviews.length === reviews.length
                ? "Todas las reseñas"
                : `${filteredReviews.length} reseña${filteredReviews.length !== 1 ? "s" : ""} encontrada${filteredReviews.length !== 1 ? "s" : ""}`}
            </h2>
            <p className="text-muted-foreground mt-1">Ordenadas por fecha de publicación</p>
          </div>

          {filters.genre !== "Todos los géneros" && (
            <Badge variant="secondary" className="text-sm">
              {filters.genre}
            </Badge>
          )}
        </div>

        {/* Reviews Grid */}
        {filteredReviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-full mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No se encontraron reseñas</h3>
            <p className="text-muted-foreground mb-6">Intenta ajustar tus filtros o realizar una búsqueda diferente.</p>
            <button
              onClick={handleClearFilters}
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </>
  )
}
