import { useRef, useState, useEffect } from 'react'
import { WaxSeal } from '../components/WaxSeal'
import { ScrollReveal } from '../components/ScrollReveal'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { CONFIG } from '../config'

// Two coffee cups SVG — simple, intimate symbol
function CoffeeCups() {
  return (
    <div className="flex items-end gap-3 justify-center" aria-hidden>
      {/* Cup 1 */}
      <svg viewBox="0 0 28 36" className="w-6 h-8 text-gold/30" fill="currentColor">
        <rect x="4" y="12" width="16" height="14" rx="3" />
        <path d="M20 15 Q27 15 27 21 Q27 27 20 27" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="2" y="10" width="20" height="4" rx="1" />
        <rect x="0" y="26" width="24" height="3" rx="1.5" />
        {/* Steam */}
        <path d="M9 8 Q7 5 9 2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M15 8 Q13 5 15 2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
      {/* Heart */}
      <svg viewBox="0 0 20 20" className="w-3 h-3 text-dusty-rose/30 mb-2" fill="currentColor">
        <path d="M10 16 C10 16 2 10 2 6 C2 3.8 3.8 2 6 2 C7.5 2 8.8 2.8 10 4 C11.2 2.8 12.5 2 14 2 C16.2 2 18 3.8 18 6 C18 10 10 16 10 16Z" />
      </svg>
      {/* Cup 2 */}
      <svg viewBox="0 0 28 36" className="w-5 h-7 text-sage/25" fill="currentColor">
        <rect x="4" y="12" width="16" height="14" rx="3" />
        <path d="M20 15 Q27 15 27 21 Q27 27 20 27" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="2" y="10" width="20" height="4" rx="1" />
        <rect x="0" y="26" width="24" height="3" rx="1.5" />
        <path d="M9 8 Q7 5 9 2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    </div>
  )
}

export function Closing() {
  const closingRef = useRef<HTMLDivElement>(null)
  const { isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 })
  const [underlineWidth, setUnderlineWidth] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    const t = setTimeout(() => setUnderlineWidth(100), 800)
    return () => clearTimeout(t)
  }, [isVisible])

  return (
    <section ref={closingRef} className="relative z-10 py-32 md:py-48 px-6 md:px-12 overflow-hidden mask-soft-top">
      {/* Top Transition Fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-bg to-transparent pointer-events-none z-20" />
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-dusty-rose/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-xl mx-auto text-center relative z-10">
        {/* Section label — Minimalist */}
        <ScrollReveal variant="fade-in" delay={0}>
          <div className="flex flex-col items-center gap-4 mb-16">
            <span className="text-gold/40 text-[0.7rem] tracking-[0.5em] uppercase font-body whitespace-nowrap">
              Penutup
            </span>
            <div className="h-10 w-px bg-linear-to-b from-gold/20 to-transparent" />
          </div>
        </ScrollReveal>

        {/* Coffee cups decoration */}
        <ScrollReveal variant="fade-in" delay={100}>
          <div className="scale-125 md:scale-150 transition-transform duration-1000 group-hover:scale-110">
            <CoffeeCups />
          </div>
        </ScrollReveal>

        {/* Closing text — Increased Line Height and Italic */}
        <ScrollReveal variant="fade-up" delay={250}>
          <p
            className="text-cream/80 text-[1.1rem] md:text-[1.25rem] leading-loose mt-12 mb-16 italic font-lora"
          >
            {CONFIG.closing.text}
          </p>
        </ScrollReveal>

        {/* Signature Ensemble */}
        <ScrollReveal variant="scale-up" delay={400}>
          <div className="inline-flex flex-col items-center gap-4 group">
            {/* Signature with improved flourish */}
            <p
              className="text-dusty-rose text-3xl sm:text-4xl md:text-5xl font-dancing"
            >
              {CONFIG.closing.signature}
            </p>

            {/* Artistic Underline — Wider and more nuanced */}
            <div className="relative w-48 h-px">
              <div
                className="absolute inset-0 bg-linear-to-r from-transparent via-gold/40 to-transparent transition-all duration-1500 ease-out"
                style={{ width: `${underlineWidth}%`, left: `${(100 - underlineWidth) / 2}%` }}
              />
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gold/10 rounded-full blur-[2px]" />
            </div>

            <p className="text-cream/30 text-xs tracking-[0.4em] uppercase font-body mt-2">
              {CONFIG.senderName}
            </p>
          </div>
        </ScrollReveal>

        {/* Wax seal — The final physical touch */}
        <div className="mt-16 md:mt-24 pointer-events-none opacity-80 hover:opacity-100 transition-opacity">
          <WaxSeal />
        </div>
      </div>

      {/* Final Vignette Fade-to-Black Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-black via-bg to-transparent pointer-events-none" />
    </section>
  )
}
