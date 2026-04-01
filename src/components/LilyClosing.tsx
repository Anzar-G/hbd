interface LilyClosingProps {
  visible?: boolean
}

export function LilyClosing({ visible = true }: LilyClosingProps) {
  return (
    <div
      className={`flex justify-center py-8 transition-opacity duration-500 lily-hover-glow ${visible ? '' : 'opacity-0'}`}
      style={{
        animation: visible ? 'fade-in-up 1.5s ease-out forwards' : 'none',
      }}
    >
      <svg
        viewBox="0 0 100 120"
        className="w-40 h-[200px] sm:w-48 sm:h-[240px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 95 L50 120" stroke="#7a9e7e" strokeWidth="2" strokeLinecap="round" />
        <path d="M50 98 Q32 102 38 92 Q50 88 50 98" fill="#7a9e7e" fillOpacity="0.7" />
        <path d="M50 102 Q68 106 62 96 Q50 92 50 102" fill="#7a9e7e" fillOpacity="0.7" />
        <g transform="translate(50, 55)">
          {[0, 60, 120, 180, 240, 300].map((rot, i) => (
            <ellipse
              key={i}
              cx="0"
              cy="-22"
              rx="10"
              ry="24"
              fill="url(#petal-closing)"
              transform={`rotate(${rot})`}
            />
          ))}
        </g>
        <defs>
          <linearGradient id="petal-closing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#f5f0e8" />
            <stop offset="100%" stopColor="#e8d5d5" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="55" r="4" fill="#d4af6a" opacity="0.9" />
      </svg>
    </div>
  )
}
