import Hero from '../components/Hero'
import Vision from '../components/Vision'
import WhyUs from '../components/WhyUs'
import Legacy from '../components/Legacy'
import Industries from '../components/Industries'
import Products from '../components/Products'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
      <Hero />
      <Vision />
      <WhyUs />
      <Legacy />
      <Industries />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  )
}
