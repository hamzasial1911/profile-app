"use client"

import { motion } from "framer-motion"
import { Code2, Database, Server, Terminal } from "lucide-react"
import Image from "next/image"

export default function About() {
  const skills = [
    { 
      icon: Terminal, 
      title: "Python", 
      description: "Django, FastAPI, Flask, Pyramid" 
    },
    { 
      icon: Server, 
      title: "Backend", 
      description: "RESTful APIs, GraphQL, Microservices" 
    },
    { 
      icon: Database, 
      title: "Database", 
      description: "PostgreSQL, MongoDB, Redis" 
    },
    { 
      icon: Code2, 
      title: "DevOps", 
      description: "Docker, AWS, CI/CD" 
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I am a Senior Python Developer with over 5 years of experience in building
                scalable web applications and RESTful APIs. My expertise lies in Python
                frameworks like Django, FastAPI, Flask, and Pyramid.
              </p>
              <p>
                Throughout my career, I've worked on various projects ranging from
                high-traffic e-commerce platforms to complex data processing systems.
                I'm passionate about writing clean, maintainable code and implementing
                best practices in software development.
              </p>
              <p>
                When I'm not coding, I enjoy contributing to open-source projects and
                staying up-to-date with the latest developments in technology.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&auto=format&fit=crop&q=60"
              alt="Coding Environment"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <skill.icon className="h-8 w-8 mb-4 text-primary" />
              <h3 className="font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}