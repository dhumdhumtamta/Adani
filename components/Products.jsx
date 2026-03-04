'use client'
import { motion } from 'framer-motion'

const products = [
  'Maleic Anhydride',
  'Melamie',
  'Citric Acid',
  'PVC Resin',
  'N-Propanol',
  'Caustic Potash Flakes',
  'Potassium Carbonate (Powder)',
  'Fluorobenzene',
  'Acetone',
  'N Hexane',
  'D.M.F.',
  'E.C.F.',
  'Acetic Acid',
  'Ethyl Acetate',
  'Methanol',
  'Caustic Soda Flakes',
  'Toluene',
  'Chloroform',
  'T.H.F.',
  'I.P.A.',
  'Ammonium Chloride',
  'E.D.C.',
  'M.D.C.',
  'Soda Ash',
  'Formic Acid',
  'Hydrogen Hydride',
  'Benzene',
  'Hyflo Supercel',
  'M.I.B.K.',
  'M.E.K.'
]

export default function Products({ showFullCatalog = false }) {
  const featuredProducts = products.slice(0, 6)

  if (showFullCatalog) {
    return (
      <section id="products" className="mt-12">
        <div className="mb-6">
          <h3 className="font-heading text-xl">Products Catalogue</h3>
          <p className="text-sm text-gray-600">Complete list of solvents and chemical products we supply.</p>
        </div>

        <div className="bg-white border border-cardBorder rounded-md overflow-hidden">
          <div className="grid grid-cols-[120px_1fr] bg-gray-50 border-b border-cardBorder p-4 text-sm font-semibold text-primary">
            <div>SR. NO.</div>
            <div>PRODUCT NAME</div>
          </div>

          {products.map((product, index) => (
            <div key={product} className="grid grid-cols-[120px_1fr] p-4 text-sm border-b border-cardBorder last:border-b-0">
              <div>{index + 1}</div>
              <div>{product}</div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section id="products" className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-heading text-xl">Featured Products</h3>
          <p className="text-sm text-gray-600">Key chemicals we supply reliably.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {featuredProducts.map((p) => (
          <motion.div key={p} whileHover={{ scale: 1.02 }} className="bg-white border border-cardBorder rounded-md p-4 text-sm">
            <div className="font-medium text-primary">{p}</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6">
        <a href="/products" className="inline-block px-4 py-2 border border-primary text-primary rounded-md">View Full Catalogue</a>
      </div>
    </section>
  )
}
