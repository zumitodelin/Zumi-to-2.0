'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  PiggyBank,
  Gift,
  Handshake,
  TrendingUp,
  Calculator,
  ChevronDown,
} from 'lucide-react';

const WhyZumitoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [locationType, setLocationType] = useState('oficina');
  const [traffic, setTraffic] = useState(200);
  const [estimatedIncome, setEstimatedIncome] = useState({ min: 0, max: 0 });

  const benefits = [
    {
      icon: PiggyBank,
      title: 'Monetiza espacios infrautilizados',
      description:
        'Ese rincón vacío puede generar entre 150-500€ mensuales sin esfuerzo',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Gift,
      title: 'Mejora tu oferta de servicios',
      description:
        'Ofrece un beneficio adicional a clientes o empleados sin coste adicional',
      gradient: 'from-pink-400 to-red-500',
    },
    {
      icon: Handshake,
      title: 'Cero preocupaciones',
      description:
        'Gestión integral: mantenimiento, stock, limpieza e incidencias incluidas',
      gradient: 'from-blue-400 to-indigo-500',
    },
    {
      icon: TrendingUp,
      title: 'Flexibilidad total',
      description:
        'Elige entre alquiler fijo o porcentaje de ventas según tus preferencias',
      gradient: 'from-green-400 to-teal-500',
    },
  ];

  const locationTypes = [
    { value: 'oficina', label: 'Oficina', multiplier: 1.2 },
    { value: 'gimnasio', label: 'Gimnasio', multiplier: 1.5 },
    { value: 'universidad', label: 'Universidad', multiplier: 1.3 },
    { value: 'centro-comercial', label: 'Centro Comercial', multiplier: 1.8 },
    { value: 'hospital', label: 'Hospital', multiplier: 1.4 },
    { value: 'hotel', label: 'Hotel', multiplier: 1.3 },
    { value: 'coliving', label: 'Coliving', multiplier: 1.4 },
    { value: 'otro', label: 'Otro', multiplier: 1.0 },
  ];

  useEffect(() => {
    const selectedLocation = locationTypes.find(
      (loc) => loc.value === locationType
    );
    const multiplier = selectedLocation?.multiplier || 1;

    // Fórmula: estimación de demanda basada en tráfico y tipo de ubicación
    // Tasa de conversión base: 8-12% del tráfico compra un vaso
    // Ajustada por el multiplicador del tipo de ubicación
    const conversionRateBase = 0.08; // 8% base
    const conversionRateAdjusted = conversionRateBase * multiplier;
    
    // Demanda estimada: vasos vendidos por día
    const dailyDemand = traffic * conversionRateAdjusted;
    
    // Ingresos mensuales: demanda diaria * 0.4€/vaso * 25 días
    const monthlyIncome = dailyDemand * 0.25 * 25;
    
    // Rango de estimación: ±12% para considerar variabilidad (rango total del 24%)
    const minIncome = Math.round(monthlyIncome * 0.88);
    const maxIncome = Math.round(monthlyIncome * 1.12);

    setEstimatedIncome({ min: minIncome, max: maxIncome });
  }, [locationType, traffic]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="ventajas"
      className="py-16 lg:py-24 bg-white"
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
            ¿Por qué elegir Zumi-to?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Más que una máquina de zumo, una oportunidad de negocio sin riesgos
          </p>
        </motion.div>

        {/* Beneficios */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
                whileHover={{ y: -8 }}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Calculadora de ingresos */}
        <motion.div
          id="calculadora"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-orange-100/30 rounded-2xl p-8 lg:p-12 shadow-xl border border-primary/10"
        >
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <Calculator className="text-primary" size={40} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Calcula tus ingresos potenciales
            </h3>
            <p className="text-gray-600">
              Descubre cuánto podrías ganar con una máquina Zumi-to
            </p>
          </div>

          <div className="space-y-6">
            {/* Selector de tipo de ubicación */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Tipo de ubicación
              </label>
              {/* Dropdown para móviles */}
              <div className="relative sm:hidden">
                <select
                  value={locationType}
                  onChange={(e) => setLocationType(e.target.value)}
                  className="w-full px-4 py-3 pr-10 rounded-lg font-medium bg-white text-gray-700 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none cursor-pointer"
                >
                  {locationTypes.map((loc) => (
                    <option key={loc.value} value={loc.value}>
                      {loc.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={20}
                />
              </div>
              {/* Botones para tablet/desktop */}
              <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {locationTypes.map((loc) => (
                  <button
                    key={loc.value}
                    onClick={() => setLocationType(loc.value)}
                    className={`px-4 py-3 rounded-lg font-medium transition-all ${
                      locationType === loc.value
                        ? 'bg-primary text-white shadow-lg scale-105'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {loc.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider de tráfico */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Tráfico estimado: <span className="text-primary">{traffic}</span>{' '}
                personas/día
              </label>
              <input
                type="range"
                min="50"
                max="1000"
                step="50"
                value={traffic}
                onChange={(e) => setTraffic(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>50</span>
                <span>1000</span>
              </div>
            </div>

            {/* Resultado */}
            <motion.div
              key={`${estimatedIncome.min}-${estimatedIncome.max}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <p className="text-gray-600 mb-2">Podrías generar entre</p>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                €{estimatedIncome.min} - €{estimatedIncome.max}
              </div>
              <p className="text-gray-600">mensuales</p>
              <p className="text-xs text-gray-500 mt-4">
                * Estimación basada en datos reales de otras ubicaciones similares
              </p>
            </motion.div>

            {/* CTA */}
            <motion.button
              onClick={() => scrollToSection('#contacto')}
              className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Solicita instalación gratuita
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyZumitoSection;
