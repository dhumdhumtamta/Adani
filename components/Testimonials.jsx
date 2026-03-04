'use client'
import { motion } from 'framer-motion'

const quotes = [
  {
    quote: 'Shagun Chem has been a dependable partner for solvent supply with consistent quality and on-time deliveries.'
  },
  {
    quote: 'Competitive pricing and a highly responsive team for industrial solvents. Strongly recommended for reliable solvent sourcing.'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="mt-12 relative overflow-hidden rounded-lg">
      <div className="text-center mb-6">
        <h3 className="font-heading text-xl">What Our Clients Say</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quotes.map((q, i) => (
          <motion.blockquote key={i} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white border border-cardBorder rounded-lg p-6 text-sm">
            <p className="text-gray-700">“{q.quote}”</p>
          </motion.blockquote>
        ))}
      </div>
    </section>
  )
}
