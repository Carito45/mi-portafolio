export default function About() {
  return (
    <section id="sobre-mi" className="py-20 px-6 bg-gray-900 border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Columna de Texto */}
        <div className="w-full md:w-2/3 order-2 md:order-1">
          
          {/* TÍTULO: Centrado en móvil (justify-center) y a la izquierda en PC (md:justify-start) */}
          <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Sobre mí</h2>
            <div className="h-[2px] bg-emerald-500 flex-grow max-w-xs opacity-50"></div>
          </div>
          
          {/* PÁRRAFOS: Centrados en móvil (text-center) y a la izquierda en PC (md:text-left) */}
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light text-center md:text-left">
            <p>
              Soy <span className="text-emerald-400 font-medium">Técnica Universitaria en Diseño y Desarrollo de Aplicaciones Multiplataforma</span>. Diseño y desarrollo sistemas digitales para empresas de salud y servicios profesionales, con el objetivo de transformar sus procesos manuales en plataformas operativas eficientes y seguras.
            </p>
            <p>
              Mi enfoque técnico combina una sólida base académica con la responsabilidad y madurez que requiere el trabajo independiente. Construyo soluciones integrales a medida: desde el diseño de bases de datos y arquitecturas backend robustas, hasta interfaces de usuario intuitivas en React.
            </p>
            <p>
              Actualmente me encuentro expandiendo mis habilidades en dos áreas estratégicas:
            </p>
            
            {/* LISTA: Centrada en móvil, pero manteniendo los puntos (bullets) ordenados */}
            <ul className="list-disc list-inside md:list-outside space-y-2 text-gray-300 md:ml-6 inline-block text-left">
              <li>
                <strong className="text-white">Ciberseguridad (Google):</strong> Cursando el Certificado Profesional mediante beca académica, para garantizar que el software que desarrollo cumpla con los estándares necesarios para proteger datos sensibles.
              </li>
              <li>
                <strong className="text-white">Formación Pedagógica:</strong> Para traducir la complejidad técnica a un lenguaje humano y claro, asegurando que mis clientes tengan el control total de sus herramientas.
              </li>
              </ul>
            <p>
              Elijo trabajar como consultora tecnológica freelance para ofrecer un servicio personalizado, directo y sin intermediarios, enfocando mi energía 100% en resolver los problemas reales de tu negocio.
            </p>
          </div>
        </div>

        {/* Columna de Imagen */}
        <div className="w-full md:w-1/3 order-1 md:order-2 flex justify-center">
          <div className="relative group">
            {/* Cuadro decorativo de fondo */}
            <div className="absolute inset-0 border-2 border-emerald-500 rounded-2xl translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            
            {/* Contenedor de la foto */}
            <div className="relative bg-gray-800 w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden z-10 border border-gray-700/50 shadow-2xl">
              <img src="/foto_perfil.jpeg" alt="Carolina Pérez" className="w-full h-full object-cover md:grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}