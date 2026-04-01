import { CONFIG } from '../config'

export function Footer() {
  return (
    <footer className="relative z-10 py-10 md:py-14 px-6 border-t border-dusty-rose/10">
      <div className="flex flex-col items-center gap-4">

        {/* Coffee ornament */}
        <div className="flex items-center gap-3" aria-hidden>
          <div className="h-px w-12 bg-linear-to-r from-transparent to-gold/20" />
          <svg viewBox="0 0 20 20" className="w-3 h-3 text-gold/30" fill="currentColor">
            {/* Coffee bean */}
            <ellipse cx="10" cy="10" rx="8" ry="9" />
            <path d="M10 3 Q7 10 10 17" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <div className="h-px w-12 bg-linear-to-l from-transparent to-gold/20" />
        </div>

        <p className="text-cream/25 text-[0.75rem] tracking-widest uppercase font-body">
          {CONFIG.footer.text}
        </p>

        <p className="text-cream/15 text-[0.65rem] tracking-wider font-body">
          {CONFIG.senderName} × {CONFIG.recipientName}
        </p>
      </div>
    </footer>
  )
}
