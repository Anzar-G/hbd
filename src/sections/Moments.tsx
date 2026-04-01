import { ScrollReveal } from '../components/ScrollReveal'
import { CONFIG } from '../config'

export function Moments() {
  return (
    <section className="relative z-10 py-24 md:py-40 px-6 md:px-12 overflow-hidden">
      {/* Decorative vertical line spanning from previous section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-linear-to-b from-transparent via-gold/15 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section Label — Centered but minimalist */}
        <ScrollReveal variant="fade-in" delay={0}>
          <div className="flex flex-col items-center gap-4 mb-20 text-center">
            <span className="text-gold/60 text-[0.7rem] tracking-[0.5em] uppercase font-body whitespace-nowrap">
              Cerita Kita
            </span>
            <div className="h-12 w-px bg-linear-to-b from-gold/30 to-transparent" />
          </div>
        </ScrollReveal>

        {/* Staggered Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-20 md:gap-y-32">
          {CONFIG.moments.paragraphs.map((p, i) => (
            <ScrollReveal
              key={i}
              variant="fade-up"
              delay={i * 150}
              className="staggered-card"
            >
              <div className={`relative flex flex-col gap-8 ${i % 2 !== 0 ? 'md:mt-24' : ''}`}>
                {/* Scrapbook Photo Frame */}
                {CONFIG.moments.images?.[i] && (
                  <div
                    className={`relative group staggered-card ${i % 2 === 0 ? '-rotate-1' : 'rotate-1 hover:rotate-0'} transition-transform duration-700`}
                  >
                    {/* Decorative Tape / Accent */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-cream/10 backdrop-blur-md border border-white/5 rotate-2 z-20" />

                    <div className="overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-bg-alt/50 p-2">
                      <img
                        src={CONFIG.moments.images[i]}
                        alt={`Momen ${i + 1}`}
                        className="w-full h-auto object-cover max-h-[500px] rounded-lg transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                      />
                    </div>
                    {/* Story Index Label */}
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gold/10 backdrop-blur-xl border border-gold/20 flex items-center justify-center rounded-full text-gold/60 font-heading text-xl z-20">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                )}

                {/* Text Content */}
                <div className="px-4">
                  <p
                    className="text-cream/80 text-[1rem] leading-loose italic"
                    style={{ fontFamily: '"Lora", serif' }}
                  >
                    {p}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pull Quote — Broken out of the grid */}
        <ScrollReveal variant="fade-up" delay={400}>
          <div className="mt-32 md:mt-48 flex justify-center text-center px-4">
            <div className="max-w-xl relative">
              <span className="absolute -top-12 -left-8 text-[8rem] text-gold/5 font-serif pointer-events-none select-none">“</span>
              <p
                className="text-dusty-rose text-2xl md:text-3xl leading-relaxed italic relative z-10"
                style={{ fontFamily: '"Dancing Script", cursive' }}
              >
                {CONFIG.moments.highlightQuote}
              </p>
              <div className="mt-8 h-px w-32 mx-auto bg-linear-to-r from-transparent via-dusty-rose/30 to-transparent" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
