interface SectionTransitionProps {
  type?: 'gradient-fade' | 'glow' | 'vignette'
  color?: string
}

const defaultColor = 'rgba(201, 160, 160, 0.08)'

export function SectionTransition({ type = 'gradient-fade', color = defaultColor }: SectionTransitionProps) {
  if (type === 'gradient-fade') {
    return (
      <div
        className="w-full pointer-events-none"
        style={{
          height: '120px',
          background: `linear-gradient(to bottom, transparent, ${color}, transparent)`,
        }}
        aria-hidden
      />
    )
  }

  if (type === 'glow') {
    return (
      <div
        className="w-full flex items-center justify-center pointer-events-none"
        style={{ height: '80px' }}
        aria-hidden
      >
        <div
          style={{
            width: '2px',
            height: '40px',
            background: 'rgba(201, 160, 160, 0.25)',
            boxShadow: '0 0 60px 20px rgba(201, 160, 160, 0.15)',
          }}
        />
      </div>
    )
  }

  if (type === 'vignette') {
    return (
      <div
        className="w-full pointer-events-none"
        style={{
          height: '200px',
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(10, 10, 15, 0.6) 100%)',
        }}
        aria-hidden
      />
    )
  }

  return null
}
