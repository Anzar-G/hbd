import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { type ReactNode } from 'react'

export type ScrollRevealVariant =
  | 'fade-up'
  | 'fade-in'
  | 'fade-left'
  | 'fade-right'
  | 'scale-up'
  | 'fade-down'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  variant?: ScrollRevealVariant
}

const variantStyles: Record<
  ScrollRevealVariant,
  { hidden: { opacity: number; transform: string }; visible: { opacity: number; transform: string }; transition: string }
> = {
  'fade-up': {
    hidden: { opacity: 0, transform: 'translateY(24px)' },
    visible: { opacity: 1, transform: 'translateY(0)' },
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
  },
  'fade-in': {
    hidden: { opacity: 0, transform: 'none' },
    visible: { opacity: 1, transform: 'none' },
    transition: 'opacity 1.2s ease-out',
  },
  'fade-left': {
    hidden: { opacity: 0, transform: 'translateX(-32px)' },
    visible: { opacity: 1, transform: 'translateX(0)' },
    transition: 'opacity 0.9s ease-out, transform 0.9s ease-out',
  },
  'fade-right': {
    hidden: { opacity: 0, transform: 'translateX(32px)' },
    visible: { opacity: 1, transform: 'translateX(0)' },
    transition: 'opacity 0.9s ease-out, transform 0.9s ease-out',
  },
  'scale-up': {
    hidden: { opacity: 0, transform: 'scale(0.85)' },
    visible: { opacity: 1, transform: 'scale(1)' },
    transition: 'opacity 1s cubic-bezier(0.34, 1.56, 0.64, 1), transform 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  'fade-down': {
    hidden: { opacity: 0, transform: 'translateY(-24px)' },
    visible: { opacity: 1, transform: 'translateY(0)' },
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
  },
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  variant = 'fade-up',
}: ScrollRevealProps) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 })
  const styles = variantStyles[variant]

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(isVisible ? styles.visible : styles.hidden),
        transition: `${styles.transition} ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
