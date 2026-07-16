import { useState, useEffect } from 'react';

// 1. Creamos un sub-componente inteligente para el Carrusel
const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Efecto para que pase automáticamente cada 3.5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer); // Limpieza del timer al desmontar
  }, [images.length]);

  return (
    <div className="h-64 sm:h-80 w-full relative overflow-hidden bg-gray-900/80 group flex items-center justify-center p-2">
      {/* Imágenes superpuestas con transición de opacidad */}
      {images.map((src, idx) => (
        <div 
          key={idx}
          className={`absolute inset-0 p-4 transition-opacity duration-1000 ease-in-out flex items-center justify-center ${
            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img 
            src={src} 
            alt={`Captura del proyecto ${idx + 1}`} 
            /* AQUÍ ESTÁ LA MAGIA: cambiamos object-cover por object-contain */
            className="max-w-full max-h-full object-contain rounded shadow-lg border border-gray-700/50" 
          />
        </div>
      ))}

      {/* Indicadores visuales (los puntitos abajo) */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 shadow-sm ${
              idx === currentIndex ? 'bg-emerald-400 w-6' : 'bg-white/50 w-2 hover:bg-white'
            }`}
            aria-label={`Ver imagen ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// 2. Mi componente principal de Proyectos
export default function Projects() {
  const projects = [
    {
      title: "Motor de E-commerce & Panel Admin",
      description: "Desarrollo Full Stack (PHP/MySQL) de tienda online. Implementé carrito de compras, registro seguro de usuarios y un panel administrativo para gestión de estadísticas y pedidos. Fuerte enfoque en ciberseguridad.",
      tech: ["PHP 8", "MySQL", "Seguridad Web", "Tailwind CSS"],
      github: "https://github.com/Carito45/tienda-ecommerce",
      demo: "", // Lo dejamos vacío porque no hay deploy
      images: [
        // Uso los nombres exactos de los archivos. ¡Asegúrate de que estén en la carpeta public!
        "/tienda1.png",
        "/tienda2.png",
        "/tienda3.png",
        "tienda4.png",
        "/tienda5.png",
      ]
    },
    {
      title: "Sistema IDO - Prototipo de Gestión Médica",
      description: "MVP (Producto Mínimo Viable) Full Stack diseñado como caso de estudio para la logística de internación domiciliaria. Desarrollé la lógica de negocio para vincular afiliados, prestadores y facturación, implementando arquitectura MVC y base de datos relacional.",
      tech: ["React", "Node.js", "Express", "SQLite", "JWT"],
      github: "https://github.com/Carito45/gestion-ido",
      demo: "https://gestion-ido.onrender.com",
      // Agregamos un array con las rutas de tus capturas
      images: ["/imagen1.png", "/imagen2.png", "/imagen3.png", "/imágen4.png"]
    },
    {
      title: "Landing Page Institucional",
      description: "SPA responsiva y de alta conversión para un estudio jurídico. Arquitectura Serverless para el procesamiento de leads, garantizando carga ultrarrápida y cero costos de mantenimiento backend.",
      tech: ["React", "Tailwind CSS", "FormSubmit", "Vercel"],
      github: "https://github.com/Carito45/estudio-jur-dico-versi-n1",
      demo: "https://estudio-jur-dico-versi-n1.vercel.app/",
      images: ["/estudio_juridico_1.png", "/estudio_juridico_2.png", "/estudio_juridico_3.png", "/estudio_juridico_4.png"] // Vacío por ahora, mostrará el placeholder
    }
  ];

  return (
    <section id="proyectos" className="py-20 px-6 min-h-screen flex flex-col justify-center border-b border-gray-800">
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Proyectos Destacados
          </h2>
          <div className="h-[2px] bg-emerald-500 flex-grow max-w-xs opacity-50"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800/40 border border-gray-700/50 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 group hover:-translate-y-1 flex flex-col">
              
              {/* Lógica condicional: Si hay imágenes, renderiza el Carrusel, si no, el Placeholder */}
              {project.images && project.images.length > 0 ? (
                <ImageCarousel images={project.images} />
              ) : (
                <div className="h-64 sm:h-80 bg-gray-900 relative overflow-hidden flex items-center justify-center border-b border-gray-700/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 group-hover:scale-110 transition-transform duration-500"></div>
                  <span className="text-gray-500 font-mono text-sm z-10">[Aquí irá la imagen de tu proyecto]</span>
                </div>
              )}
              
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-900 text-emerald-400 text-xs font-mono rounded-full border border-emerald-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Botones de enlaces */}
                <div className="flex items-center gap-6 mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
                  >
                    {/* Ícono de GitHub dibujado con SVG */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                    Código
                  </a>
                {/* RENDERIZADO CONDICIONAL: Solo aparece si 'project.demo' tiene contenido */}
                  {project.demo && (  
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-2 text-sm font-medium"
                  >
                    {/* Ícono de Enlace Externo */}
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    Demo en vivo
                  </a>
                  )}
                  
                  {/* Si no hay demo, ponemos un texto sutil para compensar el espacio */}
                  {!project.demo && (
                    <span className="text-gray-500 text-sm font-medium flex items-center gap-2">
                       <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      En desarrollo local
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}