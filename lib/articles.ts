export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  category: string
  tags: string[]
  readTime: number
  image: string
}

export const categories = [
  { id: "novela", name: "Novela", description: "Análisis y reflexiones sobre novelas contemporáneas y clásicas" },
  { id: "poesia", name: "Poesía", description: "Explorando el mundo de la poesía hispanoamericana" },
  { id: "ensayo", name: "Ensayo", description: "Ensayos literarios y crítica cultural" },
  { id: "biografia", name: "Biografía", description: "Vidas de grandes autores y personalidades literarias" },
  { id: "clasicos", name: "Clásicos", description: "Revisitando los grandes clásicos de la literatura" },
  { id: "tendencias", name: "Tendencias", description: "Las últimas tendencias en el mundo literario" },
]

export const articles: Article[] = [
  {
    id: "1",
    slug: "realismo-magico-siglo-xxi",
    title: "El Realismo Mágico en el Siglo XXI: Una Nueva Generación de Voces",
    excerpt:
      "Exploramos cómo los autores contemporáneos están reinventando el realismo mágico para abordar las realidades del mundo moderno.",
    content: `El realismo mágico, ese género literario que floreció en América Latina durante el siglo XX, está experimentando una fascinante transformación en manos de una nueva generación de escritores.

Autores como Samanta Schweblin, Mariana Enríquez y Fernanda Melchor están llevando esta tradición hacia territorios inexplorados, incorporando elementos de la cultura digital, la crisis climática y las nuevas formas de violencia urbana.

## Una Estética Renovada

Esta nueva generación no se limita a replicar las fórmulas del pasado. En lugar de los pueblos rurales y las tradiciones ancestrales que caracterizaron a García Márquez y sus contemporáneos, estos autores sitúan lo fantástico en contextos urbanos y contemporáneos.

La tecnología, las redes sociales y la globalización se convierten en nuevos vehículos para lo mágico, creando una estética que habla directamente a las experiencias de los lectores del siglo XXI.

## Temas Universales, Voces Particulares

Lo que permanece constante es la capacidad del realismo mágico para abordar temas universales a través de lentes culturalmente específicas. La migración, la violencia de género, la desigualdad social y la crisis ambiental encuentran en este género un medio poderoso de expresión.

Estos autores demuestran que el realismo mágico no es una reliquia del pasado, sino una herramienta literaria viva y en constante evolución.`,
    author: "Carmen Rodríguez",
    publishedAt: "2025-01-15",
    category: "tendencias",
    tags: ["realismo mágico", "literatura contemporánea", "América Latina"],
    readTime: 8,
    image: "/magical-realism-books-contemporary-latin-american-.png",
  },
  {
    id: "2",
    slug: "poesia-digital-nuevas-formas",
    title: "Poesía Digital: Nuevas Formas de Expresión Lírica",
    excerpt:
      "La poesía encuentra nuevos espacios y formatos en la era digital, desde Instagram hasta aplicaciones interactivas.",
    content: `La revolución digital ha transformado no solo cómo consumimos poesía, sino también cómo se crea y se presenta. Las redes sociales, especialmente Instagram y TikTok, han democratizado el acceso a la poesía y han dado lugar a nuevas formas de expresión lírica.

## Instagram Poetry: Más Allá de los Prejuicios

Aunque a menudo criticada por su brevedad y simplicidad, la poesía de Instagram ha logrado conectar con millones de lectores jóvenes que quizás nunca habrían abierto un libro de poemas tradicional.

Poetas como Rupi Kaur, aunque controvertida, ha demostrado que existe un hambre real por la poesía accesible y visualmente atractiva.

## Nuevas Herramientas, Nuevas Posibilidades

Las aplicaciones interactivas, los poemas generados por inteligencia artificial y las instalaciones digitales están expandiendo las fronteras de lo que consideramos poesía.

Estos nuevos medios no reemplazan a la poesía tradicional, sino que la complementan y la enriquecen, ofreciendo nuevas formas de experimentar el lenguaje poético.`,
    author: "Miguel Ángel Torres",
    publishedAt: "2025-01-10",
    category: "poesia",
    tags: ["poesía digital", "redes sociales", "tecnología"],
    readTime: 6,
    image: "/digital-poetry-instagram-social-media-literature.png",
  },
  {
    id: "3",
    slug: "cervantes-don-quijote-actualidad",
    title: "Cervantes y la Actualidad: Por Qué Don Quijote Sigue Siendo Relevante",
    excerpt: "Un análisis de cómo la obra maestra de Cervantes continúa hablando a los lectores del siglo XXI.",
    content: `Cuatrocientos años después de su publicación, "Don Quijote de la Mancha" sigue siendo una obra sorprendentemente contemporánea. La genialidad de Cervantes radica en haber creado personajes y situaciones que trascienden su época histórica.

## El Idealismo en Tiempos Cínicos

En una era marcada por el cinismo y la desilusión, la figura de Don Quijote como idealista incomprendido resuena con particular fuerza. Su lucha contra los molinos de viento puede interpretarse como una metáfora de los desafíos que enfrentan quienes se atreven a soñar con un mundo mejor.

## La Construcción de la Realidad

Cervantes anticipó muchas de las preocupaciones contemporáneas sobre la naturaleza de la realidad y la verdad. En una época de "fake news" y realidades alternativas, la pregunta sobre qué es real y qué es imaginación cobra nueva relevancia.

## Un Espejo de la Condición Humana

La relación entre Don Quijote y Sancho Panza representa uno de los retratos más profundos de la amistad y la complementariedad humana en toda la literatura. Sus diálogos siguen siendo una fuente inagotable de sabiduría sobre la naturaleza humana.`,
    author: "Isabel Martínez",
    publishedAt: "2025-01-05",
    category: "clasicos",
    tags: ["Cervantes", "Don Quijote", "literatura clásica", "análisis literario"],
    readTime: 10,
    image: "/don-quijote-cervantes-windmills-classic-spanish-li.png",
  },
  {
    id: "4",
    slug: "biografia-garcia-lorca-poeta-eterno",
    title: "Federico García Lorca: El Poeta Eterno de Andalucía",
    excerpt: "Un recorrido por la vida y obra de uno de los poetas más influyentes de la literatura española.",
    content: `Federico García Lorca (1898-1936) sigue siendo una de las figuras más fascinantes y trágicas de la literatura española. Su asesinato durante la Guerra Civil española no solo truncó una carrera brillante, sino que convirtió al poeta en un símbolo de la libertad artística y la resistencia cultural.

## Los Años de Formación

Nacido en Fuente Vaqueros, Granada, Lorca creció en el corazón de Andalucía, una región que marcaría profundamente su sensibilidad poética. Desde temprana edad mostró talento tanto para la música como para la literatura, una dualidad que caracterizaría toda su obra.

## La Generación del 27

Lorca fue una figura central de la Generación del 27, ese grupo extraordinario de poetas que incluyó a Rafael Alberti, Vicente Aleixandre, Luis Cernuda y Jorge Guillén. Juntos revolucionaron la poesía española, combinando la tradición popular con las vanguardias europeas.

## Teatro y Compromiso Social

Además de su poesía, Lorca fue un dramaturgo innovador. Obras como "Bodas de sangre", "Yerma" y "La casa de Bernarda Alba" exploraron temas universales como el amor, la muerte y la represión social, especialmente la situación de la mujer en la sociedad tradicional española.

## Un Legado Imperecedero

La muerte prematura de Lorca a los 38 años no pudo silenciar su voz. Sus poemas siguen siendo recitados, sus obras teatrales continúan representándose en todo el mundo, y su figura sigue inspirando a nuevas generaciones de artistas y activistas.`,
    author: "Antonio Ruiz",
    publishedAt: "2023-12-28",
    category: "biografia",
    tags: ["García Lorca", "Generación del 27", "poesía española", "teatro"],
    readTime: 12,
    image: "/federico-garcia-lorca-andalusia-spanish-poet-grana.png",
  },
  {
    id: "6",
    slug: "novela-historica-espanola-actual",
    title: "La Novela Histórica Española Actual: Entre la Memoria y la Ficción",
    excerpt: "Un análisis de cómo los autores españoles contemporáneos abordan el pasado histórico en sus obras.",
    content: `La novela histórica española ha experimentado un notable renacimiento en las últimas décadas. Autores como Javier Cercas, Almudena Grandes y Antonio Muñoz Molina han demostrado que el pasado puede ser una fuente inagotable de inspiración para entender el presente.

## La Memoria Histórica como Materia Narrativa

La recuperación de la memoria histórica, especialmente en relación con la Guerra Civil española y la dictadura franquista, ha sido un tema central en la literatura española contemporánea. Novelas como "Soldados de Salamina" de Javier Cercas han mostrado cómo la ficción puede iluminar aspectos de la historia que los documentos oficiales no logran capturar.

## Nuevas Perspectivas sobre el Pasado

Los novelistas actuales no se limitan a recrear eventos históricos, sino que los reinterpretan desde perspectivas contemporáneas. Esto permite una comprensión más matizada y compleja de períodos históricos que durante mucho tiempo fueron simplificados o silenciados.

## La Técnica Narrativa al Servicio de la Historia

Estos autores han desarrollado técnicas narrativas sofisticadas que combinan la investigación histórica rigurosa con la libertad creativa de la ficción. El resultado son obras que son tanto entretenidas como educativas, accesibles tanto para el público general como para los especialistas.

## Un Diálogo con el Presente

La mejor novela histórica contemporánea no se limita a mirar hacia atrás, sino que establece un diálogo constante con el presente. Los temas del pasado resuenan con las preocupaciones actuales, creando obras que son relevantes tanto histórica como contemporáneamente.`,
    author: "Carlos Mendoza",
    publishedAt: "2023-12-15",
    category: "novela",
    tags: ["novela histórica", "memoria histórica", "Guerra Civil", "literatura española"],
    readTime: 11,
    image: "/spanish-historical-novel-civil-war-memory-books.png",
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((article) => article.category === category)
}

export function getCategoryBySlug(slug: string) {
  return categories.find((cat) => cat.id === slug)
}
