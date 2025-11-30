'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const whatsappNumber = '34672144355';
    const message = encodeURIComponent(
      '¡Hola! Me gustaría saber más sobre Zumi-to.'
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden"
    >
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100/30 -z-10" />

      {/* Patrón decorativo */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-light rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contenido de texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Transforma espacios vacíos en{' '}
              <span className="text-primary">ingresos</span> con zumo recién
              exprimido
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Instalamos y gestionamos máquinas expendedoras de zumo de naranja
              natural. Tú solo pones el espacio, nosotros hacemos el resto.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {/* CTA Primario */}
              <motion.button
                onClick={() => scrollToSection('#calculadora')}
                className="group bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Calcula tus ingresos
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>

              {/* CTA Secundario */}
              <motion.button
                onClick={handleWhatsAppClick}
                className="group bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle size={20} />
                WhatsApp
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Imagen de la máquina */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto lg:max-w-md aspect-[3/4] lg:aspect-[3/4] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/Maquina.png"
                alt="Máquina expendedora de zumo Zumi-to"
                className="w-full h-full object-contain"
              />

              {/* Badge flotante */}
              <motion.div
                className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.4 }}
              >
                <div className="text-sm font-semibold text-gray-700">
                  🍊 100% Natural
                </div>
              </motion.div>
            </div>

            {/* Elemento decorativo */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-light rounded-full blur-3xl opacity-20 -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.6,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
