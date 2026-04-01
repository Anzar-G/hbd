const orbs = [
  { className: 'orb-blue-vivid top-[-5%] right-[-5%] left-auto w-[650px] h-[650px]' },
  { className: 'orb-blue-soft top-[40%] left-[-8%] w-[500px] h-[500px]' },
  { className: 'orb-pink-vivid top-[70%] left-[50%] translate-x-[-50%] w-[600px] h-[600px]' },
  { className: 'orb-caramel top-[50%] right-[10%] left-auto w-[450px] h-[450px]' },
  { className: 'orb-pink-soft top-[85%] left-[10%] w-[480px] h-[480px]' },
]

export function BackgroundOrbs() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
        {orbs.map((orb, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${orb.className}`}
          />
        ))}
      </div>
      {/* Subtle vignette */}
      <div
        className="fixed inset-0 pointer-events-none z-1 vignette-main"
        aria-hidden
      />
    </>
  )
}
