import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

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

