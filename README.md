# 🍊 Zumi-to - Landing Page

Landing page completa para Zumi-to, empresa de instalación y gestión integral de máquinas expendedoras de zumo de naranja recién exprimido.

## 🚀 Tecnologías utilizadas

- **Next.js 15** - Framework de React para producción
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de CSS utility-first
- **Framer Motion** - Librería de animaciones para React
- **Lucide React** - Iconos modernos y ligeros
- **Formspree** - Servicio de gestión de formularios

## 🎨 Características

- ✅ Diseño responsive (mobile-first)
- ✅ Animaciones suaves y modernas
- ✅ Navegación sticky con menú hamburguesa en móvil
- ✅ Hero section con CTAs destacados
- ✅ Calculadora interactiva de ingresos potenciales
- ✅ Sección FAQ con acordeón
- ✅ Formulario de contacto integrado con Formspree
- ✅ Botón flotante de WhatsApp
- ✅ Optimización SEO básica
- ✅ Smooth scroll entre secciones
- ✅ Números animados en social proof

## 📋 Requisitos previos

- Node.js 18.x o superior
- npm, yarn o pnpm

## 🛠️ Instalación

1. **Clonar el repositorio**

```bash
git clone <tu-repositorio>
cd zumito
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**

Copia el archivo `.env.example` a `.env.local`:

```bash
cp .env.example .env.local
```

Edita `.env.local` y configura las variables necesarias:

```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/tu_form_id
NEXT_PUBLIC_WHATSAPP_NUMBER=34XXXXXXXXX
```

### Obtener endpoint de Formspree:

1. Ve a [https://formspree.io/](https://formspree.io/)
2. Crea una cuenta gratuita
3. Crea un nuevo formulario
4. Copia el endpoint que te proporcionan (formato: `https://formspree.io/f/xxxxxxxxxxx`)
5. Pégalo en tu archivo `.env.local`

4. **Ejecutar en desarrollo**

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Scripts disponibles

```bash
npm run dev      # Ejecuta el servidor de desarrollo
npm run build    # Crea el build de producción
npm start        # Ejecuta el servidor de producción
npm run lint     # Ejecuta el linter
```

## 📁 Estructura del proyecto

```
zumito/
├── src/
│   ├── app/
│   │   ├── favicon.ico          # Favicon del sitio
│   │   ├── globals.css          # Estilos globales
│   │   ├── layout.tsx           # Layout principal
│   │   └── page.tsx             # Página principal
│   └── components/
│       ├── layout/
│       │   ├── Header.tsx       # Navegación sticky
│       │   ├── Footer.tsx       # Pie de página
│       │   └── WhatsAppButton.tsx # Botón flotante de WhatsApp
│       └── sections/
│           ├── HeroSection.tsx           # Hero con CTAs
│           ├── WhatWeDoSection.tsx       # Propuesta de valor + ubicaciones
│           ├── HowItWorksSection.tsx     # Timeline de proceso
│           ├── WhyZumitoSection.tsx      # Beneficios + calculadora
│           ├── SocialProofSection.tsx    # Números animados
│           ├── FAQSection.tsx            # Preguntas frecuentes
│           └── ContactSection.tsx        # Formulario de contacto
├── public/                      # Archivos estáticos
├── .env.example                 # Ejemplo de variables de entorno
├── tailwind.config.ts          # Configuración de Tailwind
├── tsconfig.json               # Configuración de TypeScript
└── package.json                # Dependencias del proyecto
```

## 🎨 Colores corporativos

Los colores de la marca están configurados en `tailwind.config.ts`:

- **Naranja principal**: `#FF6600` - `primary`
- **Naranja secundario**: `#FFAE4D` - `primary-light`
- **Negro**: `#1A1A1A` - Textos principales
- **Gris medio**: `#666666` - Textos secundarios
- **Gris claro**: `#F5F5F5` - Fondos alternos

## 🔧 Personalización

### Modificar textos y contenido

Los textos están directamente en cada componente en `src/components/sections/`. Edita los archivos correspondientes para personalizar el contenido.

### Cambiar número de WhatsApp

Edita los archivos:
- `src/components/layout/WhatsAppButton.tsx` (línea 6)
- `src/components/sections/HeroSection.tsx` (línea 14)

O configura la variable de entorno `NEXT_PUBLIC_WHATSAPP_NUMBER`.

### Modificar calculadora de ingresos

La lógica de la calculadora está en `src/components/sections/WhyZumitoSection.tsx`. Ajusta los multiplicadores y la fórmula según tus datos reales.

### Actualizar FAQ

Edita el array `faqs` en `src/components/sections/FAQSection.tsx`.

### Cambiar placeholder de imágenes

Las imágenes usan placeholders de `placehold.co`. Reemplázalas con tus imágenes reales en la carpeta `public/` y actualiza las rutas en los componentes.

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 Mobile (< 768px)
- 📱 Tablet (768px - 1024px)
- 💻 Desktop (> 1024px)

## 🚀 Despliegue

### Vercel (Recomendado)

1. Sube tu código a GitHub
2. Importa el proyecto en [Vercel](https://vercel.com)
3. Configura las variables de entorno en el dashboard de Vercel
4. Despliega

### Otros servicios

El proyecto es compatible con cualquier servicio que soporte Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📝 Notas importantes

- **Formspree**: En el plan gratuito, estás limitado a 50 envíos/mes. Considera actualizar si necesitas más.
- **Imágenes**: Reemplaza los placeholders con imágenes reales para producción.
- **Números de contacto**: Actualiza todos los placeholders (teléfono, email, dirección) con datos reales.
- **Social media**: Actualiza los enlaces de redes sociales en el Footer.
- **SEO**: Personaliza los meta tags en `src/app/layout.tsx` según tus necesidades.
- **Favicon**: Reemplaza el favicon por defecto con tu logo.

## 🐛 Resolución de problemas

### El formulario no se envía

- Verifica que `NEXT_PUBLIC_FORMSPREE_ENDPOINT` esté correctamente configurado
- Comprueba la consola del navegador para errores
- Asegúrate de que el endpoint de Formspree esté activo

### Las animaciones no funcionan

- Verifica que `framer-motion` esté instalado correctamente
- Comprueba que estás usando componentes de cliente (`'use client'`)

### Errores de compilación de Tailwind

- Ejecuta `npm run build` para ver errores específicos
- Verifica la configuración en `tailwind.config.ts`

## 📄 Licencia

Este proyecto ha sido desarrollado para Zumi-to.

## 🤝 Soporte

Para cualquier duda o problema, contacta con el equipo de desarrollo.

---

Desarrollado con ❤️ para Zumi-to
