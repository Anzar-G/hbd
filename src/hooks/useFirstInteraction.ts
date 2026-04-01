import { useEffect, useRef, useState } from 'react'

export function useFirstInteraction() {
  const [hasInteracted, setHasInteracted] = useState(false)
  const removed = useRef(false)

  useEffect(() => {
    if (removed.current) return

    const handleInteraction = () => {
      if (hasInteracted) return
      setHasInteracted(true)
      removed.current = true
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('scroll', handleInteraction, true)
      document.removeEventListener('keydown', handleInteraction)
      document.removeEventListener('touchstart', handleInteraction)
    }

    document.addEventListener('click', handleInteraction)
    document.addEventListener('scroll', handleInteraction, true)
    document.addEventListener('keydown', handleInteraction)
    document.addEventListener('touchstart', handleInteraction, { passive: true })

    return () => {
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('scroll', handleInteraction, true)
      document.removeEventListener('keydown', handleInteraction)
      document.removeEventListener('touchstart', handleInteraction)
    }
  }, [hasInteracted])

  return hasInteracted
}
