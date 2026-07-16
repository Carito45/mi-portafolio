export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Círculo de luz difuminado para el fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="text-center max-w-4xl z-10">
        <p className="text-emerald-400 font-mono tracking-widest mb-4 uppercase text-sm">
          ¡Hola! Mi nombre es
        </p>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight flex flex-col gap-2">
          <span>Carito.</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 pb-2">
            Desarrolladora Multiplataforma.
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed font-light max-w-3xl mx-auto">
          <strong className="text-gray-200 font-medium">Técnica Universitaria en Diseño y Desarrollo de Aplicaciones Multiplataforma.</strong><br className="hidden md:block" />
          Construyendo soluciones web escalables, seguras y orientadas al negocio. Especializada en crear experiencias fluidas desde interfaces dinámicas hasta arquitecturas robustas en el servidor.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#proyectos" 
            className="w-full sm:w-auto px-8 py-3 bg-emerald-500 text-gray-900 font-bold rounded-lg hover:bg-emerald-400 transition-all duration-300 hover:-translate-y-1 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            Ver mis proyectos
          </a>
          <a 
            href="#contacto" 
            className="w-full sm:w-auto px-8 py-3 bg-transparent text-emerald-400 font-bold rounded-lg border border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 hover:-translate-y-1"
          >
          Contactarme
          </a>
        </div>
      </div>
    </section>
  )
}