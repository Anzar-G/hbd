import { ScrollReveal } from '../components/ScrollReveal'
import { CONFIG } from '../config'

export function Greeting() {
  return (
    <section className="relative z-10 py-24 md:py-40 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">

        {/* Floating Decorative Elements — Overlapping boundaries */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-sage/5 rounded-full blur-3xl pointer-events-none opacity-40 translate-y-12" />
        <div className="absolute -bottom-40 -right-20 w-80 h-80 bg-dusty-rose/5 rounded-full blur-3xl pointer-events-none opacity-30 -translate-y-12" />

        {/* Section Label — Asymmetrical placement */}
        <ScrollReveal variant="fade-in" delay={0}>
          <div className="flex items-center gap-4 mb-20">
            <div className="h-px w-12 bg-gold/40" />
            <span className="text-gold/60 text-[0.7rem] tracking-[0.5em] uppercase font-body whitespace-nowrap">
              Sebuah Sapa
            </span>
          </div>
        </ScrollReveal>

        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

          {/* Left: Romantic Title with Tilt */}
          <div className="md:col-span-5 relative">
            <ScrollReveal variant="fade-right" delay={150}>
              <h2
                className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] leading-[0.9] text-dusty-rose mb-8 -rotate-1 md:-rotate-2"
                style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 600 }}
              >
                {CONFIG.greeting.title}
              </h2>
              {/* Gold Ornament Divider */}
              <div className="flex items-center gap-4">
                <div className="h-px w-16 bg-gold/30" />
                <span className="text-gold/40 text-xs">✦</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Body Text with Card Aesthetic */}
          <div className="md:col-span-7 md:pl-12 relative">
            <ScrollReveal variant="fade-left" delay={300}>
              <div className="relative p-8 md:p-14 bg-white/[0.02] border border-white/5 rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.4)] backdrop-blur-sm -rotate-1 md:rotate-1">
                <p
                  className="text-cream/80 text-[1rem] md:text-[1.125rem] leading-loose"
                  style={{ fontFamily: '"Lora", serif' }}
                >
                  {CONFIG.greeting.text}
                </p>
                {/* Visual Accent — bottom right quote ornament */}
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-bg-alt flex items-center justify-center rounded-2xl border border-white/10 rotate-12">
                  <span className="text-gold/40 text-4xl font-serif">“</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
