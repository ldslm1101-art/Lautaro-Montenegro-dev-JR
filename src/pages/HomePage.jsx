import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Database, Brain, Mail, Phone, Send, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    {
      icon: <Database className="w-12 h-12 text-blue-600" />,
      title: 'Desarrollo Backend',
      description: 'Experiencia en Node.js y Python para construir aplicaciones robustas del lado del servidor. Competente en diseño y gestión de bases de datos SQL y NoSQL.',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs']
    },
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: 'Desarrollo Frontend',
      description: 'Creación de interfaces de usuario interactivas y responsivas con React y JavaScript moderno. Enfoque en código limpio y experiencias de usuario excepcionales.',
      technologies: ['React', 'JavaScript', 'TailwindCSS', 'Diseño Responsivo', 'UI/UX']
    },
    {
      icon: <Brain className="w-12 h-12 text-blue-600" />,
      title: 'IA y Aprendizaje Automático',
      description: 'Conocimiento especializado en codificación profesional asistida por IA y aplicaciones de aprendizaje automático. Aprovechando herramientas de IA para mejorar los flujos de trabajo de desarrollo.',
      technologies: ['Integración de IA', 'Machine Learning', 'Optimización de Código', 'Automatización']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Lautaro Montenegro - Portafolio de Desarrollador de Software</title>
        <meta name="description" content="Portafolio de Lautaro Montenegro, estudiante de 3er año de Ingeniería en Sistemas especializado en desarrollo Backend, Frontend y asistido por IA." />
      </Helmet>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                Desarrollador de Software
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                  Lautaro Montenegro
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Construyendo soluciones innovadoras con tecnologías modernas. 
                Especializado en desarrollo Backend, Frontend y asistido por IA.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => scrollToSection('contact')}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg shadow-lg"
                >
                  Contactar
                  <Send className="ml-2 w-5 h-5" />
                </Button>
                <a 
                  href="https://www.linkedin.com/in/lautaro-montenegro-34b5422b6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg shadow-lg"
                  >
                    LinkedIn
                    <Linkedin className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://horizons-cdn.hostinger.com/07a00b27-b4a6-4772-9b84-dc5f6919241f/dd12883ccc2077b8e910c1bd419b9d49.png"
                  alt="Lautaro Montenegro"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Texto completo restaurado */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Acerca de Mí
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-12"></div>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-center md:text-left">
              <p>
                Soy un <span className="font-semibold text-blue-600">estudiante de 3er año de Ingeniería en Sistemas</span> con 
                una profunda pasión por el desarrollo de software y las tecnologías de vanguardia. Mi viaje en la tecnología ha sido 
                impulsado por la curiosidad y el compromiso con el aprendizaje continuo.
              </p>
              <p>
                Mi experiencia técnica abarca el <span className="font-semibold text-blue-600">Desarrollo Backend</span>, 
                donde construyo aplicaciones del lado del servidor robustas y escalables utilizando Node.js y Python. Soy competente en 
                el diseño y gestión de bases de datos, asegurando la integridad de los datos y un rendimiento óptimo.
              </p>
              <p>
                En el <span className="font-semibold text-blue-600">Frontend</span>, creo interfaces de usuario responsivas e intuitivas 
                con React y frameworks modernos de JavaScript. Creo en escribir código limpio y mantenible 
                que ofrezca experiencias de usuario excepcionales.
              </p>
              <p>
                Lo que me distingue es mi especialización en <span className="font-semibold text-blue-600">codificación 
                profesional asistida por IA</span>. Aprovecho la inteligencia artificial y las herramientas de aprendizaje automático para mejorar 
                los flujos de trabajo de desarrollo, automatizar tareas repetitivas y construir aplicaciones más inteligentes.
              </p>
              <p className="font-semibold text-gray-900">
                Mi objetivo profesional es convertirme en un desarrollador full-stack versátil que cierre la brecha entre las tecnologías 
                innovadoras de IA y las soluciones de software prácticas. Estoy entusiasmado con el futuro de la tecnología y 
                comprometido a estar a la vanguardia de esta evolución.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Habilidades Técnicas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <div className="mb-6 flex justify-center">{skill.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{skill.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">¿Hablamos?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-12"></div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="mailto:lds.lm1101@gmail.com" className="flex items-center space-x-4 p-6 bg-blue-50 rounded-2xl border border-blue-100 hover:bg-blue-600 hover:text-white transition-all group shadow-sm">
              <Mail className="w-8 h-8 text-blue-600 group-hover:text-white" />
              <div className="text-left">
                <p className="text-xs uppercase font-bold text-blue-600/70 group-hover:text-white/70">Email</p>
                <p className="text-lg font-bold">lds.lm1101@gmail.com</p>
              </div>
            </a>
            <a href="tel:2615441401" className="flex items-center space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-gray-900 hover:text-white transition-all group shadow-sm">
              <Phone className="w-8 h-8 text-gray-600 group-hover:text-white" />
              <div className="text-left">
                <p className="text-xs uppercase font-bold text-gray-400 group-hover:text-white/70">Teléfono</p>
                <p className="text-lg font-bold">2615441401</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes blob { 0% { transform: translate(0,0) scale(1); } 33% { transform: translate(30px,-50px) scale(1.1); } 66% { transform: translate(-20px,20px) scale(0.9); } 100% { transform: translate(0,0) scale(1); } }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </>
  );
};

export default HomePage;