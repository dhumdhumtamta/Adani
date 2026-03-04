"use client"
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="about" className="mt-8 relative">
      <div className="rounded-2xl overflow-hidden bg-background p-8 relative">
          <div className="absolute inset-0 z-0 bg-center bg-cover" style={{ backgroundImage: "url('/hero.jpg')", opacity: 0.3 }} />
          <div className="max-w-4xl mx-auto text-center py-16 relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-heading text-3xl md:text-4xl text-primary mb-4">
            Your Trusted Partner in Chemical Solutions.
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-sm md:text-base text-primary/90 max-w-3xl mx-auto">
            Delivering excellence, reliability, and premium solvents to global industries since 1990.
          </motion.p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/products" className="px-5 py-2 bg-white text-primary rounded-md font-medium border border-cardBorder shadow-sm">Our Products</a>
            <a href="#contact" className="px-5 py-2 border border-primary text-primary rounded-md">Partner With Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}
