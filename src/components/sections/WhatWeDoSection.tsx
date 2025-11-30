'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Droplet,
  Settings,
  Wallet,
  TrendingUp,
  Building2,
  Dumbbell,
  GraduationCap,
  ShoppingBag,
  Hospital,
  Hotel,
  Fuel,
  Store,
} from 'lucide-react';

const WhatWeDoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const valueProps = [
    {
      icon: Droplet,
      title: 'Zumo recién exprimido al instante',
      description:
        'Tecnología que exprime naranjas naturales en el momento, garantizando frescura y sabor inigualables.',
      color: 'bg-orange-100',
      iconColor: 'text-primary',
    },
    {
      icon: Settings,
      title: 'Gestión 100% integral',
      description:
        'Nos encargamos de todo: mantenimiento, reposición de naranjas, limpieza y soporte técnico.',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: Wallet,
      title: 'Sin inversión inicial',
      description:
        'Instalación completamente gratuita. Tú solo aportas el espacio, nosotros el resto.',
      color: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      icon: TrendingUp,
      title: 'Ingresos pasivos',
      description:
        'Cobra alquiler mensual o porcentaje de ventas sin hacer absolutamente nada.',
      color: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
  ];

  const idealLocations = [
    {
      icon: Building2,
      title: 'Oficinas corporativas',
      description: 'Beneficio para empleados, genera ingresos del espacio',
    },
    {
      icon: Dumbbell,
      title: 'Gimnasios y centros deportivos',
      description: 'Producto saludable ideal post-entreno',
    },
    {
      icon: GraduationCap,
      title: 'Universidades y colegios',
      description: 'Alternativa saludable para estudiantes',
    },
    {
      icon: ShoppingBag,
      title: 'Centros comerciales',
      description: 'Alto tráfico, consumo impulsivo',
    },
    {
      icon: Hospital,
      title: 'Hospitales y clínicas',
      description: 'Alimentación saludable para visitantes',
    },
    {
      icon: Hotel,
      title: 'Hoteles y apartamentos',
      description: 'Servicio diferencial para huéspedes',
    },
    {
      icon: Fuel,
      title: 'Estaciones de servicio',
      description: 'Parada rápida y saludable',
    },
    {
      icon: Store,
      title: 'Supermercados y fruterías',
      description: 'Complemento perfecto al negocio',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="que-hacemos" className="py-16 lg:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Propuesta de Valor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            ¿Qué hacemos?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Convertimos espacios infrautilizados en fuentes de ingresos con
            nuestras máquinas de zumo natural
          </p>
        </motion.div>

        {/* Tarjetas de propuesta de valor */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20"
        >
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
                whileHover={{ y: -5 }}
              >
                <div
                  className={`${prop.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`${prop.iconColor}`} size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {prop.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {prop.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Ubicaciones ideales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
          id="ubicaciones"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ubicaciones ideales
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Tienes alguno de estos espacios? Puede ser tu oportunidad
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {idealLocations.map((location, index) => {
            const Icon = location.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/30"
                whileHover={{ scale: 1.03 }}
              >
                <Icon
                  className="text-primary mb-3 group-hover:scale-110 transition-transform"
                  size={32}
                />
                <h3 className="text-base font-bold text-gray-800 mb-1">
                  {location.title}
                </h3>
                <p className="text-sm text-gray-600">{location.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
