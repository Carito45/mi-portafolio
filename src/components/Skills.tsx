export default function Skills() {
  // Agrupamos tus habilidades por categoría para mayor claridad
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Diseño Responsivo"]
    },
    {
      title: "Backend & Bases de Datos",
      skills: ["Node.js", "Express.js", "SQLite", "APIs REST", "JWT (Autenticación)", "Arquitectura MVC"]
    },
    {
      title: "Herramientas & Deployment",
      // Quitamos Postman y agregamos Render
      skills: ["Git", "GitHub", "Vercel", "Render", "Arquitectura Serverless"]
    }
  ];

  return (
    <section id="habilidades" className="py-20 px-6 min-h-screen flex items-center justify-center border-b border-gray-800 bg-gray-900/50">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Título de la sección */}
        <div className="flex items-center gap-4 mb-16 justify-center md:justify-start">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Habilidades Técnicas
          </h2>
          <div className="h-[2px] bg-emerald-500 flex-grow max-w-[100px] opacity-50 hidden md:block"></div>
        </div>

        {/* Grilla de Categorías */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-8 hover:border-emerald-500/30 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-gray-900 text-gray-300 text-sm font-medium rounded-lg border border-gray-700/50 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}