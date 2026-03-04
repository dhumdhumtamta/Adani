'use client'
import { motion } from 'framer-motion'

const products = ['Maleic Anhydride', 'Citric Acid', 'PVC Resin', 'Acetone', 'Methanol', 'Toluene']

export default function Products() {
  return (
    <section id="products" className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-heading text-xl">Featured Products</h3>
          <p className="text-sm text-gray-600">Key chemicals we supply reliably.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {products.map((p) => (
          <motion.div key={p} whileHover={{ scale: 1.02 }} className="bg-white border border-cardBorder rounded-md p-4 text-sm">
            <div className="font-medium text-primary">{p}</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6">
        <a href="#" className="inline-block px-4 py-2 border border-primary text-primary rounded-md">View Full Catalog</a>
      </div>
    </section>
  )
}
