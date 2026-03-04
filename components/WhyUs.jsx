'use client'
import Image from 'next/image'
import { Sparkles, Users, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  {
    title: 'Direct Manufacturer Relations',
    desc: 'Eliminating intermediaries for the best pricing and traceable sourcing.',
    icon: Sparkles,
    img: '/crystal-kwok-mhUsz2ezlXQ-unsplash.jpg'
  },
  {
    title: 'Expert Technical Team',
    desc: 'Technical support to resolve queries for seamless operations.',
    icon: Users,
    img: '/hans-reniers-lQGJCMY5qcM-unsplash.jpg'
  },
  {
    title: 'Global Readiness',
    desc: 'Reliable solvent supply with ready inventory and global delivery support.',
    icon: Globe,
    img: '/box holder.png'
  }
]

export default function WhyUs() {
  return (
    <section id="why" className="mt-12">
      <div className="text-center mb-6">
        <h3 className="font-heading text-xl">Why Choose Shagun Chem</h3>
        <p className="text-sm text-gray-600">Focused on reliability, quality, and operational excellence.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((it) => {
          const Icon = it.icon
          return (
            <motion.div key={it.title} whileHover={{ y: -6 }} className="relative bg-white border border-cardBorder rounded-lg overflow-hidden">
              <div className="relative h-28 w-full">
                <Image src={it.img} alt={it.title} fill className="object-cover opacity-80" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-md">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <div className="font-medium">{it.title}</div>
                </div>
                <p className="mt-3 text-sm text-gray-600">{it.desc}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
