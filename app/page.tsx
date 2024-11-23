import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Skills from "@/components/sections/Skills"
import Experience from "@/components/sections/Experience"
import Projects from "@/components/sections/Projects"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/Footer"
import ThemeToggle from "@/components/ThemeToggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ThemeToggle className="fixed top-4 right-4 z-50" />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}