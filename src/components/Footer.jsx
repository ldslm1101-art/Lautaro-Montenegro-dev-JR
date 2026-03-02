import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              LM
            </span>
            <p className="mt-2 text-gray-400">Construyendo el futuro a través del código.</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/ldslm1101-art" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            {/* AQUÍ ESTÁ EL CAMBIO PARA TU LINKEDIN */}
            <a 
              href="https://www.linkedin.com/in/lautaro-montenegro-34b5422b6" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:lds.lm1101@gmail.com" 
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Lautaro Montenegro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;