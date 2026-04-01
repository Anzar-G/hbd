import { ScrollReveal } from '../components/ScrollReveal'
import { CONFIG } from '../config'

export function Hero() {
  return (
    <section className="relative min-h-screen min-h-dvh flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden">
      {/* Cinematic Background Photo — Subtle & Panned */}
      {CONFIG.hero.image && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none mask-soft-bottom">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15 grayscale-30 brightness-60 contrast-110"
            style={{
              backgroundImage: `url(${CONFIG.hero.image})`,
              animation: 'pan-slow 60s linear infinite alternate'
            }}
          />
          {/* Deep Vignette */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-bg/60 to-bg 95%" />
        </div>
      )}

      {/* Main Content Layout — Asymmetrical */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">

        {/* Left Side: Text Content */}
        <div className="flex flex-col items-start text-left gap-6">
          {/* Date tag */}
          <ScrollReveal variant="fade-right" delay={0}>
            <p className="text-gold/70 text-[0.75rem] tracking-[0.4em] uppercase font-body">
              {CONFIG.eventDate}
            </p>
          </ScrollReveal>

          {/* Decorative line */}
          <ScrollReveal variant="fade-right" delay={150}>
            <div className="h-px w-24 bg-linear-to-r from-dusty-rose/60 to-transparent" />
          </ScrollReveal>

          {/* Main title */}
          <ScrollReveal variant="fade-right" delay={300}>
            <h1
              className="text-[3.5rem] sm:text-[4.5rem] md:text-[6rem] leading-[0.95] text-cream font-medium"
              style={{ fontFamily: '"Dancing Script", cursive' }}
            >
              {CONFIG.hero.title}
            </h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal variant="fade-right" delay={450}>
            <p className="text-cream/60 text-[0.85rem] sm:text-[0.95rem] tracking-[0.3em] uppercase font-body max-w-md leading-relaxed">
              {CONFIG.hero.subtitle}
            </p>
          </ScrollReveal>

          {/* Names Footer */}
          <ScrollReveal variant="fade-in" delay={600}>
            <div className="mt-4 flex items-center gap-4 text-cream/30 text-xs tracking-[0.25em] font-body uppercase">
              <span className="text-cream/50">{CONFIG.senderName}</span>
              <span className="text-gold/40">✦</span>
              <span className="text-cream/50">{CONFIG.recipientName}</span>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Side: Floating Polaroid Element */}
        <ScrollReveal variant="scale-up" delay={500}>
          <div className="hidden md:block relative">
            <div
              className="w-full aspect-[3/4] max-w-[320px] mx-auto bg-cream/5 p-3 rounded-xl border border-cream/10 shadow-2xl rotate-3 staggered-card"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="w-full h-[85%] overflow-hidden rounded-lg">
                <img
                  src={CONFIG.hero.image}
                  alt="Hero focal"
                  className="w-full h-full object-cover grayscale-20 brightness-90 transition-all duration-700 hover:grayscale-0 hover:scale-105"
                />
              </div>
              <div className="mt-4 flex justify-center">
                <p className="text-dusty-rose/60 text-sm italic font-script">With Love...</p>
              </div>

              {/* Decorative coffee ring OVER the photo */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border border-gold/20 rounded-full pointer-events-none opacity-40 translate-x-2 translate-y-2" />
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        aria-hidden
      >
        <div className="h-12 w-px bg-linear-to-b from-transparent via-dusty-rose/50 to-transparent" style={{ animation: 'scroll-bounce 2s ease-in-out infinite' }} />
        <span className="text-[9px] tracking-[0.5em] uppercase text-cream/30 font-body">Teruskan</span>
      </div>

      {/* Bottom Gradient Fade — Smoother transition to Greeting */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-bg via-bg/90 to-transparent pointer-events-none z-0" />
    </section>
  )
}
