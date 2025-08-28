export interface Review {
  id: string
  slug: string
  title: string
  author: string
  reviewer: string
  rating: number
  publishedDate: string
  genre: string
  pages: number
  publisher: string
  isbn: string
  summary: string
  review: string
  pros: string[]
  cons: string[]
  recommendation: string
  coverImage: string
  tags: string[]
}

export const reviews: Review[] = [
  {
    id: "1",
    slug: "cien-anos-soledad-garcia-marquez",
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    reviewer: "María González",
    rating: 5,
    publishedDate: "2025-01-15",
    genre: "Realismo Mágico",
    pages: 471,
    publisher: "Editorial Sudamericana",
    isbn: "978-84-376-0494-7",
    summary:
      "La saga de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo, donde lo mágico y lo real se entrelazan de manera magistral.",
    review:
      "García Márquez nos presenta una obra maestra que trasciende las barreras del tiempo y el espacio. La historia de los Buendía es, en realidad, la historia de América Latina: sus sueños, sus tragedias, sus revoluciones y su soledad. El autor colombiano construye un universo literario único donde lo fantástico convive naturalmente con lo cotidiano. La prosa de García Márquez es de una belleza hipnótica, capaz de transportar al lector a un mundo donde llueve flores y los personajes viven durante más de cien años. Cada página está cargada de simbolismo y poesía, convirtiendo la lectura en una experiencia transformadora. La estructura circular de la novela, que comienza y termina con la misma imagen, refuerza el tema del eterno retorno y la inevitabilidad del destino. Sin duda, una obra imprescindible que merece ser leída y releída.",
    pros: [
      "Prosa poética excepcional",
      "Construcción magistral del realismo mágico",
      "Personajes inolvidables y complejos",
      "Reflexión profunda sobre la condición humana",
    ],
    cons: ["Puede resultar compleja para lectores novatos", "La abundancia de personajes requiere atención constante"],
    recommendation:
      "Imprescindible para cualquier amante de la literatura. Una obra que define el realismo mágico latinoamericano.",
    coverImage: "/soledad.jpg",
    tags: ["Clásico", "Premio Nobel", "Latinoamericana", "Familia"],
  },
  {
    id: "2",
    slug: "rayuela-julio-cortazar",
    title: "Rayuela",
    author: "Julio Cortázar",
    reviewer: "Carlos Mendoza",
    rating: 5,
    publishedDate: "2025-01-10",
    genre: "Literatura Experimental",
    pages: 635,
    publisher: "Editorial Sudamericana",
    isbn: "978-84-376-0495-4",
    summary:
      "Una novela revolucionaria que puede leerse de múltiples formas, siguiendo la historia de Horacio Oliveira entre París y Buenos Aires.",
    review:
      "Cortázar revoluciona la narrativa con esta obra experimental que desafía las convenciones literarias tradicionales. La propuesta de lectura múltiple (lineal o siguiendo el 'tablero de dirección') convierte al lector en coautor de la experiencia literaria. La historia de Horacio Oliveira, dividida entre el 'lado de allá' (París) y el 'lado de acá' (Buenos Aires), es un viaje existencial profundo que explora temas como el amor, la búsqueda de sentido y la condición del intelectual latinoamericano en Europa. Los personajes del Club de la Serpiente aportan una dimensión filosófica y cultural rica, mientras que la prosa de Cortázar mantiene su característico humor y profundidad. La estructura fragmentaria y los 'capítulos prescindibles' ofrecen reflexiones metaliterarias fascinantes. Una obra que marcó un antes y un después en la literatura hispanoamericana.",
    pros: [
      "Innovación narrativa revolucionaria",
      "Profundidad filosófica y existencial",
      "Personajes complejos y memorables",
      "Humor inteligente y prosa brillante",
    ],
    cons: ["Estructura compleja puede desorientar", "Requiere un lector activo y comprometido"],
    recommendation: "Para lectores experimentados que buscan una experiencia literaria única e innovadora.",
    coverImage: "/Rayuela.jpg",
    tags: ["Experimental", "Boom Latinoamericano", "París", "Filosofía"],
  },
  {
    id: "3",
    slug: "la-casa-espiritus-isabel-allende",
    title: "La casa de los espíritus",
    author: "Isabel Allende",
    reviewer: "Ana Ruiz",
    rating: 4,
    publishedDate: "2025-01-05",
    genre: "Realismo Mágico",
    pages: 433,
    publisher: "Editorial Planeta",
    isbn: "978-84-08-04794-1",
    summary:
      "La saga de cuatro generaciones de mujeres de la familia del Valle y de la Trueba, en un país latinoamericano sin nombre.",
    review:
      "Isabel Allende nos entrega una novela épica que combina magistralmente lo íntimo y lo político, lo mágico y lo real. La historia de Clara, Blanca, Alba y las demás mujeres de la familia constituye un fresco extraordinario de la historia latinoamericana del siglo XX. La autora chilena construye personajes femeninos fuertes y memorables, cada una con su propia voz y personalidad distintiva. El realismo mágico se manifiesta de forma natural en los dones sobrenaturales de Clara y en la atmósfera onírica que envuelve la casa de la esquina. La novela también funciona como una crónica política, retratando los conflictos sociales y las dictaduras militares que marcaron el continente. La prosa de Allende es fluida y emotiva, capaz de conmover al lector desde las primeras páginas. Una obra que honra la tradición del realismo mágico mientras aporta una perspectiva femenina única.",
    pros: [
      "Personajes femeninos poderosos y bien desarrollados",
      "Combinación exitosa de lo íntimo y lo político",
      "Prosa emotiva y accesible",
      "Retrato vívido de la historia latinoamericana",
    ],
    cons: ["Algunas comparaciones inevitables con García Márquez", "Ciertos pasajes pueden resultar melodramáticos"],
    recommendation:
      "Excelente introducción al realismo mágico latinoamericano, especialmente recomendada para lectores interesados en perspectivas femeninas.",
    coverImage: "/espíritus.jpg",
    tags: ["Realismo Mágico", "Feminismo", "Historia", "Familia"],
  },
  {
    id: "4",
    slug: "pedro-paramo-juan-rulfo",
    title: "Pedro Páramo",
    author: "Juan Rulfo",
    reviewer: "Diego Herrera",
    rating: 5,
    publishedDate: "2023-12-28",
    genre: "Realismo Mágico",
    pages: 124,
    publisher: "Fondo de Cultura Económica",
    isbn: "978-968-16-0021-9",
    summary:
      "Juan Preciado viaja a Comala en busca de su padre Pedro Páramo, pero encuentra un pueblo habitado por muertos que le cuentan sus historias.",
    review:
      "Rulfo crea una obra maestra de concisión y profundidad que influyó decisivamente en el desarrollo del realismo mágico latinoamericano. En apenas 124 páginas, el autor mexicano construye un universo literario completo y fascinante. La técnica narrativa es revolucionaria: voces que se entrelazan, tiempos que se superponen, y la frontera difusa entre vivos y muertos. Comala se convierte en un personaje más, un pueblo fantasma que refleja la desolación del México rural. La prosa de Rulfo es de una belleza austera y poética, cada palabra está cuidadosamente elegida para crear una atmósfera única de misterio y melancolía. Los personajes, especialmente Pedro Páramo y Susana San Juan, están dibujados con trazos precisos que los convierten en figuras inolvidables. La novela funciona como una alegoría del poder, la muerte y la memoria, temas universales tratados desde una perspectiva profundamente mexicana. Una obra fundamental que todo lector serio debe conocer.",
    pros: [
      "Técnica narrativa innovadora y magistral",
      "Prosa poética de extraordinaria belleza",
      "Construcción atmosférica excepcional",
      "Influencia fundamental en la literatura latinoamericana",
    ],
    cons: [
      "Estructura compleja puede confundir en primera lectura",
      "Brevedad puede dejar al lector deseando más desarrollo",
    ],
    recommendation:
      "Obra maestra imprescindible. Ideal para lectores que aprecian la innovación narrativa y la prosa poética.",
    coverImage: "/pedro-paramo.jpg",
    tags: ["Clásico", "México", "Muerte", "Innovación Narrativa"],
  },
  {
    id: "5",
    slug: "ficciones-jorge-luis-borges",
    title: "Ficciones",
    author: "Jorge Luis Borges",
    reviewer: "María González",
    rating: 5,
    publishedDate: "2023-12-20",
    genre: "Literatura Fantástica",
    pages: 174,
    publisher: "Emecé Editores",
    isbn: "978-950-04-0001-4",
    summary:
      "Colección de cuentos que exploran laberintos, bibliotecas infinitas, espejos y otros elementos fantásticos con precisión matemática.",
    review:
      "Borges nos presenta una colección de relatos que redefinen los límites de la literatura fantástica. Cada cuento es una joya de precisión y erudición, donde lo fantástico surge de premisas lógicas llevadas a sus últimas consecuencias. 'El jardín de senderos que se bifurcan', 'La biblioteca de Babel' y 'El Aleph' son obras maestras que han influido no solo en la literatura, sino en la filosofía y las matemáticas. La prosa borgiana es de una elegancia cristalina, cada frase está construida con la precisión de un relojero suizo. Los temas recurrentes (laberintos, espejos, bibliotecas, infinito) se convierten en símbolos universales que trascienden lo meramente literario. Borges logra crear universos completos en pocas páginas, demostrando que la brevedad puede ser más poderosa que la extensión. La erudición del autor argentino nunca es pedante, sino que enriquece cada relato con referencias que abren nuevas dimensiones de significado. Una obra que se puede releer infinitas veces, descubriendo siempre nuevos matices.",
    pros: [
      "Precisión y elegancia estilística incomparables",
      "Innovación conceptual revolucionaria",
      "Erudición que enriquece sin abrumar",
      "Influencia fundamental en la literatura mundial",
    ],
    cons: ["Puede resultar intelectualmente exigente", "Algunos lectores pueden encontrarlo frío o cerebral"],
    recommendation:
      "Imprescindible para cualquier biblioteca. Ideal para lectores que disfrutan de la literatura intelectual y fantástica.",
    coverImage: "/Ficciones.jpg",
    tags: ["Fantástico", "Filosofía", "Laberintos", "Erudición"],
  },
  {
    id: "6",
    slug: "como-agua-chocolate-laura-esquivel",
    title: "Como agua para chocolate",
    author: "Laura Esquivel",
    reviewer: "Ana Ruiz",
    rating: 4,
    publishedDate: "2023-12-15",
    genre: "Realismo Mágico",
    pages: 246,
    publisher: "Editorial Planeta",
    isbn: "978-84-08-04795-8",
    summary:
      "La historia de Tita, quien expresa sus emociones a través de la cocina en el México revolucionario, donde las recetas familiares guardan secretos mágicos.",
    review:
      "Laura Esquivel crea una novela única que combina realismo mágico, tradición culinaria y romance en el contexto de la Revolución Mexicana. La estructura de la novela, organizada en doce capítulos correspondientes a los meses del año, cada uno con su receta, es original y efectiva. Tita emerge como una heroína memorable cuya capacidad de transmitir emociones a través de la comida crea situaciones tanto cómicas como conmovedoras. La cocina se convierte en un espacio de resistencia femenina y expresión personal en una sociedad patriarcal restrictiva. El realismo mágico se manifiesta de forma natural en los efectos sobrenaturales de los platillos de Tita, creando una atmósfera encantadora que nunca resulta forzada. La novela también funciona como un retrato de las tradiciones mexicanas, especialmente las relacionadas con la comida y la familia. Aunque algunos elementos pueden resultar predecibles, la calidez de la narración y la originalidad del concepto compensan estas limitaciones. Una lectura placentera que celebra la cultura mexicana y el poder transformador del amor.",
    pros: [
      "Concepto original y bien ejecutado",
      "Celebración rica de la cultura mexicana",
      "Personaje femenino fuerte y memorable",
      "Combinación exitosa de géneros",
    ],
    cons: ["Algunos elementos románticos resultan predecibles", "El realismo mágico a veces puede parecer superficial"],
    recommendation:
      "Perfecta para lectores que buscan una introducción accesible al realismo mágico con sabor mexicano.",
    coverImage: "/chocolate.jpg",
    tags: ["Cocina", "México", "Romance", "Tradiciones"],
  },
]

export const genres = [
  "Todos los géneros",
  "Realismo Mágico",
  "Literatura Experimental",
  "Literatura Fantástica",
  "Novela Histórica",
  "Romance",
  "Ensayo",
  "Poesía",
]

export const ratings = [
  { value: 0, label: "Todas las calificaciones" },
  { value: 5, label: "5 estrellas" },
  { value: 4, label: "4+ estrellas" },
  { value: 3, label: "3+ estrellas" },
]

export function getReviewBySlug(slug: string): Review | undefined {
  return reviews.find((review) => review.slug === slug)
}

export function getReviewsByGenre(genre: string): Review[] {
  if (genre === "Todos los géneros") return reviews
  return reviews.filter((review) => review.genre === genre)
}

export function getReviewsByRating(minRating: number): Review[] {
  if (minRating === 0) return reviews
  return reviews.filter((review) => review.rating >= minRating)
}

export function searchReviews(query: string): Review[] {
  const lowercaseQuery = query.toLowerCase()
  return reviews.filter(
    (review) =>
      review.title.toLowerCase().includes(lowercaseQuery) ||
      review.author.toLowerCase().includes(lowercaseQuery) ||
      review.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)),
  )
}
