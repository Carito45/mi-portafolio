export default function Contact() {
  return (
    <section id="contacto" className="py-20 px-6 bg-gray-900 flex flex-col items-center justify-center relative">
      
      {/* Contenedor Principal */}
      <div className="max-w-3xl mx-auto w-full text-center z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          ¿Digitalizamos tu<span className="text-emerald-400">negocio?</span>
        </h2>
        
        <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
          Si buscas optimizar los procesos de tu empresa, mejorar la seguridad de tus datos o crear una plataforma que atraiga más clientes, estoy aquí para ayudarte. Envíame un mensaje y diseñemos la solución tecnológica que tu negocio necesita.
        </p>

        {/* Botones de Contacto */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <a 
            href="mailto:devcarolinaperez@gmail.com" 
            className="w-full sm:w-auto px-8 py-3 bg-emerald-500 text-gray-900 font-bold rounded-lg hover:bg-emerald-400 transition-all duration-300 hover:-translate-y-1 shadow-[0_0_20px_rgba(16,185,129,0.2)] flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            Envíame un correo
          </a>
          
          <a 
            href="https://www.linkedin.com/feed/" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3 bg-gray-800 text-white font-bold rounded-lg border border-gray-700 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            LinkedIn
          </a>
        </div>
      </div>

      {/* Footer (Pie de página) */}
      <div className="absolute bottom-0 w-full border-t border-gray-800 py-6 text-center">
        <p className="text-gray-500 text-sm font-mono">
          Diseñado y construido por <span className="text-emerald-400">Carito</span> © {new Date().getFullYear()}
        </p>
      </div>

    </section>
  )
}