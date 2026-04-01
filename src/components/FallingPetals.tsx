import { useState, useEffect, useMemo } from 'react'

// Lily petal SVG component - lightweight
function LilyPetal({ style }: { style: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 20 30"
      className="absolute"
      style={style}
    >
      <ellipse
        cx="10"
        cy="15"
        rx="8"
        ry="14"
        fill="currentColor"
      />
    </svg>
  )
}

// Small heart petal
function HeartPetal({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-full"
      style={style}
    />
  )
}

const lilyColors = [
  'rgba(255,255,255,0.12)',
  'rgba(245,240,232,0.15)',
  'rgba(232,213,213,0.1)', // Slight pink tint for lily
]

const heartColors = [
  'rgba(201,160,160,0.08)',
  'rgba(212,175,106,0.06)', // Gold hint
]

function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    // Lazy initialization to avoid effect sync state update
    if (typeof window !== 'undefined') {
      return window.matchMedia('(max-width: 600px)').matches
    }
    return false
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mq = window.matchMedia('(max-width: 600px)')
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)

    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return isMobile
}

export function FallingPetals() {
  const isMobile = useIsMobile()

  // Memoize petal configs so they don't regenerate on every render
  const petals = useMemo(() => {
    const lilyCount = isMobile ? 4 : 8
    const heartCount = isMobile ? 3 : 6

    const lilyPetals = Array.from({ length: lilyCount }).map((_, i) => ({
      type: 'lily' as const,
      left: getRandom(0, 100),
      size: getRandom(16, 28),
      duration: getRandom(20, 35),
      delay: getRandom(0, 20),
      color: lilyColors[i % lilyColors.length],
      rotation: getRandom(-30, 30),
    }))

    const heartPetals = Array.from({ length: heartCount }).map((_, i) => ({
      type: 'heart' as const,
      left: getRandom(0, 100),
      width: getRandom(6, 12),
      height: getRandom(8, 16),
      duration: getRandom(18, 30),
      delay: getRandom(0, 18),
      color: heartColors[i % heartColors.length],
    }))

    return [...lilyPetals, ...heartPetals]
  }, [isMobile])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
      {petals.map((petal, i) =>
        petal.type === 'lily' ? (
          <LilyPetal
            key={`lily-${i}`}
            style={{
              left: `${petal.left}%`,
              width: `${petal.size}px`,
              height: `${petal.size * 1.5}px`,
              color: petal.color,
              animation: `petal-fall ${petal.duration}s linear infinite`,
              animationDelay: `${petal.delay}s`,
              transform: `rotate(${petal.rotation}deg)`,
              willChange: 'transform',
            }}
          />
        ) : (
          <HeartPetal
            key={`heart-${i}`}
            style={{
              left: `${petal.left}%`,
              width: `${petal.width}px`,
              height: `${petal.height}px`,
              background: petal.color,
              animation: `petal-fall ${petal.duration}s linear infinite`,
              animationDelay: `${petal.delay}s`,
              willChange: 'transform',
            }}
          />
        )
      )}
    </div>
  )
}
