"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, FileText, Mail } from "lucide-react"
import { MouseGradient } from "@/components/ui/mouse-gradient"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Hero() {
  const router = useRouter()

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const openResume = () => {
    router.push('/resume')
  }

  const profileAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        yoyo: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const glowAnimation = {
    hidden: { opacity: 0.5 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        yoyo: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <MouseGradient>
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full opacity-20"
          >
            <source src="https://cdn.pixabay.com/vimeo/328035647/purple-26096.mp4?width=1280&hash=e4f2d4a2e0f87e141f0bc57c86ad24a0e92a0e7c" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              className="text-center md:text-left space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <motion.h1
                  className="text-4xl md:text-6xl font-bold gradient-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Muhammad Hamza Sial
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Senior Python Developer
                </motion.p>
                <motion.p
                  className="text-lg text-muted-foreground max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Specializing in Django, FastAPI, Flask, and Pyramid frameworks
                </motion.p>
              </div>

              <motion.div
                className="flex flex-wrap justify-center md:justify-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="bg-accent hover:bg-accent/90"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Hire Me
                </Button>

                <Button 
                  size="lg" 
                  onClick={scrollToProjects}
                  className="bg-primary hover:bg-primary/90"
                >
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={openResume}
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </motion.div>
            </motion.div>

            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={glowAnimation}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-50 blur-xl"
              />
              <motion.div
                initial="hidden"
                animate="visible"
                variants={profileAnimation}
                className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-primary transform-gpu"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/portfolio.jpg"
                  alt="Muhammad Hamza Sial"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </MouseGradient>
  )
}