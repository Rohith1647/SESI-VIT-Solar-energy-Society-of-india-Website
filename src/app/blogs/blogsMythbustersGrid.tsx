'use client'
import { useEffect, useRef, useState } from 'react'

const MYTHS = [
  { myth: "Solar panels don't work on cloudy days.",      fact: "They still generate electricity — just 10–25% less. Diffused light is enough.", icon: '⛅', color: '#60a5fa' },
  { myth: 'Solar panels are too expensive.',              fact: 'Costs have fallen 90%+ since 2010. Most setups pay back in 4–6 years.',           icon: '💰', color: '#4ade80' },
  { myth: 'Solar needs direct sunlight to work.',         fact: 'Panels work on diffused daylight. Germany — a cloudy country — leads in solar.',   icon: '🌤', color: '#fbbf24' },
  { myth: 'Solar panels need constant maintenance.',      fact: 'A cleaning every few months and an annual check is all it takes.',                  icon: '🔧', color: '#c084fc' },
  { myth: "Solar panels aren't recyclable.",              fact: '90%+ of a panel is recyclable. Dedicated solar recycling plants are growing fast.', icon: '♻️', color: '#4ade80' },
  { myth: 'Solar only works in hot climates.',            fact: 'Cold, sunny days are actually ideal. Heat reduces efficiency slightly.',            icon: '❄️', color: '#93c5fd' },
  { myth: 'Solar panels damage your roof.',               fact: 'Properly installed panels protect the roof beneath them from weathering.',          icon: '🏠', color: '#fb923c' },
  { myth: "Solar energy can't power an entire home.",    fact: 'With the right system size + battery storage, full home coverage is very possible.', icon: '⚡', color: '#facc15' },
  { myth: 'Solar farms harm local ecosystems.',           fact: 'Agrivoltaic setups can boost biodiversity and crop yields simultaneously.',         icon: '🌿', color: '#4ade80' },
]

function MythCard({ myth, fact, icon, color, delay }: { myth: string; fact: string; icon: string; color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`myth-card-wrapper ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
      onClick={() => setFlipped(f => !f)}
    >
      <div className={`myth-card-inner ${flipped ? 'flipped' : ''}`}>
        {/* Front */}
        <div className="myth-card-face myth-card-front">
          <div className="myth-card-icon" style={{ color }}>{icon}</div>
          <div className="myth-card-badge myth">Myth</div>
          <p className="myth-card-text">{myth}</p>
          <div className="myth-card-hint">Tap to reveal fact ↩</div>
        </div>
        {/* Back */}
        <div className="myth-card-face myth-card-back">
          <div className="myth-card-icon" style={{ color }}>{icon}</div>
          <div className="myth-card-badge fact">Fact ✓</div>
          <p className="myth-card-text">{fact}</p>
          <div className="myth-card-hint" style={{ color }}>Tap to go back ↩</div>
        </div>
      </div>
    </div>
  )
}

export default function BlogsMythbustersGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.05 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="mythbusters-section">
      <div className={`section-heading reveal ${visible ? 'visible' : ''}`}>
        <h2>⚡ Solar Mythbusters</h2>
        <p>Think you know solar? Tap any card to reveal the truth.</p>
      </div>
      <div className="myths-grid">
        {MYTHS.map((m, i) => (
          <MythCard key={i} {...m} delay={i * 0.06} />
        ))}
      </div>
    </div>
  )
}
