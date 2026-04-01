export function WaxSeal() {
  return (
    <div className="flex justify-center mt-6 md:mt-8" aria-hidden>
      <div
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(201, 160, 160, 0.9), rgba(180, 130, 130, 0.95))',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
          border: '1px solid rgba(201, 160, 160, 0.5)',
        }}
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-[#f5f0e8]/95" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
    </div>
  )
}
