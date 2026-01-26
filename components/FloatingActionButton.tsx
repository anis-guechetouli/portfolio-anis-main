'use client'

import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-accent text-dark-bg flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 glow-accent-hover"
      aria-label="Retour en haut"
    >
      <ArrowUp size={24} />
    </button>
  )
}
