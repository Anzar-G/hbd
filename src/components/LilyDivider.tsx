export function LilyDivider() {
  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4 py-8 md:py-12 px-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[rgba(201,160,160,0.4)]" />
      <div
        className="text-[#7a9e7e] flex items-center justify-center"
        style={{ animation: 'lily-pulse 2.5s ease-in-out infinite' }}
      >
        <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" opacity={0.8}>
          <ellipse cx="20" cy="12" rx="4" ry="10" fill="currentColor" transform="rotate(-30 20 20)" />
          <ellipse cx="20" cy="12" rx="4" ry="10" fill="currentColor" transform="rotate(30 20 20)" />
          <ellipse cx="20" cy="12" rx="4" ry="10" fill="currentColor" transform="rotate(90 20 20)" />
          <circle cx="20" cy="20" r="3" fill="#d4af6a" opacity={0.9} />
          <path d="M20 23 v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity={0.7} />
        </svg>
      </div>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[rgba(201,160,160,0.4)]" />
    </div>
  )
}
