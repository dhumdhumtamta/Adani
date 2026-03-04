'use client'
import { motion } from 'framer-motion'

export default function Vision() {
  return (
    <section id="vision" className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="font-heading text-2xl md:text-3xl">
        A commitment to excellence that sets us apart.
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-sm text-gray-700">
        For over 35 years, Shagun Chem has built a reputation on trust, quality, and timely delivery. Our global partnerships and rigorous quality standards ensure that clients receive premium chemicals and solvents tailored to their industry's needs.
      </motion.div>
    </section>
  )
}
