import Products from '../../components/Products'

export const metadata = {
  title: 'Products - Shagun Chem'
}

export default function ProductsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-20 pb-12">
      <Products showFullCatalog />
    </main>
  )
}
