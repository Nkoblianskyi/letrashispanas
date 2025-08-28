import Link from "next/link"
import { Clock, User } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Article } from "@/lib/articles"

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="space-y-2 p-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            {article.category}
          </Badge>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{article.readTime} min</span>
            </div>
          </div>
        </div>
        <Link href={`/articulos/${article.slug}`}>
          <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2">
            {article.title}
          </h3>
        </Link>
      </CardHeader>
      <CardContent className="space-y-3 p-4 pt-0">
        <p className="text-muted-foreground leading-relaxed line-clamp-2 text-sm">{article.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span>{article.author}</span>
          </div>
          <Link
            href={`/articulos/${article.slug}`}
            className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
          >
            Leer más →
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {article.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
