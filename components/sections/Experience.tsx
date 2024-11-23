"use client"

import { motion } from "framer-motion"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Python Developer",
      company: "Turing",
      period: "2023 - Present",
      description: "Leading backend development with Django and FastAPI, architecting scalable solutions."
    },
    {
      title: "Python Developer",
      company: "Devsinc",
      period: "2021 - 2023",
      description: "Developed and maintained Python applications using Django, Flask, and Pyramid frameworks."
    }
  ]

  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-l-2 border-primary pl-4 space-y-2 cursor-pointer hover:border-secondary transition-colors"
              whileHover={{ x: 10 }}
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-muted-foreground">{exp.company} | {exp.period}</p>
              <p>{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}