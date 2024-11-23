"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-6 border-t bg-background"
    >
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {currentYear} Muhammad Hamza Sial. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground text-center md:text-right">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </motion.footer>
  )
}