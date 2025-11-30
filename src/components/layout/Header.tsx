'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efecto para manejar el scroll cuando se navega desde otra página con hash
  useEffect(() => {
    if (isHomePage && typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        // Esperar a que el DOM esté completamente cargado
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [isHomePage, pathname]);

  const menuItems = [
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Ventajas', href: '#ventajas' },
    { label: 'Ubicaciones', href: '#ubicaciones' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (isHomePage) {
      // Si estamos en la página principal, hacer scroll a la sección
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si estamos en otra página, navegar a la página principal con el ancla
      // El scroll se manejará automáticamente por el useEffect cuando la página cargue
      router.push(`/${href}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.a
            href={isHomePage ? "#inicio" : "/#inicio"}
            className="cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('#inicio');
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/Logo.png"
              alt="Zumi-to"
              className="h-10 lg:h-12 w-auto"
            />
          </motion.a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={isHomePage ? item.href : `/${item.href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.href);
                  }}
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button - Desktop */}
          <motion.a
            href={isHomePage ? "#contacto" : "/#contacto"}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('#contacto');
            }}
            className="hidden lg:block bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg font-semibold transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar instalación
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <ul className="py-4 space-y-3">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={isHomePage ? item.href : `/${item.href}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.href);
                      }}
                      className="block py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href={isHomePage ? "#contacto" : "/#contacto"}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation('#contacto');
                    }}
                    className="block w-full bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                  >
                    Solicitar instalación
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
