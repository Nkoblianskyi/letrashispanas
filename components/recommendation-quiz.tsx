"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { quizQuestions, getRecommendations, type Book } from "@/lib/recommendations"

interface RecommendationQuizProps {
  onResults: (books: Book[]) => void
}

export function RecommendationQuiz({ onResults }: RecommendationQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isComplete, setIsComplete] = useState(false)

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value }
    setAnswers(newAnswers)

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate preferences based on answers
      const preferences: Record<string, number> = {}

      Object.entries(newAnswers).forEach(([questionId, value]) => {
        const question = quizQuestions.find((q) => q.id === questionId)
        const option = question?.options.find((o) => o.value === value)

        if (option) {
          Object.entries(option.weight).forEach(([key, weight]) => {
            preferences[key] = (preferences[key] || 0) + weight
          })
        }
      })

      const recommendations = getRecommendations(preferences, 6)
      onResults(recommendations)
      setIsComplete(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setIsComplete(false)
  }

  if (isComplete) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-green-600">¡Quiz Completado!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            Hemos generado recomendaciones personalizadas basadas en tus respuestas.
          </p>
          <Button onClick={resetQuiz} variant="outline">
            Hacer el quiz de nuevo
          </Button>
        </CardContent>
      </Card>
    )
  }

  const question = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  return (
    <Card>
      <CardHeader>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>
              Pregunta {currentQuestion + 1} de {quizQuestions.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <CardTitle className="text-lg">{question.question}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {question.options.map((option) => (
            <Button
              key={option.value}
              variant="outline"
              className="justify-start h-auto p-4 text-left bg-transparent"
              onClick={() => handleAnswer(question.id, option.value)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
