'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface LegalSection {
  title: string;
  content: React.ReactNode;
}

const LegalPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const legalSections: LegalSection[] = [
    {
      title: '1. Aviso Legal',
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">1.1. Datos Identificativos</h3>
            <p className="mb-2">
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa a los usuarios de los datos identificativos de la empresa titular de este sitio web:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Denominación social:</strong> Zumi-to</li>
              <li><strong>Domicilio social:</strong> Barcelona, España</li>
              <li><strong>Teléfono:</strong> +34 672 14 43 55</li>
              <li><strong>Email:</strong> contacto@zumi-to.es</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">1.2. Objeto y Condiciones Generales de Uso</h3>
            <p className="mb-2">
              El presente aviso legal regula el uso del sitio web <strong>www.zumi-to.es</strong> (en adelante, el "Sitio Web"), del cual es titular Zumi-to (en adelante, el "Titular").
            </p>
            <p className="mb-2">
              La navegación por el sitio web de Zumi-to atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal, que pueden sufrir modificaciones.
            </p>
            <p className="mb-2">
              El usuario se obliga a hacer un uso correcto del sitio web de conformidad con las leyes, la buena fe, el orden público, los usos del tráfico y el presente Aviso Legal. El usuario responderá frente a Zumi-to o frente a terceros, de cualesquiera daños y perjuicios que pudieran causarse como consecuencia del incumplimiento de dicha obligación.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">1.3. Propiedad Intelectual e Industrial</h3>
            <p className="mb-2">
              Todos los contenidos del sitio web, entendiendo por estos a modo meramente enunciativo, los textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a Zumi-to, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso del sitio web.
            </p>
            <p className="mb-2">
              Todas las marcas, nombres comerciales o signos distintivos de cualquier clase contenidos en el sitio web son propiedad de Zumi-to o de sus legítimos propietarios, sin que pueda entenderse que el uso o acceso al sitio web atribuya al usuario derecho alguno sobre los mismos.
            </p>
            <p className="mb-2">
              Queda prohibida la reproducción, distribución y comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Zumi-to.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">1.4. Exclusión de Garantías y Responsabilidad</h3>
            <p className="mb-2">
              El contenido de este sitio web es de carácter general y tiene una finalidad meramente informativa, sin que se garantice plenamente el acceso a todos los contenidos, ni su exhaustividad, corrección, vigencia o actualidad, ni su idoneidad o utilidad para un objetivo específico.
            </p>
            <p className="mb-2">
              Zumi-to excluye, hasta donde permite el ordenamiento jurídico, cualquier responsabilidad por los daños y perjuicios de toda naturaleza derivados de:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>La imposibilidad de acceso al sitio web o la falta de veracidad, exactitud, exhaustividad y/o actualización de los contenidos, así como la existencia de vicios y defectos de toda clase de los contenidos transmitidos, difundidos, almacenados, puestos a disposición o a los que se haya accedido a través del sitio web o de los servicios que se ofrecen.</li>
              <li>La presencia de virus u otros elementos en los contenidos que puedan producir alteraciones en el sistema informático, documentos electrónicos o ficheros de los usuarios.</li>
              <li>El incumplimiento de las leyes, la buena fe, el orden público, los usos del tráfico y el presente aviso legal como consecuencia del uso incorrecto del sitio web.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">1.5. Enlaces</h3>
            <p className="mb-2">
              En el caso de que en el sitio web se dispusiesen enlaces o hipervínculos hacía otros sitios de Internet, Zumi-to no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso Zumi-to asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno, ni garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud, veracidad, validez y constitucionalidad de cualquier material o información contenida en ninguno de dichos hipervínculos u otros sitios de Internet.
            </p>
            <p className="mb-2">
              Igualmente, la inclusión de estas conexiones externas no implicará ningún tipo de asociación, fusión o participación con las entidades conectadas.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">1.6. Modificaciones</h3>
            <p className="mb-2">
              Zumi-to se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">1.7. Legislación Aplicable y Jurisdicción</h3>
            <p className="mb-2">
              La relación entre Zumi-to y el usuario se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Barcelona, salvo que la ley aplicable disponga otra cosa.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: '2. Política de Privacidad',
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">2.1. Responsable del Tratamiento</h3>
            <p className="mb-2">
              En cumplimiento de lo establecido en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le informamos de que:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Responsable:</strong> Zumi-to</li>
              <li><strong>Domicilio:</strong> Barcelona, España</li>
              <li><strong>Email:</strong> contacto@zumi-to.es</li>
              <li><strong>Teléfono:</strong> +34 672 14 43 55</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">2.2. Datos Personales que Recopilamos</h3>
            <p className="mb-2">
              Zumi-to puede recopilar y tratar los siguientes tipos de datos personales:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Datos de identificación:</strong> nombre, apellidos, DNI/NIF</li>
              <li><strong>Datos de contacto:</strong> dirección de correo electrónico, número de teléfono, dirección postal</li>
              <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia</li>
              <li><strong>Datos comerciales:</strong> información sobre productos o servicios solicitados</li>
            </ul>
            <p className="mb-2 mt-4">
              Los datos personales se obtienen directamente del usuario a través de formularios de contacto, solicitudes de información, o mediante el uso de cookies y tecnologías similares durante la navegación.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">2.3. Finalidad del Tratamiento</h3>
            <p className="mb-2">
              Los datos personales recopilados serán tratados con las siguientes finalidades:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Gestión de consultas y solicitudes:</strong> responder a las consultas, solicitudes de información o peticiones realizadas por el usuario a través de los formularios de contacto o correo electrónico.</li>
              <li><strong>Prestación de servicios:</strong> gestionar la relación contractual, facilitar la información solicitada y prestar los servicios contratados.</li>
              <li><strong>Comunicaciones comerciales:</strong> enviar información comercial sobre productos y servicios similares a los contratados, siempre que el usuario no se haya opuesto a ello.</li>
              <li><strong>Mejora del sitio web:</strong> analizar el uso del sitio web para mejorar su funcionamiento y experiencia del usuario.</li>
              <li><strong>Cumplimiento de obligaciones legales:</strong> cumplir con las obligaciones legales aplicables.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">2.4. Base Jurídica del Tratamiento</h3>
            <p className="mb-2">
              El tratamiento de sus datos personales se basa en:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Consentimiento del interesado:</strong> para el envío de comunicaciones comerciales y el uso de cookies no esenciales.</li>
              <li><strong>Ejecución de contrato:</strong> para la gestión de la relación contractual y prestación de servicios solicitados.</li>
              <li><strong>Interés legítimo:</strong> para la mejora del sitio web y análisis de uso.</li>
              <li><strong>Cumplimiento de obligación legal:</strong> para cumplir con las obligaciones legales aplicables.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">2.5. Conservación de los Datos</h3>
            <p className="mb-2">
              Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad y del tratamiento de los datos, así como durante los plazos establecidos en la legislación aplicable.
            </p>
            <p className="mb-2">
              En particular:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Los datos de contacto y consultas se conservarán durante el tiempo necesario para atender la solicitud y, posteriormente, durante los plazos legales de prescripción.</li>
              <li>Los datos contractuales se conservarán durante la vigencia del contrato y posteriormente durante los plazos legales establecidos.</li>
              <li>Los datos para comunicaciones comerciales se conservarán hasta que el interesado solicite su supresión o se oponga al tratamiento.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">2.6. Destinatarios de los Datos</h3>
            <p className="mb-2">
              Sus datos personales no serán comunicados a terceros, salvo:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Cuando sea necesario para la prestación del servicio solicitado (proveedores de servicios que actúan como encargados de tratamiento).</li>
              <li>Cuando exista una obligación legal de comunicarlos a autoridades públicas o judiciales.</li>
              <li>Cuando el usuario haya dado su consentimiento expreso.</li>
            </ul>
            <p className="mb-2 mt-4">
              Zumi-to puede contratar con terceros proveedores de servicios que actúan como encargados de tratamiento, garantizando en todo momento que cumplen con la normativa de protección de datos y que tienen las medidas de seguridad adecuadas.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">2.7. Transferencias Internacionales</h3>
            <p className="mb-2">
              En caso de que se realicen transferencias internacionales de datos personales fuera del Espacio Económico Europeo, Zumi-to garantizará que se realizan con las garantías adecuadas y conforme a la normativa aplicable, mediante la utilización de cláusulas contractuales tipo aprobadas por la Comisión Europea u otras garantías reconocidas.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">2.8. Derechos del Interesado</h3>
            <p className="mb-2">
              De conformidad con el RGPD y la LOPDGDD, el usuario tiene derecho a:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Derecho de acceso:</strong> obtener información sobre sus datos personales que están siendo tratados.</li>
              <li><strong>Derecho de rectificación:</strong> solicitar la corrección de datos inexactos o incompletos.</li>
              <li><strong>Derecho de supresión ("derecho al olvido"):</strong> solicitar la eliminación de sus datos personales cuando ya no sean necesarios o cuando retire su consentimiento.</li>
              <li><strong>Derecho de limitación del tratamiento:</strong> solicitar la limitación del tratamiento de sus datos en determinadas circunstancias.</li>
              <li><strong>Derecho a la portabilidad:</strong> recibir sus datos personales en un formato estructurado y de uso común.</li>
              <li><strong>Derecho de oposición:</strong> oponerse al tratamiento de sus datos personales, especialmente para fines de marketing directo.</li>
              <li><strong>Derecho a retirar el consentimiento:</strong> retirar el consentimiento prestado en cualquier momento, sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.</li>
            </ul>
            <p className="mb-2 mt-4">
              Para ejercer estos derechos, el usuario puede dirigirse a Zumi-to mediante escrito dirigido a la dirección de correo electrónico <strong>contacto@zumi-to.es</strong>, indicando en el asunto "Ejercicio de Derechos RGPD" y adjuntando copia de su DNI o documento identificativo equivalente.
            </p>
            <p className="mb-2">
              Asimismo, el usuario tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si considera que el tratamiento de sus datos personales no se ajusta a la normativa vigente, a través de la página web <strong>www.aepd.es</strong>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">2.9. Medidas de Seguridad</h3>
            <p className="mb-2">
              Zumi-to ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">2.10. Menores de Edad</h3>
            <p className="mb-2">
              El sitio web de Zumi-to no está dirigido a menores de 18 años. No recopilamos intencionalmente información personal de menores de edad. Si un padre, madre o tutor tiene conocimiento de que su hijo menor de edad nos ha proporcionado información personal sin su consentimiento, debe contactarnos inmediatamente.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">2.11. Modificaciones de la Política de Privacidad</h3>
            <p className="mb-2">
              Zumi-to se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a novedades legislativas, jurisprudenciales o de interpretación de la Agencia Española de Protección de Datos. Estas modificaciones serán publicadas con la debida antelación a su puesta en vigor.
            </p>
            <p className="mb-2">
              Se recomienda al usuario que revise periódicamente esta política para estar informado de cómo protegemos sus datos personales.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: '3. Política de Cookies',
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">3.1. ¿Qué son las Cookies?</h3>
            <p className="mb-2">
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet, smartphone) cuando visita un sitio web. Las cookies permiten que el sitio web recuerde sus acciones y preferencias durante un período de tiempo, por lo que no tiene que volver a configurarlas cada vez que regrese al sitio o navegue de una página a otra.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">3.2. Tipos de Cookies que Utilizamos</h3>
            <p className="mb-4">
              En el sitio web de Zumi-to utilizamos los siguientes tipos de cookies:
            </p>

            <div className="mb-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">3.2.1. Cookies Técnicas (Necesarias)</h4>
              <p className="mb-2">
                Son cookies esenciales para el funcionamiento del sitio web. Permiten la navegación y el uso de las funciones básicas del sitio. Sin estas cookies, el sitio web no puede funcionar correctamente.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Finalidad:</strong> Garantizar el funcionamiento básico del sitio web</li>
                <li><strong>Duración:</strong> Sesión o persistentes</li>
                <li><strong>Base jurídica:</strong> Interés legítimo</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">3.2.2. Cookies de Análisis</h4>
              <p className="mb-2">
                Estas cookies nos permiten conocer cómo los usuarios interactúan con nuestro sitio web, recopilando información de forma anónima sobre las páginas visitadas, el tiempo de permanencia, etc. Esta información nos ayuda a mejorar el funcionamiento del sitio web.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Finalidad:</strong> Análisis estadístico del uso del sitio web</li>
                <li><strong>Duración:</strong> Persistentes (hasta 2 años)</li>
                <li><strong>Base jurídica:</strong> Consentimiento del usuario</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">3.2.3. Cookies de Funcionalidad</h4>
              <p className="mb-2">
                Estas cookies permiten que el sitio web recuerde las elecciones que hace el usuario (como su idioma o región) y proporcionan características mejoradas y más personales.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Finalidad:</strong> Recordar preferencias del usuario</li>
                <li><strong>Duración:</strong> Persistentes (hasta 1 año)</li>
                <li><strong>Base jurídica:</strong> Consentimiento del usuario</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">3.2.4. Cookies de Marketing/Publicidad</h4>
              <p className="mb-2">
                Estas cookies se utilizan para hacer un seguimiento de los visitantes a través de diferentes sitios web con la intención de mostrar anuncios relevantes y atractivos para el usuario individual.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Finalidad:</strong> Personalización de anuncios y medición de eficacia</li>
                <li><strong>Duración:</strong> Persistentes (hasta 2 años)</li>
                <li><strong>Base jurídica:</strong> Consentimiento del usuario</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">3.3. Cookies de Terceros</h3>
            <p className="mb-2">
              Algunas cookies son colocadas por servicios de terceros que aparecen en nuestras páginas. Zumi-to no controla la configuración de estas cookies, por lo que le recomendamos que consulte los sitios web de estos terceros para obtener más información sobre sus cookies y cómo gestionarlas:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Google Analytics:</strong> Para análisis de tráfico web. Puede obtener más información en: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy</a></li>
              <li><strong>Redes sociales:</strong> Si el sitio web incluye botones de redes sociales, estas plataformas pueden instalar cookies. Consulte las políticas de privacidad de cada red social.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">3.4. Gestión de Cookies</h3>
            <p className="mb-2">
              El usuario puede configurar su navegador para aceptar o rechazar cookies, o para que el navegador le avise cuando un servidor quiera guardar una cookie. A continuación, le proporcionamos enlaces a las instrucciones de los principales navegadores:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Google Chrome:</strong> <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://support.google.com/chrome/answer/95647</a></li>
              <li><strong>Mozilla Firefox:</strong> <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias</a></li>
              <li><strong>Microsoft Edge:</strong> <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09</a></li>
              <li><strong>Safari:</strong> <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://support.apple.com/es-es/guide/safari/sfri11471/mac</a></li>
            </ul>
            <p className="mb-2 mt-4">
              Tenga en cuenta que si desactiva las cookies, es posible que algunas funcionalidades del sitio web no funcionen correctamente.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">3.5. Consentimiento</h3>
            <p className="mb-2">
              Al utilizar nuestro sitio web y hacer clic en "Aceptar" en el banner de cookies, usted consiente el uso de cookies de acuerdo con esta Política de Cookies. Puede retirar su consentimiento en cualquier momento modificando la configuración de cookies de su navegador o contactándonos a través de <strong>contacto@zumi-to.es</strong>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">3.6. Actualización de la Política de Cookies</h3>
            <p className="mb-2">
              Zumi-to puede modificar esta Política de Cookies en función de cambios legislativos, reglamentarios o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos. Por ello, se recomienda a los usuarios que visiten periódicamente esta página.
            </p>
            <p className="mb-2">
              Cuando se produzcan cambios significativos en esta Política de Cookies, se comunicará a los usuarios mediante un aviso en el sitio web o por correo electrónico.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">3.7. Más Información</h3>
            <p className="mb-2">
              Si desea más información sobre el uso de cookies, puede contactarnos en <strong>contacto@zumi-to.es</strong> o consultar la página web de la Agencia Española de Protección de Datos: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aepd.es</a>.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Aviso Legal, Privacidad y Cookies
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Información legal y de protección de datos de Zumi-to
          </p>
        </div>

        {/* Acordeón de secciones legales */}
        <div className="max-w-4xl mx-auto">
          {legalSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white rounded-xl p-5 lg:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 text-left group"
              >
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-primary transition-colors">
                    {section.title}
                  </h2>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      className={`${
                        openIndex === index ? 'text-primary' : 'text-gray-400'
                      }`}
                      size={24}
                    />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        {section.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Información de contacto */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Si tiene alguna pregunta sobre esta información legal, puede contactarnos:
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-600">
            <span>📧 contacto@zumi-to.es</span>
            <span className="hidden sm:inline">|</span>
            <span>📞 +34 672 14 43 55</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;

