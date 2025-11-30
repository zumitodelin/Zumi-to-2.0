'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, CheckCircle, XCircle } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    location: '',
    traffic: '',
    message: '',
    privacy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const businessTypes = [
    'Oficina',
    'Gimnasio',
    'Universidad',
    'Centro comercial',
    'Hospital',
    'Hotel',
    'Estación de servicio',
    'Supermercado',
    'Otro',
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const email = process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL || '';

      if (!email) {
        throw new Error('Email de FormSubmit no configurado');
      }

      // FormSubmit requiere FormData en lugar de JSON
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('businessType', formData.businessType);
      formDataToSend.append('location', formData.location);
      formDataToSend.append('traffic', formData.traffic);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('privacy', formData.privacy ? 'Sí' : 'No');
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_template', 'box');
      formDataToSend.append('_subject', 'Nuevo contacto desde Zumi-to');

      // Usar el endpoint estándar de FormSubmit (sin /ajax/)
      // Este endpoint funciona mejor y es más confiable
      const response = await fetch(`https://formsubmit.co/${email}`, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json',
        },
      });

      // FormSubmit puede devolver HTML (redirección) o JSON si se solicita
      // Con Accept: application/json, debería devolver JSON
      let responseData;
      const contentType = response.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        try {
          responseData = await response.json();
        } catch (jsonError) {
          console.error('Error al parsear JSON:', jsonError);
          // Si falla el parseo pero la respuesta es OK, considerar éxito
          if (response.ok) {
            responseData = { success: true };
          } else {
            throw new Error('Error al procesar respuesta del servidor');
          }
        }
      } else {
        // Si devuelve HTML (redirección), verificar que sea exitoso
        const textResponse = await response.text();
        if (response.ok) {
          responseData = { success: true };
        } else {
          console.error('Respuesta HTML de FormSubmit:', textResponse.substring(0, 200));
          throw new Error('Error en el envío del formulario');
        }
      }

      // Verificar si la respuesta es exitosa
      if (response.ok && (responseData?.success === true || response.status === 200)) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          businessType: '',
          location: '',
          traffic: '',
          message: '',
          privacy: false,
        });
      } else {
        console.error('Error en respuesta de FormSubmit:', {
          status: response.status,
          statusText: response.statusText,
          data: responseData,
        });
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contacto"
      className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white"
      ref={ref}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Cuéntanos sobre tu espacio y te contactaremos en menos de 24 horas
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 lg:p-10 shadow-xl border border-gray-100"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Nombre completo */}
              <div className="md:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Nombre completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  placeholder="Tu nombre completo"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Teléfono <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  placeholder="+34 XXX XXX XXX"
                />
              </div>

              {/* Tipo de negocio */}
              <div>
                <label
                  htmlFor="businessType"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Tipo de negocio <span className="text-red-500">*</span>
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  required
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none bg-white"
                >
                  <option value="">Selecciona una opción</option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Ubicación */}
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Ubicación/Ciudad
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  placeholder="Madrid, Barcelona..."
                />
              </div>

              {/* Tráfico estimado */}
              <div className="md:col-span-2">
                <label
                  htmlFor="traffic"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Tráfico estimado personas/día (opcional)
                </label>
                <input
                  type="number"
                  id="traffic"
                  name="traffic"
                  value={formData.traffic}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  placeholder="Ej: 200"
                />
              </div>

              {/* Mensaje adicional */}
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Mensaje adicional (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Cuéntanos más sobre tu espacio o necesidades..."
                />
              </div>

              {/* Checkbox privacidad */}
              <div className="md:col-span-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="privacy"
                    required
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary cursor-pointer"
                  />
                  <span className="text-sm text-gray-600">
                    Acepto la{' '}
                    <a href="#" className="text-primary hover:underline">
                      política de privacidad
                    </a>{' '}
                    y el tratamiento de mis datos{' '}
                    <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>
            </div>

            {/* Botón submit */}
            <div className="mt-8">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark disabled:bg-gray-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Solicitar contacto
                  </>
                )}
              </motion.button>
            </div>

            {/* Mensajes de estado */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-800"
              >
                <CheckCircle size={24} className="flex-shrink-0" />
                <p>
                  ¡Mensaje enviado con éxito! Te contactaremos en menos de 24
                  horas.
                </p>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-800"
              >
                <XCircle size={24} className="flex-shrink-0" />
                <p>
                  Hubo un error al enviar el mensaje. Por favor, inténtalo de
                  nuevo o contáctanos por WhatsApp.
                </p>
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
