import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Calendar, User } from "lucide-react"
import type { Review } from "@/lib/reviews"
import Link from "next/link"

interface ReviewCardProps {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-3 w-3 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
        <img
          src={review.coverImage || "/placeholder.svg"}
          alt={`Portada de ${review.title}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm text-xs">
            {review.genre}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-1 p-2">
        <div className="flex items-center gap-1 mb-1">
          {renderStars(review.rating)}
          <span className="text-xs text-muted-foreground ml-1">({review.rating}/5)</span>
        </div>
        <CardTitle className="text-sm leading-tight group-hover:text-accent transition-colors">
          <Link href={`/resenas/${review.slug}`} className="text-balance">
            {review.title}
          </Link>
        </CardTitle>
        <CardDescription className="text-xs">
          por <span className="font-medium">{review.author}</span>
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0 p-2 space-y-1">
        <p className="text-xs text-muted-foreground line-clamp-1">{review.summary}</p>

        

        <Link
          href={`/resenas/${review.slug}`}
          className="inline-flex items-center justify-center w-full rounded-md bg-accent px-2 py-1 text-xs font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
        >
          Leer reseña
        </Link>
      </CardContent>
    </Card>
  )
}
