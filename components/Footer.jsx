'use client'
import { useState } from 'react'

export default function Footer() {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' })
        setForm({ name: '', company: '', email: '', message: '' })
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send message' })
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer id="contact" className="mt-12 bg-white border border-cardBorder rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-heading text-lg mb-3">Contact Us</h4>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <input className="w-full border border-cardBorder rounded-md p-2 text-sm" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input className="w-full border border-cardBorder rounded-md p-2 text-sm" placeholder="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
            <input className="w-full border border-cardBorder rounded-md p-2 text-sm" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <textarea className="w-full border border-cardBorder rounded-md p-2 text-sm" placeholder="Message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            {status && (
              <div className={`text-sm p-2 rounded-md ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {status.message}
              </div>
            )}
            <div>
              <button type="submit" disabled={loading} className="px-4 py-2 bg-primary text-white rounded-md disabled:opacity-50">
                {loading ? 'Sending...' : 'Send Message'}
              </button>
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
