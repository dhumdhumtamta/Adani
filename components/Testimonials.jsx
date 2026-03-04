'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const quotes = [
  {
    quote: 'Shagun Chem has been a dependable partner — perfect deliveries and consistent quality.',
    name: 'Procurement Lead, Global Co.'
  },
  {
    quote: 'Competitive pricing and an outstanding supply-chain team. Highly recommended for industrial sourcing.',
    name: 'Operations Manager, ResinWorks'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="mt-12 relative overflow-hidden rounded-lg">
      <div className="absolute left-0 top-0 h-full w-1/3 -z-10">
        <Image src="/national-cancer-institute-MOj06jBit0s-unsplash.jpg" alt="decor" fill className="object-cover opacity-10" />
      </div>

      <div className="text-center mb-6">
        <h3 className="font-heading text-xl">What Our Clients Say</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quotes.map((q, i) => (
          <motion.blockquote key={i} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white border border-cardBorder rounded-lg p-6 text-sm">
            <p className="text-gray-700">“{q.quote}”</p>
            <div className="mt-4 text-xs font-medium text-gray-600">— {q.name}</div>
          </motion.blockquote>
        ))}
      </div>
    </section>
  )
}
