export interface Book {
  id: string
  title: string
  author: string
  genre: string
  mood: string
  length: "corto" | "medio" | "largo"
  difficulty: "fácil" | "intermedio" | "avanzado"
  year: number
  rating: number
  description: string
  cover: string
  tags: string[]
  reasons: string[]
}

export interface QuizQuestion {
  id: string
  question: string
  options: {
    value: string
    label: string
    weight: Record<string, number>
  }[]
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "genre",
    question: "¿Qué género literario prefieres?",
    options: [
      {
        value: "novela",
        label: "Novela contemporánea",
        weight: { novela: 3, contemporaneo: 2 },
      },
      {
        value: "clasicos",
        label: "Clásicos universales",
        weight: { clasicos: 3, literatura: 2 },
      },
      {
        value: "poesia",
        label: "Poesía",
        weight: { poesia: 3, lirico: 2 },
      },
      {
        value: "ensayo",
        label: "Ensayos y no ficción",
        weight: { ensayo: 3, reflexivo: 2 },
      },
    ],
  },
  {
    id: "mood",
    question: "¿Qué tipo de experiencia buscas?",
    options: [
      {
        value: "reflexivo",
        label: "Algo que me haga reflexionar",
        weight: { reflexivo: 3, profundo: 2 },
      },
      {
        value: "entretenido",
        label: "Entretenimiento y escapismo",
        weight: { entretenido: 3, ligero: 2 },
      },
      {
        value: "emocional",
        label: "Una experiencia emocional intensa",
        weight: { emocional: 3, dramatico: 2 },
      },
      {
        value: "inspirador",
        label: "Algo inspirador y motivador",
        weight: { inspirador: 3, optimista: 2 },
      },
    ],
  },
  {
    id: "length",
    question: "¿Cuánto tiempo tienes para leer?",
    options: [
      {
        value: "corto",
        label: "Poco tiempo, algo breve",
        weight: { corto: 3 },
      },
      {
        value: "medio",
        label: "Tiempo moderado",
        weight: { medio: 3 },
      },
      {
        value: "largo",
        label: "Tengo tiempo para una lectura larga",
        weight: { largo: 3 },
      },
    ],
  },
  {
    id: "difficulty",
    question: "¿Qué nivel de complejidad prefieres?",
    options: [
      {
        value: "facil",
        label: "Lectura ligera y accesible",
        weight: { fácil: 3 },
      },
      {
        value: "intermedio",
        label: "Algo desafiante pero no demasiado",
        weight: { intermedio: 3 },
      },
      {
        value: "avanzado",
        label: "Me gustan los desafíos literarios",
        weight: { avanzado: 3 },
      },
    ],
  },
]

