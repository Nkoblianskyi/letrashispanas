import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArticleCard } from "@/components/article-card"
import { getCategoryBySlug, getArticlesByCategory, categories } from "@/lib/articles"

interface CategoryPageProps {
  params: {
    categoria: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.categoria)

  if (!category) {
    notFound()
  }

  const articles = getArticlesByCategory(params.categoria)

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/articulos">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver a artículos
            </Button>
          </Link>
        </div>
      </div>

      {/* Category Header */}
      <section className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">{category.name}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{category.description}</p>
            <p className="text-sm text-muted-foreground">
              {articles.length} {articles.length === 1 ? "artículo" : "artículos"}
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No hay artículos disponibles en esta categoría.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    categoria: category.id,
  }))
}
