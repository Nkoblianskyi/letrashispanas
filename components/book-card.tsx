"use client"

import { Star, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Book } from "@/lib/recommendations"

interface BookCardProps {
  book: Book
  showReasons?: boolean
  onLike?: (bookId: string) => void
  isLiked?: boolean
}

export function BookCard({ book, showReasons = false, onLike, isLiked = false }: BookCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "fácil":
        return "bg-green-100 text-green-800"
      case "intermedio":
        return "bg-yellow-100 text-yellow-800"
      case "avanzado":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={book.cover || "/placeholder.svg"}
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {onLike && (
          <Button
            size="sm"
            variant={isLiked ? "default" : "secondary"}
            className="absolute top-1 right-1 h-6 w-6 p-0"
            onClick={() => onLike(book.id)}
          >
            <Heart className={`h-3 w-3 ${isLiked ? "fill-current" : ""}`} />
          </Button>
        )}
      </div>
      <CardContent className="p-1.5 space-y-1">
        <div className="space-y-0.5">
          <h3 className="font-semibold text-xs text-foreground line-clamp-1 group-hover:text-accent transition-colors">
            {book.title}
          </h3>
          <p className="text-xs text-muted-foreground">{book.author}</p>
        </div>

        <div className="flex items-center gap-1.5 text-xs">
          <div className="flex items-center gap-0.5">
            <Star className="h-2.5 w-2.5 fill-yellow-400 text-yellow-400" />
            <span>{book.rating}</span>
          </div>
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground">{book.year}</span>
        </div>

        <div className="flex flex-wrap gap-0.5">
          <Badge variant="outline" className={`text-xs ${getDifficultyColor(book.difficulty)}`}>
            {book.difficulty}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
