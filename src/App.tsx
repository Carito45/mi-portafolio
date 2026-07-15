import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <main className="bg-gray-900 text-gray-100 font-sans selection:bg-emerald-500 selection:text-white">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

export default App