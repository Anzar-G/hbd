import { useMemo } from 'react'

function getRandom(min: number, max: number) {
    return Math.random() * (max - min) + min
}

// Coffee bean SVG — simple oval with a crease line
function CoffeeBean({ style }: { style: React.CSSProperties }) {
    return (
        <svg viewBox="0 0 24 32" className="absolute fill-current text-[var(--bean-color)]" style={style}>
            <ellipse cx="12" cy="16" rx="10" ry="15" />
            {/* crease line in the middle */}
            <path
                d="M12 4 Q8 16 12 28"
                className="stroke-black/25 fill-none stroke-[2] stroke-round"
                strokeLinecap="round"
            />
        </svg>
    )
}

// Steam wisp — curvy vertical line
function SteamWisp({ style }: { style: React.CSSProperties }) {
    return (
        <svg viewBox="0 0 20 60" className="absolute stroke-current text-[var(--steam-color)] opacity-60" style={style}>
            <path
                d="M10 55 Q4 45 10 35 Q16 25 10 15 Q4 5 10 0"
                className="fill-none stroke-[2.5] stroke-round"
            />
        </svg>
    )
}

const beanColors = [
    'rgba(180, 110, 55, 0.55)',
    'rgba(210, 140, 70, 0.50)',
    'rgba(150, 90, 35, 0.60)',
]

const steamColors = [
    'rgba(220, 185, 140, 0.45)',
    'rgba(240, 205, 160, 0.40)',
]

export function FloatingCoffee() {
    const elements = useMemo(() => {
        const isMobile = typeof window !== 'undefined'
            ? window.matchMedia('(max-width: 600px)').matches
            : false

        const beanCount = isMobile ? 5 : 10
        const steamCount = isMobile ? 4 : 8

        const beans = Array.from({ length: beanCount }).map((_, i) => ({
            type: 'bean' as const,
            left: getRandom(0, 100),
            size: getRandom(14, 22),
            duration: getRandom(22, 40),
            delay: getRandom(0, 22),
            color: beanColors[i % beanColors.length],
            rotation: getRandom(-40, 40),
        }))

        const steams = Array.from({ length: steamCount }).map((_, i) => ({
            type: 'steam' as const,
            left: getRandom(0, 100),
            width: getRandom(12, 20),
            height: getRandom(40, 70),
            duration: getRandom(18, 32),
            delay: getRandom(0, 20),
            color: steamColors[i % steamColors.length],
        }))

        return [...beans, ...steams]
    }, [])

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
            {elements.map((el, i) =>
                el.type === 'bean' ? (
                    <CoffeeBean
                        key={`bean-${i}`}
                        style={{
                            left: `${el.left}%`,
                            width: `${el.size}px`,
                            height: `${el.size * 1.4}px`,
                            '--bean-color': el.color,
                            animation: `petal-fall ${el.duration}s linear infinite`,
                            animationDelay: `${el.delay}s`,
                            transform: `rotate(${el.rotation}deg)`,
                            willChange: 'transform',
                        } as React.CSSProperties}
                    />
                ) : (
                    <SteamWisp
                        key={`steam-${i}`}
                        style={{
                            left: `${el.left}%`,
                            width: `${el.width}px`,
                            height: `${el.height}px`,
                            '--steam-color': el.color,
                            animation: `steam-rise ${el.duration}s ease-in-out infinite`,
                            animationDelay: `${el.delay}s`,
                            willChange: 'transform, opacity',
                        } as React.CSSProperties}
                    />
                )
            )}
        </div>
    )
}
