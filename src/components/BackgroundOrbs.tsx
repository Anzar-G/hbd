const orbs = [
  {
    // Top-right — VIVID blue — prominent and visible
    style: {
      top: '-5%',
      right: '-5%',
      left: 'auto',
      width: '650px',
      height: '650px',
      background: 'radial-gradient(circle, rgba(94, 174, 227, 0.22) 0%, transparent 65%)',
      filter: 'blur(50px)',
    },
  },
  {
    // Left — secondary blue streak
    style: {
      top: '40%',
      left: '-8%',
      width: '500px',
      height: '500px',
      background: 'radial-gradient(circle, rgba(94, 174, 227, 0.14) 0%, transparent 70%)',
      filter: 'blur(55px)',
    },
  },
  {
    // Center-bottom — pink romantic glow
    style: {
      top: '70%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '600px',
      height: '600px',
      background: 'radial-gradient(circle, rgba(217, 138, 172, 0.15) 0%, transparent 70%)',
      filter: 'blur(50px)',
    },
  },
  {
    // Mid-right — warm caramel coffee glow
    style: {
      top: '50%',
      right: '10%',
      left: 'auto',
      width: '450px',
      height: '450px',
      background: 'radial-gradient(circle, rgba(201, 148, 74, 0.10) 0%, transparent 70%)',
      filter: 'blur(60px)',
    },
  },
  {
    // Bottom-left — pink warmth
    style: {
      top: '85%',
      left: '10%',
      width: '480px',
      height: '480px',
      background: 'radial-gradient(circle, rgba(217, 138, 172, 0.10) 0%, transparent 70%)',
      filter: 'blur(50px)',
    },
  },
]

export function BackgroundOrbs() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
        {orbs.map((orb, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{ ...orb.style, position: 'absolute' }}
          />
        ))}
      </div>
      {/* Subtle vignette */}
      <div
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 55%, rgba(19, 16, 13, 0.45) 100%)',
        }}
        aria-hidden
      />
    </>
  )
}
