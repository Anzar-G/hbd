export function LilyHero() {
  return (
    <div
      className="relative flex justify-center items-center lily-hover-glow"
      style={{
        animation: 'lily-bloom 2.5s ease-out forwards',
      }}
    >
      <svg
        viewBox="0 0 100 120"
        className="w-40 h-[190px] sm:w-48 sm:h-[220px] md:w-56 md:h-[260px] lg:w-64 lg:h-[300px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stem */}
        <path
          d="M50 95 L50 120"
          stroke="#7a9e7e"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Leaves */}
        <path
          d="M50 100 Q30 105 35 95 Q50 90 50 100"
          fill="#7a9e7e"
          fillOpacity="0.8"
        />
        <path
          d="M50 105 Q70 110 65 100 Q50 95 50 105"
          fill="#7a9e7e"
          fillOpacity="0.8"
        />
        {/* Petals - 6 petals in circle, gradient white to cream with pink tint */}
        <g transform="translate(50, 55)">
          {[0, 60, 120, 180, 240, 300].map((rot, i) => (
            <ellipse
              key={i}
              cx="0"
              cy="-22"
              rx="10"
              ry="24"
              fill="url(#petal-gradient)"
              transform={`rotate(${rot})`}
              style={{
                transformOrigin: '50% 50%',
              }}
            />
          ))}
        </g>
        <defs>
          <linearGradient id="petal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#f5f0e8" />
            <stop offset="100%" stopColor="#e8d5d5" />
          </linearGradient>
        </defs>
        {/* Stamen / center */}
        <circle cx="50" cy="55" r="4" fill="#d4af6a" opacity="0.9" />
        <circle cx="50" cy="55" r="2" fill="#d4af6a" />
      </svg>
    </div>
  )
}
