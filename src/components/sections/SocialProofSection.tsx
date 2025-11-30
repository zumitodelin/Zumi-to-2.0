'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Coffee, Users, TrendingUp } from 'lucide-react';

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
}

const Counter = ({ from, to, duration = 2 }: CounterProps) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const SocialProofSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    {
      icon: Coffee,
      number: 52,
      suffix: '',
      label: 'Máquinas instaladas en España',
      gradient: 'from-orange-400 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
    },
    {
      icon: Users,
      number: 45,
      suffix: '+',
      label: 'Clientes satisfechos',
      gradient: 'from-blue-400 to-indigo-500',
      bgGradient: 'from-blue-50 to-indigo-50',
    },
    {
      icon: TrendingUp,
      number: 125000,
      suffix: '',
      label: 'Zumos servidos este año',
      gradient: 'from-green-400 to-teal-500',
      bgGradient: 'from-green-50 to-teal-50',
      format: true,
    },
  ];

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toString();
  };

  return (
    <section
      className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white"
      ref={ref}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Confían en nosotros
          </h2>
          <p className="text-lg text-gray-600">
            Números que hablan por sí solos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div
                  className={`bg-gradient-to-br ${stat.bgGradient} rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden`}
                >
                  {/* Icono de fondo decorativo */}
                  <div className="absolute -right-8 -top-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Icon size={120} className="text-gray-400" />
                  </div>

                  {/* Contenido */}
                  <div className="relative z-10">
                    <motion.div
                      className={`inline-flex p-4 bg-gradient-to-br ${stat.gradient} rounded-xl mb-6 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="text-white" size={32} />
                    </motion.div>

                    <div className="text-5xl lg:text-6xl font-bold mb-3">
                      <span
                        className={`bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                      >
                        {stat.format ? (
                          <>
                            {formatNumber(stat.number)}
                            {stat.suffix}
                          </>
                        ) : (
                          <>
                            <Counter from={0} to={stat.number} duration={2.5} />
                            {stat.suffix}
                          </>
                        )}
                      </span>
                    </div>

                    <p className="text-gray-700 font-medium text-lg">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Elemento adicional de confianza */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 italic">
            "Transformando espacios en toda España, un zumo a la vez"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
