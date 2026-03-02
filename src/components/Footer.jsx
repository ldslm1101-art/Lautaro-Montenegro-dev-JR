import React from 'react';
import { Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Inicio', id: 'home' },
    { name: 'Acerca de', id: 'about' },
    { name: 'Habilidades', id: 'skills' },
    { name: 'Contacto', id: 'contact' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 border-t border-gray-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding Section */}
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Lautaro Montenegro
            </span>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Desarrollador de Software especializado en Backend, Frontend y desarrollo asistido por IA. 
              Construyendo soluciones innovadoras con tecnologías modernas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Enlaces Rápidos</span>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Contacto</span>
            <div className="space-y-3">
              <a
                href="mailto:lds.lm1101@gmail.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Mail size={18} />
                <span>lds.lm1101@gmail.com</span>
              </a>
              <a
                href="tel:2615441401"
                className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Phone size={18} />
                <span>2615441401</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Lautaro Montenegro. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;