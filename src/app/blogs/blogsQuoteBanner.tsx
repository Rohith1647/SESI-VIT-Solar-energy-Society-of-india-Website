'use client'
import { useEffect, useRef, useState } from 'react'

export default function BlogsQuoteBanner() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={`quote-banner reveal ${visible ? 'visible' : ''}`}>
      <div className="quote-mark">&ldquo;</div>
      <div className="quote-body">
        <p>The future is not fossil fuels.<br />The future is sunlight.</p>
        <cite>— Unknown</cite>
      </div>
      <div className="quote-icon">🌞</div>
    </div>
  )
}
