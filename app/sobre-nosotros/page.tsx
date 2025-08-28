import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Heart, Users, Award, Target, Eye, Lightbulb } from "lucide-react"

export default function SobreNosotrosPage() {
  const teamMembers = [
    {
      name: "María González",
      role: "Editora Jefe",
      bio: "Doctora en Literatura Española con más de 15 años de experiencia en crítica literaria.",
      image: "/team-member-mar-a-gonz-lez-editora-jefe.png",
    },
    {
      name: "Carlos Mendoza",
      role: "Crítico Literario",
      bio: "Especialista en literatura latinoamericana contemporánea y autor de varios ensayos.",
      image: "/team-member-carlos-mendoza-cr-tico-literario.png",
    },
    {
      name: "Ana Ruiz",
      role: "Coordinadora de Contenidos",
      bio: "Periodista cultural con amplia experiencia en medios digitales y redes sociales.",
      image: "/team-member-ana-ruiz-coordinadora-de-contenidos.png",
    },
    {
      name: "Diego Herrera",
      role: "Especialista en Clásicos",
      bio: "Profesor universitario especializado en literatura clásica española y del Siglo de Oro.",
      image: "/team-member-diego-herrera-especialista-en-cl-sicos.png",
    },
  ]

  const values = [
    {
      icon: BookOpen,
      title: "Pasión por la Literatura",
      description: "Creemos en el poder transformador de los libros y en su capacidad para enriquecer nuestras vidas.",
    },
    {
      icon: Heart,
      title: "Amor por el Idioma",
      description: "Celebramos la riqueza y diversidad de la literatura en español en todas sus formas.",
    },
    {
      icon: Users,
      title: "Comunidad de Lectores",
      description: "Fomentamos un espacio inclusivo donde todos los amantes de la lectura se sientan bienvenidos.",
    },
    {
      icon: Award,
      title: "Calidad y Rigor",
      description: "Mantenemos los más altos estándares en nuestras reseñas y análisis literarios.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Sobre <span className="text-accent">Letras Hispanas</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            Somos un equipo apasionado de críticos literarios, editores y amantes de los libros, dedicados a promover y
            celebrar la riqueza de la literatura en español.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Our Story */}
        <section>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-4">
                  Nuestra Historia
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Un Sueño Hecho Realidad para los Amantes de la Literatura
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Letras Hispanas nació en 2020 con una misión clara: crear un espacio digital donde la literatura en
                  español pudiera brillar con toda su magnificencia. Fundado por un grupo de académicos y críticos
                  literarios, nuestro portal se ha convertido en una referencia para lectores de habla hispana en todo
                  el mundo.
                </p>
                <p>
                  Desde nuestros humildes comienzos con apenas 50 reseñas, hemos crecido hasta convertirnos en una
                  comunidad vibrante de más de 2,000 lectores activos, con una biblioteca digital de más de 500 reseñas
                  detalladas y análisis profundos.
                </p>
                <p>
                  Nuestro compromiso va más allá de las simples reseñas: buscamos crear puentes entre lectores, autores
                  y la rica tradición literaria hispanoamericana, fomentando el diálogo y la reflexión sobre las obras
                  que han marcado y siguen marcando nuestra cultura.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/20 p-8">
                <img
                  src="/biblioteca.jpg"
                  alt="Biblioteca acogedora con libros españoles"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-muted rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Nuestra Misión</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Promover y difundir la literatura en español a través de reseñas rigurosas, análisis profundos y
                recomendaciones personalizadas. Queremos ser el puente que conecte a los lectores con las obras que
                transformarán su perspectiva del mundo y enriquecerán su experiencia literaria.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Nuestra Visión</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Ser la plataforma de referencia para la literatura en español, reconocida por la calidad de nuestro
                contenido y la diversidad de nuestras perspectivas. Aspiramos a crear una comunidad global de lectores
                que celebren y preserven la riqueza cultural de nuestro idioma.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section>
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Nuestros Valores
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">Lo que nos Mueve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estos principios guían cada reseña, cada artículo y cada interacción en nuestra comunidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team */}
        <section>
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Nuestro Equipo
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">Los Rostros detrás de Letras Hispanas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conoce a los expertos que hacen posible cada reseña, cada análisis y cada recomendación.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-accent font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mx-auto">
              <Lightbulb className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Únete a Nuestra Comunidad</h2>
            <p className="text-muted-foreground leading-relaxed">
              ¿Eres un amante de la literatura? ¿Te apasiona descubrir nuevos autores y compartir tus lecturas? Únete a
              nuestra comunidad de lectores y forma parte de esta aventura literaria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                Contáctanos
              </a>
              <a
                href="/articulos"
                className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                Explora Nuestros Artículos
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
