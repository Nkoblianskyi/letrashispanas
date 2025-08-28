"use client"

import { Button } from "@/components/ui/button"
import { genres, moods, lengths, difficulties } from "@/lib/recommendations"

interface BookFiltersProps {
  selectedGenre: string | null
  selectedMood: string | null
  selectedLength: string | null
  selectedDifficulty: string | null
  onGenreChange: (genre: string | null) => void
  onMoodChange: (mood: string | null) => void
  onLengthChange: (length: string | null) => void
  onDifficultyChange: (difficulty: string | null) => void
  onClearAll: () => void
}

export function BookFilters({
  selectedGenre,
  selectedMood,
  selectedLength,
  selectedDifficulty,
  onGenreChange,
  onMoodChange,
  onLengthChange,
  onDifficultyChange,
  onClearAll,
}: BookFiltersProps) {
  const hasActiveFilters = selectedGenre || selectedMood || selectedLength || selectedDifficulty

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filtros</h3>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={onClearAll}>
            Limpiar filtros
          </Button>
        )}
      </div>

      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-medium mb-2">Género</h4>
          <div className="grid grid-cols-1 gap-2">
            {genres.map((genre) => (
              <Button
                key={genre}
                variant={selectedGenre === genre ? "default" : "outline"}
                size="sm"
                onClick={() => onGenreChange(selectedGenre === genre ? null : genre)}
                className="justify-start"
              >
                {genre}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Estado de ánimo</h4>
          <div className="grid grid-cols-1 gap-2">
            {moods.map((mood) => (
              <Button
                key={mood}
                variant={selectedMood === mood ? "default" : "outline"}
                size="sm"
                onClick={() => onMoodChange(selectedMood === mood ? null : mood)}
                className="justify-start"
              >
                {mood}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Longitud</h4>
          <div className="grid grid-cols-1 gap-2">
            {lengths.map((length) => (
              <Button
                key={length}
                variant={selectedLength === length ? "default" : "outline"}
                size="sm"
                onClick={() => onLengthChange(selectedLength === length ? null : length)}
                className="justify-start"
              >
                {length}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Dificultad</h4>
          <div className="grid grid-cols-1 gap-2">
            {difficulties.map((difficulty) => (
              <Button
                key={difficulty}
                variant={selectedDifficulty === difficulty ? "default" : "outline"}
                size="sm"
                onClick={() => onDifficultyChange(selectedDifficulty === difficulty ? null : difficulty)}
                className="justify-start"
              >
                {difficulty}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
