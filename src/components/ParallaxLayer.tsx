import { type ReactNode, useEffect, useRef, useState } from 'react'

interface ParallaxLayerProps {
  children: ReactNode
  speed?: number
  className?: string
}

const MOBILE_BREAKPOINT = 768

export function ParallaxLayer({ children, speed = 0.3, className = '' }: ParallaxLayerProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [translateY, setTranslateY] = useState(0)
  const [isMobile, setIsMobile] = useState(true)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT}px)`)
    setIsMobile(!mq.matches)
    const handler = () => setIsMobile(!window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT}px)`).matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const effectiveSpeed = isMobile ? 0 : speed
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        setTranslateY(window.scrollY * effectiveSpeed)
        rafRef.current = 0
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [speed, isMobile])

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{
        transform: `translateY(${translateY}px)`,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}
