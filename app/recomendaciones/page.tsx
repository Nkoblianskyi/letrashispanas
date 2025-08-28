"use client"

import { useState, useEffect } from "react"
import { Sparkles, Filter, Heart, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookCard } from "@/components/book-card"
import { RecommendationQuiz } from "@/components/recommendation-quiz"
import { BookFilters } from "@/components/book-filters"
import { books, featuredBooks, type Book } from "@/lib/recommendations"

export default function RecomendacionesPage() {
  const [quizResults, setQuizResults] = useState<Book[]>([])
  const [likedBooks, setLikedBooks] = useState<Set<string>>(new Set())
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null)
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [selectedLength, setSelectedLength] = useState<string | null>(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)

  // Load liked books from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("likedBooks")
    if (saved) {
      setLikedBooks(new Set(JSON.parse(saved)))
    }
  }, [])

  // Save liked books to localStorage
  useEffect(() => {
    localStorage.setItem("likedBooks", JSON.stringify(Array.from(likedBooks)))
  }, [likedBooks])

  const handleLike = (bookId: string) => {
    const newLikedBooks = new Set(likedBooks)
    if (newLikedBooks.has(bookId)) {
      newLikedBooks.delete(bookId)
    } else {
      newLikedBooks.add(bookId)
    }
    setLikedBooks(newLikedBooks)
  }

  const filteredBooks = books.filter((book) => {
    if (selectedGenre && book.genre !== selectedGenre) return false
    if (selectedMood && book.mood !== selectedMood) return false
    if (selectedLength && book.length !== selectedLength) return false
    if (selectedDifficulty && book.difficulty !== selectedDifficulty) return false
    return true
  })

  const clearAllFilters = () => {
    setSelectedGenre(null)
    setSelectedMood(null)
    setSelectedLength(null)
    setSelectedDifficulty(null)
  }

  const likedBooksArray = books.filter((book) => likedBooks.has(book.id))

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-8 w-8 text-accent" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                Recomendaciones Personalizadas
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Descubre tu próxima lectura favorita con nuestro sistema inteligente de recomendaciones. Responde nuestro
              quiz o explora por categorías.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="quiz" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="quiz" className="gap-2">
                <Sparkles className="h-4 w-4" />
                Quiz Personalizado
              </TabsTrigger>
              <TabsTrigger value="explore" className="gap-2">
                <Filter className="h-4 w-4" />
                Explorar
              </TabsTrigger>
              <TabsTrigger value="favorites" className="gap-2">
                <Heart className="h-4 w-4" />
                Favoritos ({likedBooks.size})
              </TabsTrigger>
              <TabsTrigger value="featured" className="gap-2">
                <BookOpen className="h-4 w-4" />
                Destacados
              </TabsTrigger>
            </TabsList>

            <TabsContent value="quiz" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <RecommendationQuiz onResults={setQuizResults} />
                </div>
                <div>
                  {quizResults.length > 0 ? (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-foreground">Tus Recomendaciones</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {quizResults.slice(0, 3).map((book) => (
                          <BookCard
                            key={book.id}
                            book={book}
                            showReasons={true}
                            onLike={handleLike}
                            isLiked={likedBooks.has(book.id)}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Card>
                      <CardHeader>
                        <CardTitle>¿Listo para descubrir tu próxima lectura?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Responde nuestro quiz personalizado y te recomendaremos libros perfectos para ti basados en
                          tus preferencias de género, estado de ánimo y estilo de lectura.
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="explore" className="space-y-8">
              <div className="grid lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1">
                  <BookFilters
                    selectedGenre={selectedGenre}
                    selectedMood={selectedMood}
                    selectedLength={selectedLength}
                    selectedDifficulty={selectedDifficulty}
                    onGenreChange={setSelectedGenre}
                    onMoodChange={setSelectedMood}
                    onLengthChange={setSelectedLength}
                    onDifficultyChange={setSelectedDifficulty}
                    onClearAll={clearAllFilters}
                  />
                </div>
                <div className="lg:col-span-3">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-foreground">Explorar Libros ({filteredBooks.length})</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredBooks.map((book) => (
                        <BookCard key={book.id} book={book} onLike={handleLike} isLiked={likedBooks.has(book.id)} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="favorites" className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Tus Libros Favoritos</h2>
                {likedBooksArray.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {likedBooksArray.map((book) => (
                      <BookCard key={book.id} book={book} onLike={handleLike} isLiked={true} />
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="text-center py-12">
                      <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">No tienes favoritos aún</h3>
                      <p className="text-muted-foreground mb-4">
                        Marca libros como favoritos haciendo clic en el corazón para guardarlos aquí.
                      </p>
                      <Button onClick={() => document.querySelector('[value="explore"]')?.click()}>
                        Explorar libros
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            <TabsContent value="featured" className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Libros Destacados</h2>
                <p className="text-muted-foreground">
                  Una selección curada de las mejores obras de la literatura hispanoamericana.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredBooks.map((book) => (
                    <BookCard key={book.id} book={book} onLike={handleLike} isLiked={likedBooks.has(book.id)} />
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
