'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: '¿Cuánto espacio necesito?',
      answer:
        'Nuestras máquinas tienen un tamaño compacto de aproximadamente 1m² (130cm x 100cm). Solo necesitas un espacio pequeño con acceso a electricidad. Es ideal para rincones, halls de entrada, zonas comunes o cualquier área de paso con buen tráfico de personas.',
    },
    {
      question: '¿Qué tipo de contrato ofrecen?',
      answer:
        'Ofrecemos contratos flexibles adaptados a tus necesidades. Puedes elegir entre: (1) Alquiler fijo mensual garantizado, independientemente de las ventas, o (2) Modelo de reparto de beneficios basado en un porcentaje de las ventas. Los contratos tienen una duración mínima de 12 meses, renovables automáticamente, y puedes cancelar con 30 días de preaviso.',
    },
    {
      question: '¿Quién se encarga del mantenimiento?',
      answer:
        'Nosotros nos encargamos absolutamente de todo. Nuestro equipo realiza visitas periódicas (mínimo semanales) para: reponer naranjas frescas, limpiar y desinfectar la máquina, realizar mantenimiento preventivo, gestionar cualquier incidencia técnica, y vaciar la recaudación. Tú no tienes que hacer nada, solo disfrutar de los ingresos.',
    },
    {
      question: '¿Cuánto puedo ganar?',
      answer:
        'Los ingresos varían según el tipo de ubicación y el tráfico de personas. En promedio, nuestros clientes ganan entre 150€ y 500€ mensuales. Las ubicaciones premium (centros comerciales, hospitales grandes, universidades) pueden superar los 800€/mes. Utiliza nuestra calculadora arriba para obtener una estimación personalizada para tu espacio.',
    },
    {
      question: '¿Hay costes ocultos o inversión inicial?',
      answer:
        'Absolutamente ninguno. La instalación es 100% gratuita. No pagas por la máquina, ni por la instalación, ni por el mantenimiento, ni por las reparaciones. Tampoco hay costes de electricidad significativos (consumo muy bajo, similar a una nevera pequeña). Todo está incluido en nuestro servicio. Tú solo aportas el espacio y nosotros nos ocupamos del resto.',
    },
    {
      question: '¿Qué pasa si la máquina se estropea?',
      answer:
        'Nuestro equipo técnico responde en menos de 24 horas ante cualquier incidencia. Realizamos reparaciones in situ siempre que sea posible. Si la reparación requiere más tiempo, sustituimos temporalmente la máquina para que no pierdas ingresos. Todo el mantenimiento correctivo y preventivo está incluido sin coste adicional para ti.',
    },
    {
      question: '¿Puedo cancelar el servicio?',
      answer:
        'Sí, nuestros contratos son flexibles. Después del período mínimo de 12 meses, puedes cancelar el servicio con un preaviso de 30 días. Nosotros retiramos la máquina sin coste alguno para ti. No hay penalizaciones ni cargos por cancelación. Queremos que estés 100% satisfecho con nuestro servicio.',
    },
    {
      question: '¿Necesito electricidad o agua especial?',
      answer:
        'Solo necesitas una toma de corriente estándar (220V). No requiere instalación de agua corriente, ya que las máquinas funcionan de forma autónoma. El consumo eléctrico es mínimo (similar al de una nevera pequeña), aproximadamente 1€/día. No se necesita ninguna instalación especial ni obra, la máquina es plug-and-play.',
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="faq"
      className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50"
      ref={ref}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Resolvemos tus dudas sobre Zumi-to
          </p>
        </motion.div>

        {/* Acordeón de FAQs */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white rounded-xl p-5 lg:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 text-left group"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
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
                      <p className="text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-100">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6 text-lg">
            ¿Tienes más preguntas? Estamos aquí para ayudarte
          </p>
          <motion.button
            onClick={() => scrollToSection('#contacto')}
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ¿Más dudas? Hablamos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
