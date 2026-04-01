export function Stardust() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="stardust-dot" />
      ))}
    </div>
  )
}
