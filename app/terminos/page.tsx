export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Términos y Condiciones</h1>
            <p className="text-muted-foreground">Última actualización: {new Date().toLocaleDateString("es-ES")}</p>
          </div>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceptación de los Términos</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Al acceder y utilizar el sitio web de Letras Hispanas (letrashispanas.online), aceptas estar sujeto a
                  estos Términos y Condiciones de uso. Si no estás de acuerdo con alguno de estos términos, no debes
                  utilizar nuestro sitio web.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Descripción del Servicio</h2>
              <div className="text-muted-foreground space-y-4">
                <p>Letras Hispanas es un portal literario que ofrece:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reseñas y críticas de libros en español</li>
                  <li>Artículos sobre literatura hispanoamericana</li>
                  <li>Recomendaciones personalizadas de lectura</li>
                  <li>Información sobre eventos literarios</li>
                  <li>Servicios de registro para actividades culturales</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Uso Aceptable</h2>
              <div className="text-muted-foreground space-y-4">
                <p>Al utilizar nuestro sitio web, te comprometes a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proporcionar información veraz y actualizada</li>
                  <li>No utilizar el sitio para actividades ilegales o no autorizadas</li>
                  <li>Respetar los derechos de propiedad intelectual</li>
                  <li>No interferir con el funcionamiento del sitio</li>
                  <li>Mantener la confidencialidad de tu información de acceso</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Propiedad Intelectual</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Todo el contenido del sitio web, incluyendo textos, imágenes, logotipos, reseñas y artículos, está
                  protegido por derechos de autor y otras leyes de propiedad intelectual.
                </p>
                <p>
                  Puedes utilizar el contenido para uso personal y no comercial, pero no puedes reproducir, distribuir o
                  modificar el contenido sin nuestro consentimiento previo por escrito.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Registro de Eventos</h2>
              <div className="text-muted-foreground space-y-4">
                <p>Al registrarte para eventos literarios a través de nuestro sitio:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Confirmas que la información proporcionada es exacta</li>
                  <li>Entiendes que los lugares pueden ser limitados</li>
                  <li>Aceptas recibir comunicaciones relacionadas con el evento</li>
                  <li>Reconoces que podemos cancelar o reprogramar eventos</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitación de Responsabilidad</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Letras Hispanas no será responsable por daños directos, indirectos, incidentales o consecuentes que
                  resulten del uso o la imposibilidad de usar nuestro sitio web o servicios.
                </p>
                <p>
                  Proporcionamos el sitio web "tal como está" sin garantías de ningún tipo, ya sean expresas o
                  implícitas.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Privacidad</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Tu privacidad es importante para nosotros. El uso de tu información personal se rige por nuestra
                  Política de Privacidad, que forma parte integral de estos términos.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Modificaciones</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en
                  vigor inmediatamente después de su publicación en el sitio web.
                </p>
                <p>
                  Es tu responsabilidad revisar periódicamente estos términos para estar al tanto de cualquier cambio.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Ley Aplicable</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Estos términos se rigen por las leyes de España. Cualquier disputa relacionada con estos términos será
                  resuelta por los tribunales competentes de Madrid, España.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Contacto</h2>
              <div className="text-muted-foreground space-y-4">
                <p>Si tienes preguntas sobre estos Términos y Condiciones, puedes contactarnos en:</p>
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
