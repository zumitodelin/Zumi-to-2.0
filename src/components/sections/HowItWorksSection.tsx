'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BarChart3, TestTube, Handshake } from 'lucide-react';

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      icon: BarChart3,
      title: 'Análisis de viabilidad del espacio',
      description: 'Evaluamos el potencial de tu ubicación para asegurar un mínimo de 15 zumos diarios. Análisis completo y sin compromiso',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: TestTube,
      title: 'Prueba piloto del espacio',
      description: 'Instalamos la máquina durante 2-3 meses para medir la demanda real. Si alcanzamos el umbral mínimo, formalizamos el contrato de alquiler a largo plazo',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Handshake,
      title: 'Explotación con contrato de alquiler',
      description: 'Te ofrecemos alquiler fijo o variable según los resultados de la prueba piloto y tus preferencias. Tú decides el modelo que mejor se adapte a tu negocio',
      color: 'from-primary to-orange-600',
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
      id="como-funciona"
      className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white"
      ref={ref}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            En 3 sencillos pasos, tu espacio empieza a generar ingresos
          </p>
        </motion.div>

        {/* Timeline - Desktop (Horizontal) */}
        <div className="hidden lg:block relative">
          {/* Línea conectora */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-orange-200" />

          <div className="grid grid-cols-3 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Icono */}
                  <div className="flex flex-col items-center mb-6">
                    <motion.div
                      className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-lg relative z-10`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon size={32} />
                    </motion.div>
                  </div>

                  {/* Contenido */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Timeline - Mobile (Vertical) */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex gap-4"
              >
                {/* Línea conectora vertical */}
                {index < steps.length - 1 && (
                  <div className="absolute left-10 top-20 w-0.5 h-full bg-gradient-to-b from-gray-300 to-transparent" />
                )}

                {/* Icono */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-lg relative z-10`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon size={28} />
                  </motion.div>
                </div>

                {/* Contenido */}
                <div className="flex-1 bg-white rounded-xl p-5 shadow-md">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={() => scrollToSection('#contacto')}
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ¿Tu espacio es ideal? Consúltanos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
