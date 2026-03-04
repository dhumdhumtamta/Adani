'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip, YAxis, CartesianGrid } from 'recharts'

function AnimatedCounter({ label, end }) {
  const ref = useRef()
  const inView = useInView(ref, { once: true })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1200
    const startTime = performance.now()

    function step(now) {
      const t = Math.min((now - startTime) / duration, 1)
      const current = Math.floor(t * end)
      setValue(current)
      if (t < 1) requestAnimationFrame(step)
      else setValue(end)
    }

    requestAnimationFrame(step)
  }, [inView, end])

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl md:text-3xl font-heading text-primary">{value}{end >= 30 ? '+' : ''}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  )
}

function generateData() {
  const start = 1990
  const current = new Date().getFullYear()
  const years = []
  let value = 10
  for (let y = start; y <= current; y += 5) {
    value += Math.floor(Math.random() * 15) + 5
    years.push({ year: String(y), value })
  }
  years.push({ year: String(current), value: value + 20 })
  return years
}

export default function Legacy() {
  const data = generateData()

  return (
    <section id="legacy" className="mt-12">
      <div className="text-center mb-4">
        <h3 className="font-heading text-xl">Yearly Growth & Legacy</h3>
        <p className="text-sm text-gray-600">Sustained growth and trusted partnerships since 1990.</p>
      </div>

      <div className="bg-white border border-cardBorder rounded-lg p-6">
        <div style={{ width: '100%', height: 240 }}>
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="year" axisLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
              <YAxis hide />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#0A2540" strokeWidth={3} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <AnimatedCounter label="Years in Business" end={35} />
          <AnimatedCounter label="Core Chemicals" end={30} />
          <AnimatedCounter label="Multiple Industries" end={12} />
        </div>
      </div>
    </section>
  )
}
