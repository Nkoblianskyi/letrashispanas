export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Política de Cookies</h1>
            <p className="text-muted-foreground">Última actualización: {new Date().toLocaleDateString("es-ES")}</p>
          </div>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">¿Qué son las Cookies?</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio
                  web. Nos ayudan a mejorar tu experiencia de navegación, recordar tus preferencias y analizar cómo
                  utilizas nuestro sitio.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Tipos de Cookies que Utilizamos</h2>
              <div className="text-muted-foreground space-y-6">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Cookies Esenciales</h3>
                  <p className="mb-2">Estas cookies son necesarias para el funcionamiento básico del sitio web.</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Gestión de sesiones de usuario</li>
                    <li>Configuración de idioma y región</li>
                    <li>Funcionalidades de seguridad</li>
                  </ul>
                  <p className="text-sm mt-2">
                    <strong>Duración:</strong> Sesión del navegador
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Cookies de Preferencias</h3>
                  <p className="mb-2">Nos permiten recordar tus preferencias y personalizar tu experiencia.</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Preferencias de lectura y géneros favoritos</li>
                    <li>Configuración de visualización</li>
                    <li>Libros marcados como favoritos</li>
                  </ul>
                  <p className="text-sm mt-2">
                    <strong>Duración:</strong> 12 meses
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Cookies Analíticas</h3>
                  <p className="mb-2">Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Páginas más visitadas</li>
                    <li>Tiempo de permanencia en el sitio</li>
                    <li>Patrones de navegación</li>
                    <li>Errores técnicos</li>
                  </ul>
                  <p className="text-sm mt-2">
                    <strong>Duración:</strong> 24 meses
                  </p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Cookies de Marketing</h3>
                  <p className="mb-2">Se utilizan para mostrar contenido relevante y personalizado.</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Recomendaciones de libros personalizadas</li>
                    <li>Contenido relacionado con tus intereses</li>
                    <li>Información sobre eventos literarios</li>
                  </ul>
                  <p className="text-sm mt-2">
                    <strong>Duración:</strong> 6 meses
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookies de Terceros</h2>
              <div className="text-muted-foreground space-y-4">
                <p>Algunos de nuestros socios de confianza también pueden establecer cookies en tu dispositivo:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Google Analytics:</strong> Para análisis de tráfico web y comportamiento de usuarios
                  </li>
                  <li>
                    <strong>Redes Sociales:</strong> Para funcionalidades de compartir contenido
                  </li>
                  <li>
                    <strong>Servicios de CDN:</strong> Para mejorar la velocidad de carga del sitio
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Gestión de Cookies</h2>
              <div className="text-muted-foreground space-y-4">
                <p>Tienes control total sobre las cookies. Puedes gestionarlas de las siguientes maneras:</p>

                <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                  <h3 className="font-semibold text-foreground mb-2">Banner de Cookies</h3>
                  <p>
                    Cuando visites nuestro sitio por primera vez, verás un banner que te permite aceptar o rechazar las
                    cookies no esenciales.
                  </p>
                </div>

                <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                  <h3 className="font-semibold text-foreground mb-2">Configuración del Navegador</h3>
                  <p>Puedes configurar tu navegador para:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Bloquear todas las cookies</li>
                    <li>Permitir solo cookies de sitios específicos</li>
                    <li>Eliminar cookies existentes</li>
                    <li>Recibir notificaciones antes de que se establezcan cookies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Instrucciones por Navegador</h2>
              <div className="text-muted-foreground space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Google Chrome</h3>
                    <p className="text-sm">Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Mozilla Firefox</h3>
                    <p className="text-sm">Opciones → Privacidad y seguridad → Cookies y datos del sitio</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Safari</h3>
                    <p className="text-sm">Preferencias → Privacidad → Gestionar datos de sitios web</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Microsoft Edge</h3>
                    <p className="text-sm">Configuración → Privacidad, búsqueda y servicios → Cookies</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Consecuencias de Deshabilitar Cookies</h2>
              <div className="text-muted-foreground space-y-4">
                <p>Si decides deshabilitar las cookies, algunas funcionalidades del sitio pueden verse afectadas:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Las recomendaciones personalizadas no funcionarán correctamente</li>
                  <li>Tendrás que volver a configurar tus preferencias en cada visita</li>
                  <li>Algunas funciones interactivas pueden no estar disponibles</li>
                  <li>La experiencia de navegación puede ser menos fluida</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Actualizaciones de esta Política</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Podemos actualizar esta Política de Cookies ocasionalmente para reflejar cambios en nuestras prácticas
                  o por razones legales. Te recomendamos revisar esta página periódicamente.
                </p>
                <p>
                  Los cambios significativos serán comunicados a través de nuestro banner de cookies o mediante
                  notificación en el sitio web.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contacto</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Si tienes preguntas sobre nuestra Política de Cookies o sobre cómo gestionamos tus datos, no dudes en
                  contactarnos:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p>
                    <strong>Email:</strong> contacto@letrashispanas.online
                  </p>
                  <p>
                    <strong>Teléfono:</strong> +34 91 684 6252
                  </p>
                  <p>
                    <strong>Dirección:</strong> Centro de Negocios Azca, Paseo de la Castellana, 95, 28046 Madrid,
                    España
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
