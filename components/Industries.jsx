'use client'
import { Briefcase, Droplet, PaintBucket, Box } from 'lucide-react'
import { motion } from 'framer-motion'

const cards = [
  { title: 'Resins', icon: Briefcase },
  { title: 'Paints', icon: PaintBucket },
  { title: 'Ink Industries', icon: Droplet },
  { title: 'Pharmaceuticals', icon: Box }
]

export default function Industries() {
  return (
    <section id="industries" className="mt-12">
      <div className="text-center mb-6">
        <h3 className="font-heading text-xl">Industries We Serve</h3>
        <p className="text-sm text-gray-600">Trusted supply across multiple verticals.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cards.map((c) => {
          const Icon = c.icon
          return (
            <motion.div whileHover={{ y: -6 }} key={c.title} className="bg-white border border-cardBorder rounded-lg p-6 flex flex-col items-center gap-3 text-center">
              <div className="p-3 bg-accent/10 rounded-md">
                <Icon size={28} className="text-accent" />
              </div>
              <div className="font-medium">{c.title}</div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