export const books: Book[] = [
  {
    id: "1",
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    genre: "novela",
    mood: "reflexivo",
    length: "largo",
    difficulty: "intermedio",
    year: 1967,
    rating: 4.8,
    description:
      "La obra maestra del realismo mágico que narra la historia de la familia Buendía a lo largo de siete generaciones.",
    cover: "/soledad.jpg",
    tags: ["realismo mágico", "familia", "Colombia", "clásico"],
    reasons: [
      "Una obra fundamental de la literatura hispanoamericana",
      "Perfecto para entender el realismo mágico",
      "Narrativa rica y compleja",
    ],
  },
  {
    id: "2",
    title: "La casa de los espíritus",
    author: "Isabel Allende",
    genre: "novela",
    mood: "emocional",
    length: "largo",
    difficulty: "intermedio",
    year: 1982,
    rating: 4.6,
    description: "Una saga familiar que mezcla lo político y lo mágico en el Chile del siglo XX.",
    cover: "/espíritus.jpg",
    tags: ["saga familiar", "Chile", "política", "mujeres"],
    reasons: [
      "Una narrativa emotiva y poderosa",
      "Excelente retrato de la historia chilena",
      "Personajes femeninos memorables",
    ],
  },
  {
    id: "3",
    title: "Rayuela",
    author: "Julio Cortázar",
    genre: "novela",
    mood: "reflexivo",
    length: "largo",
    difficulty: "avanzado",
    year: 1963,
    rating: 4.4,
    description:
      "Una novela experimental que puede leerse de múltiples formas, explorando el amor y la búsqueda existencial.",
    cover: "/Rayuela.jpg",
    tags: ["experimental", "París", "amor", "filosofía"],
    reasons: ["Una experiencia de lectura única", "Innovadora estructura narrativa", "Profundidad filosófica"],
  },
  {
    id: "4",
    title: "Veinte poemas de amor y una canción desesperada",
    author: "Pablo Neruda",
    genre: "poesia",
    mood: "emocional",
    length: "corto",
    difficulty: "fácil",
    year: 1924,
    rating: 4.7,
    description: "Una colección de poemas que explora el amor juvenil con una intensidad y belleza incomparables.",
    cover: "/desesperada.jpg",
    tags: ["amor", "juventud", "Chile", "lírica"],
    reasons: ["Poesía accesible y hermosa", "Perfecto para iniciarse en Neruda", "Emociones universales"],
  },
  {
    id: "5",
    title: "El laberinto de la soledad",
    author: "Octavio Paz",
    genre: "ensayo",
    mood: "reflexivo",
    length: "medio",
    difficulty: "intermedio",
    year: 1950,
    rating: 4.5,
    description: "Un ensayo fundamental sobre la identidad mexicana y la condición humana.",
    cover: "/laberinto.jpg",
    tags: ["México", "identidad", "filosofía", "cultura"],
    reasons: ["Análisis profundo de la cultura mexicana", "Prosa elegante y reflexiva", "Relevancia contemporánea"],
  },
  {
    id: "6",
    title: "Como agua para chocolate",
    author: "Laura Esquivel",
    genre: "novela",
    mood: "entretenido",
    length: "medio",
    difficulty: "fácil",
    year: 1989,
    rating: 4.3,
    description: "Una novela que mezcla cocina, amor y magia en el México revolucionario.",
    cover: "/chocolate.jpg",
    tags: ["cocina", "amor", "México", "revolución"],
    reasons: ["Lectura entretenida y original", "Mezcla perfecta de amor y gastronomía", "Fácil de leer"],
  },
  {
    id: "7",
    title: "Ficciones",
    author: "Jorge Luis Borges",
    genre: "novela",
    mood: "reflexivo",
    length: "corto",
    difficulty: "avanzado",
    year: 1944,
    rating: 4.6,
    description: "Una colección de cuentos que exploran laberintos, espejos y realidades infinitas.",
    cover: "/Ficciones.jpg",
    tags: ["cuentos", "filosofía", "laberintos", "metafísica"],
    reasons: ["Cuentos perfectos y profundos", "Innovación narrativa", "Complejidad intelectual"],
  },
  {
    id: "8",
    title: "La tregua",
    author: "Mario Benedetti",
    genre: "novela",
    mood: "emocional",
    length: "medio",
    difficulty: "fácil",
    year: 1960,
    rating: 4.2,
    description: "La historia de un amor tardío que transforma la vida de un hombre próximo a la jubilación.",
    cover: "/tregua.jpg",
    tags: ["amor", "madurez", "Uruguay", "vida cotidiana"],
    reasons: ["Historia emotiva y realista", "Personajes creíbles", "Reflexión sobre el amor maduro"],
  },
  {
    id: "9",
    title: "Pedro Páramo",
    author: "Juan Rulfo",
    genre: "novela",
    mood: "reflexivo",
    length: "corto",
    difficulty: "intermedio",
    year: 1955,
    rating: 4.4,
    description: "Una novela breve pero intensa sobre un pueblo fantasma y sus habitantes muertos.",
    cover: "/pedro-paramo.jpg",
    tags: ["México", "fantasmas", "muerte", "rural"],
    reasons: ["Obra maestra de la literatura mexicana", "Narrativa innovadora", "Atmósfera única"],
  },
  {
    id: "10",
    title: "Mafalda",
    author: "Quino",
    genre: "novela",
    mood: "entretenido",
    length: "corto",
    difficulty: "fácil",
    year: 1964,
    rating: 4.8,
    description: "Las aventuras de una niña curiosa y crítica que cuestiona el mundo de los adultos.",
    cover: "/mafalda.jpg",
    tags: ["humor", "crítica social", "Argentina", "cómic"],
    reasons: ["Humor inteligente y atemporal", "Crítica social sutil", "Lectura ligera pero profunda"],
  },
]

export function getRecommendations(preferences: Record<string, number>, count = 6): Book[] {
  const scoredBooks = books.map((book) => {
    let score = 0

    // Score based on genre
    if (preferences.novela && book.genre === "novela") score += preferences.novela
    if (preferences.poesia && book.genre === "poesia") score += preferences.poesia
    if (preferences.ensayo && book.genre === "ensayo") score += preferences.ensayo
    if (preferences.clasicos && book.year < 1980) score += preferences.clasicos

    // Score based on mood
    if (preferences.reflexivo && book.mood === "reflexivo") score += preferences.reflexivo
    if (preferences.entretenido && book.mood === "entretenido") score += preferences.entretenido
    if (preferences.emocional && book.mood === "emocional") score += preferences.emocional
    if (preferences.inspirador && book.mood === "inspirador") score += preferences.inspirador

    // Score based on length
    if (preferences.corto && book.length === "corto") score += preferences.corto
    if (preferences.medio && book.length === "medio") score += preferences.medio
    if (preferences.largo && book.length === "largo") score += preferences.largo

    // Score based on difficulty
    if (preferences.fácil && book.difficulty === "fácil") score += preferences.fácil
    if (preferences.intermedio && book.difficulty === "intermedio") score += preferences.intermedio
    if (preferences.avanzado && book.difficulty === "avanzado") score += preferences.avanzado

    return { ...book, score }
  })

  return scoredBooks.sort((a, b) => b.score - a.score).slice(0, count)
}

export const featuredBooks = books.slice(0, 4)
export const genres = ["novela", "poesia", "ensayo", "clasicos"]
export const moods = ["reflexivo", "entretenido", "emocional", "inspirador"]
export const lengths = ["corto", "medio", "largo"]
export const difficulties = ["fácil", "intermedio", "avanzado"]
