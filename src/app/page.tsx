import Hero from "./components/Hero.tsx"
import Skills from "./components/Skills.tsx"
import Education from "./components/Education.tsx"
import Projects from "./components/Projects.tsx"
import Contact from "./components/Contact.tsx"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </main>
  )
}

