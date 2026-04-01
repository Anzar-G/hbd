export function LilyIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
    return (
        <svg viewBox="0 0 80 100" className={className} style={style} fill="none">
            {/* Stem */}
            <path
                d="M40 70 L40 95"
                stroke="#7a9e7e"
                strokeWidth="2"
                strokeLinecap="round"
            />
            {/* Leaves */}
            <path
                d="M40 80 Q25 85 30 75 Q40 72 40 80"
                fill="#7a9e7e"
                fillOpacity="0.8"
            />
            <path
                d="M40 85 Q55 90 50 80 Q40 77 40 85"
                fill="#7a9e7e"
                fillOpacity="0.8"
            />
            {/* Petals */}
            <g transform="translate(40, 40)">
                {[0, 60, 120, 180, 240, 300].map((rot, i) => (
                    <ellipse
                        key={i}
                        cx="0"
                        cy="-18"
                        rx="8"
                        ry="20"
                        fill="url(#lily-gradient-icon)"
                        transform={`rotate(${rot})`}
                    />
                ))}
            </g>
            <defs>
                <linearGradient id="lily-gradient-icon" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="60%" stopColor="#f5f0e8" />
                    <stop offset="100%" stopColor="#e8d5d5" />
                </linearGradient>
            </defs>
            {/* Center */}
            <circle cx="40" cy="40" r="4" fill="#d4af6a" opacity="0.9" />
        </svg>
    )
}
