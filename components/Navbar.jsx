'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#about', label: 'About' },
    { href: '#why', label: 'Why Us' },
    { href: '#legacy', label: 'Legacy' },
    { href: '#products', label: 'Products' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-cardBorder">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 h-16">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Shagun Chem" width={48} height={48} className="rounded-md object-contain" />
          <span className="font-heading text-lg">Shagun Chem</span>
        </div>

        <nav className="hidden md:flex gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-primary hover:opacity-80">{l.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:inline-block px-4 py-2 bg-accent text-white rounded-md text-sm">Contact Us</a>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
            <Menu size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-cardBorder">
          <div className="flex flex-col p-4 gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2">{l.label}</a>
            ))}
            <a href="#contact" className="py-2 text-accent">Contact Us</a>
          </div>
        </div>
      )}
    </header>
  )
}
