import { useState, useEffect } from 'react'
import { ScrollReveal } from '../components/ScrollReveal'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { CONFIG } from '../config'

export function LoveLetter() {
  const [lineVisible, setLineVisible] = useState(false)
  const [quoteVisible, setQuoteVisible] = useState(false)
  const { ref: sectionRef, isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 })

  useEffect(() => {
    if (!isVisible) return
    const t1 = setTimeout(() => setLineVisible(true), 600)
    const t2 = setTimeout(() => setQuoteVisible(true), 1100)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [isVisible])

  return (
    <section className="relative z-10 py-24 md:py-40 px-6 md:px-12 overflow-hidden">
      {/* Top Transition Fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-bg to-transparent pointer-events-none z-20" />
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gold/5 rounded-full blur-[120px] pointer-events-none opacity-40 translate-x-12" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-dusty-rose/5 rounded-full blur-[120px] pointer-events-none opacity-40 -translate-x-12" />

      <div className="max-w-4xl mx-auto relative">

        {/* Section Label — Asymmetrical */}
        <ScrollReveal variant="fade-in" delay={0}>
          <div className="flex flex-col items-start gap-4 mb-16 px-4">
            <span className="text-gold/50 text-[0.7rem] tracking-[0.5em] uppercase font-body whitespace-nowrap">
              Dari Lubuk Hati
            </span>
            <div className="h-px w-24 bg-linear-to-r from-gold/30 to-transparent" />
          </div>
        </ScrollReveal>

        {/* Letter paper — With Organic Tilt and Overlapping effects */}
        <div className="relative group transition-transform duration-1000 rotate-1 hover:rotate-0">
          {/* Decorative Corner Ornaments — Overlapping the paper */}
          <div className="absolute -top-6 -left-6 w-20 h-20 border-t border-l border-gold/20 pointer-events-none z-20 transition-all duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2" />
          <div className="absolute -bottom-6 -right-6 w-20 h-20 border-b border-r border-gold/20 pointer-events-none z-20 transition-all duration-700 group-hover:translate-x-2 group-hover:translate-y-2" />

          <div className="letter-paper relative z-10 shadow-[0_48px_96px_-24px_rgba(0,0,0,0.6)]">
            {/* Date & recipient line */}
            <ScrollReveal variant="fade-in" delay={50}>
              <div className="flex justify-between items-center mb-10 pb-5 border-b border-white/5">
                <p className="text-gold/50 text-[0.7rem] tracking-widest font-body uppercase">{CONFIG.eventDate}</p>
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-dusty-rose/20" />
                  <p className="text-cream/30 text-xs font-body italic tracking-wide">Untukmu, {CONFIG.recipientName.split(' ')[1]}</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Letter Content Area */}
            <div className="max-w-xl mx-auto">
              {/* Letter paragraphs */}
              {CONFIG.loveLetter.paragraphs.map((p, i) => (
                <ScrollReveal key={i} variant="fade-up" delay={i * 120}>
                  <p
                    className={`${i === 0 ? 'drop-cap' : ''} text-cream/85 text-[1rem] md:text-[1.1rem] leading-loose mb-10 font-lora`}
                  >
                    {p}
                  </p>
                </ScrollReveal>
              ))}

              {/* Pull quote — dramatic & centered */}
              <div ref={sectionRef} className="my-20 flex flex-col items-center gap-1">
                <div
                  className="h-px bg-linear-to-r from-transparent via-dusty-rose/60 to-transparent transition-all duration-1000 ease-out"
                  style={{ width: lineVisible ? '100%' : 0 }}
                />
                <div className="py-12 px-6 text-center">
                  {quoteVisible && (
                    <ScrollReveal variant="scale-up" delay={0}>
                      <p
                        className="text-dusty-rose text-2xl md:text-4xl leading-relaxed font-medium font-dancing"
                      >
                        &ldquo;{CONFIG.loveLetter.dramaticQuote}&rdquo;
                      </p>
                    </ScrollReveal>
                  )}
                </div>
                <div
                  className="h-px bg-linear-to-r from-transparent via-dusty-rose/60 to-transparent transition-all duration-1000 ease-out delay-300"
                  style={{ width: lineVisible ? '100%' : 0 }}
                />
              </div>

              {/* Final paragraph */}
              <ScrollReveal variant="fade-up" delay={0}>
                <p
                  className="text-cream/85 text-[1rem] md:text-[1.1rem] leading-loose font-lora"
                >
                  {CONFIG.loveLetter.finalParagraph}
                </p>
              </ScrollReveal>

              {/* Signature with coffee bean ornament */}
              <ScrollReveal variant="fade-in" delay={200}>
                <div className="mt-14 pt-8 border-t border-white/5 flex flex-col items-end">
                  <p
                    className="text-dusty-rose text-2xl md:text-3xl relative font-dancing"
                  >
                    — {CONFIG.senderName}
                    <span className="absolute -bottom-2 right-0 w-full h-px bg-dusty-rose/40 scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100" />
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Transition Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-bg to-transparent pointer-events-none z-20" />
    </section>
  )
}
