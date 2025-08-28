export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Política de Privacidad</h1>
            <p className="text-muted-foreground">Última actualización: {new Date().toLocaleDateString("es-ES")}</p>
          </div>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Información que Recopilamos</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  En Letras Hispanas, recopilamos información que nos proporcionas directamente cuando utilizas nuestros
                  servicios:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Información de contacto (nombre, correo electrónico, teléfono)</li>
                  <li>Preferencias de lectura y comentarios en artículos</li>
                  <li>Información de registro para eventos literarios</li>
                  <li>Datos de navegación y uso del sitio web</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Cómo Utilizamos tu Información</h2>
              <div className="text-muted-foreground space-y-4">
                <p>Utilizamos la información recopilada para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proporcionar y mejorar nuestros servicios literarios</li>
                  <li>Responder a tus consultas y solicitudes</li>
                  <li>Enviarte información sobre eventos y novedades literarias</li>
                  <li>Personalizar tu experiencia en nuestro portal</li>
                  <li>Analizar el uso del sitio para mejoras continuas</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Cookies y Tecnologías Similares</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Utilizamos cookies y tecnologías similares para mejorar tu experiencia de navegación. Las cookies nos
                  ayudan a:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Recordar tus preferencias y configuraciones</li>
                  <li>Analizar el tráfico y uso del sitio web</li>
                  <li>Proporcionar funcionalidades personalizadas</li>
                  <li>Mejorar la seguridad del sitio</li>
                </ul>
                <p>
                  Puedes controlar el uso de cookies a través de la configuración de tu navegador o mediante nuestro
                  banner de cookies.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Compartir Información</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto en las siguientes
                  circunstancias:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Con tu consentimiento explícito</li>
                  <li>Para cumplir con obligaciones legales</li>
                  <li>Con proveedores de servicios que nos ayudan a operar el sitio</li>
                  <li>En caso de fusión, adquisición o venta de activos</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Seguridad de los Datos</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información
                  personal contra acceso no autorizado, alteración, divulgación o destrucción.
                </p>
                <p>
                  Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro,
                  por lo que no podemos garantizar la seguridad absoluta.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Tus Derechos</h2>
              <div className="text-muted-foreground space-y-4">
                <p>Tienes derecho a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acceder a tu información personal</li>
                  <li>Rectificar datos inexactos o incompletos</li>
                  <li>Solicitar la eliminación de tus datos</li>
                  <li>Oponerte al procesamiento de tus datos</li>
                  <li>Solicitar la portabilidad de tus datos</li>
                  <li>Retirar tu consentimiento en cualquier momento</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Contacto</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Si tienes preguntas sobre esta Política de Privacidad o sobre el tratamiento de tus datos personales,
                  puedes contactarnos en:
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

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Cambios en esta Política</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cambios
                  significativos publicando la nueva política en nuestro sitio web y actualizando la fecha de "última
                  actualización".
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
