'use client'
import { useState } from 'react'

export default function Footer() {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })

  return (
    <footer id="contact" className="mt-12 bg-white border border-cardBorder rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-heading text-lg mb-3">Contact Us</h4>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input className="w-full border border-cardBorder rounded-md p-2 text-sm" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input className="w-full border border-cardBorder rounded-md p-2 text-sm" placeholder="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
            <input className="w-full border border-cardBorder rounded-md p-2 text-sm" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <textarea className="w-full border border-cardBorder rounded-md p-2 text-sm" placeholder="Message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <div>
              <button className="px-4 py-2 bg-primary text-white rounded-md">Send Message</button>
            </div>
          </form>
        </div>

        <div>
          <h4 className="font-heading text-lg mb-3">Company</h4>
          <div className="text-sm text-gray-700 space-y-2">
            <div>Shagun Chem</div>
            <div>1113 Ghanshyam Enclave, Laljipada, Kandivali West, Mumbai - 400067</div>
            <div>Email: Shagunchem30@gmail.com</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
