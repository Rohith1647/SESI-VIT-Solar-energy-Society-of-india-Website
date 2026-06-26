'use client'
import { useEffect, useState } from 'react'

export default function BlogsClientEffects() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const totalScroll = document.body.scrollHeight - window.innerHeight
      if (totalScroll <= 0) {
        setProgress(0);
        return;
      }
      const pct = (window.scrollY / totalScroll) * 100
      setProgress(pct)
    }

    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="scroll-bar" style={{ width: `${progress}%` }} />
  )
}
