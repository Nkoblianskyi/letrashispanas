"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Filter, X, Star } from "lucide-react"
import { genres, ratings } from "@/lib/reviews"

interface ReviewFiltersProps {
  onSearch: (query: string) => void
  onGenreFilter: (genre: string) => void
  onRatingFilter: (rating: number) => void
  onClearFilters: () => void
  activeFilters: {
    search: string
    genre: string
    rating: number
  }
}

export function ReviewFilters({
  onSearch,
  onGenreFilter,
  onRatingFilter,
  onClearFilters,
  activeFilters,
}: ReviewFiltersProps) {
  const [searchQuery, setSearchQuery] = useState(activeFilters.search)

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  const hasActiveFilters =
    activeFilters.search || activeFilters.genre !== "Todos los géneros" || activeFilters.rating > 0

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Filter className="h-5 w-5" />
          Filtrar Reseñas
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search */}
        <form onSubmit={handleSearchSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar por título, autor o etiquetas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button type="submit">Buscar</Button>
        </form>

        {/* Genre Filter */}
        <div>
          <h4 className="text-sm font-medium mb-3">Género</h4>
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <Button
                key={genre}
                variant={activeFilters.genre === genre ? "default" : "outline"}
                size="sm"
                onClick={() => onGenreFilter(genre)}
                className="text-xs"
              >
                {genre}
              </Button>
            ))}
          </div>
        </div>

        {/* Rating Filter */}
        <div>
          <h4 className="text-sm font-medium mb-3">Calificación</h4>
          <div className="flex flex-wrap gap-2">
            {ratings.map((rating) => (
              <Button
                key={rating.value}
                variant={activeFilters.rating === rating.value ? "default" : "outline"}
                size="sm"
                onClick={() => onRatingFilter(rating.value)}
                className="text-xs flex items-center gap-1"
              >
                {rating.value > 0 && <Star className="h-3 w-3" />}
                {rating.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="pt-4 border-t">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium">Filtros activos</h4>
              <Button variant="ghost" size="sm" onClick={onClearFilters} className="text-xs flex items-center gap-1">
                <X className="h-3 w-3" />
                Limpiar todo
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {activeFilters.search && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Búsqueda: "{activeFilters.search}"
                  <X className="h-3 w-3 cursor-pointer" onClick={() => onSearch("")} />
                </Badge>
              )}
              {activeFilters.genre !== "Todos los géneros" && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Género: {activeFilters.genre}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => onGenreFilter("Todos los géneros")} />
                </Badge>
              )}
              {activeFilters.rating > 0 && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {activeFilters.rating}+ estrellas
                  <X className="h-3 w-3 cursor-pointer" onClick={() => onRatingFilter(0)} />
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
