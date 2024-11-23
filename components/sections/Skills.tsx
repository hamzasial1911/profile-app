"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export default function Skills() {
  const skills = [
    {
      category: "Languages",
      items: ["Python", "JavaScript", "SQL", "TypeScript"]
    },
    {
      category: "Frameworks",
      items: ["Django", "FastAPI", "Flask", "Pyramid", "Next.js"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
    },
    {
      category: "Tools",
      items: ["Docker", "Git", "AWS", "Linux", "CI/CD"]
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <h2 className="text-3xl font-bold">Skills & Technologies</h2>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="p-6 h-full bg-card hover:bg-accent/5 transition-colors">
                <h3 className="text-lg font-semibold mb-4 text-primary">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-foreground/80">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}