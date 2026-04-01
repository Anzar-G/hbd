import { useState, useEffect, useRef } from 'react'
import './LoveLetterEnvelope.css'
import { LilyIcon } from '../components/LilyIcon'

interface LoveLetterEnvelopeProps {
    show?: boolean
}

export function LoveLetterEnvelope({ show = false }: LoveLetterEnvelopeProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                setIsVisible(true)
            }, 100)
            return () => clearTimeout(timer)
        }
    }, [show])

    if (!show) {
        return null
    }

    const handleOpen = () => setIsOpen(true)

    return (
        <section
            ref={sectionRef}
            className={`love-letter-section transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
        >
            {/* Floating Hearts & Lily Petals Background */}
            <div className="floating-hearts">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className={`floating-heart fh-${i + 1}`}>
                        {i % 2 === 0 ? '❤' : '🌸'}
                    </div>
                ))}
            </div>

            {/* Main Container */}
            <div className="letter-container">

                {/* Wrapper for letter + envelope */}
                <div className="envelope-letter-wrapper">

                    {/* Letter Paper - Appears ABOVE envelope when opened */}
                    <div className={`envelope-letter-paper ${isOpen ? 'envelope-letter-revealed' : ''}`}>
                        <div className="letter-inner">
                            {/* Decorative header */}
                            <div className="letter-header">
                                <div className="header-line"></div>
                                <span className="header-heart">
                                    <img src="/lily3.svg" alt="Lily" className="w-8 h-8 opacity-90" />
                                </span>
                                <div className="header-line"></div>
                            </div>

                            {/* Letter content */}
                            <div className="letter-content">
                                <p className="letter-greeting">Sayang,</p>

                                <p className="letter-paragraph">
                                    Aku tahu kita menjalin hubungan ini dari jarak yang jauh, dan mungkin kita belum tahu kapan kita akan bertemu. Tapi yang aku tahu dengan pasti adalah — <em>aku mencintaimu dengan segenap hatiku.</em>
                                </p>

                                <p className="letter-paragraph">
                                    Cinta sejati, bagiku, bukanlah tentang memaksa atau mengikat. Cinta sejati adalah tentang memberikan kebebasan, bahkan jika itu berarti melepaskan. Jika suatu hari nanti ada seseorang yang lebih baik, yang lebih dekat, yang bisa memberikan kebahagian lebih dari yang aku bisa berikan — aku ingin kamu tahu bahwa aku tidak akan pernah menghalangimu untuk bahagia.
                                </p>

                                <p className="letter-paragraph">
                                    Bukan berarti aku melonggarkan perasaan ini. Justru sebaliknya — <em>karena aku sangat mencintaimu, aku ingin yang terbaik untukmu,</em> bahkan jika itu bukan aku.
                                </p>

                                <p className="letter-paragraph">
                                    Tapi sampai saat itu tiba — atau mungkin tidak akan pernah tiba — aku akan tetap di sini, mencintaimu dengan tulus, tanpa syarat, dan tanpa paksaan.
                                </p>

                                <div className="letter-signature">
                                    <span className="signature-text">With all my love,</span>
                                    <span className="signature-heart">
                                        <img src="/lily3.svg" alt="Love" className="w-10 h-10 opacity-90" />
                                    </span>
                                </div>
                            </div>

                            {/* Decorative footer */}
                            <div className="letter-footer">
                                <div className="footer-flourish">✦</div>
                            </div>
                        </div>
                    </div>

                    {/* Envelope */}
                    <div
                        className={`envelope ${isOpen ? 'envelope-open' : ''}`}
                        onClick={handleOpen}
                    >
                        {/* Envelope Back */}
                        <div className="envelope-back"></div>

                        {/* Envelope Flap */}
                        <div className="envelope-flap">
                            <div className="flap-inner"></div>
                        </div>

                        {/* Wax Seal - Using LilyIcon (SVG) for seal effect as usually seals are embossed/colorless */}
                        <div className={`envelope-seal ${isOpen ? 'seal-broken' : ''}`}>
                            <LilyIcon className="w-8 h-10 text-white/90 drop-shadow-md" />
                        </div>
                    </div>
                </div>

                {/* Hint text */}
                <p className={`hint-text ${isOpen ? 'hint-hidden' : ''}`}>
                    Click to open the letter...
                </p>
            </div>
        </section>
    )
}
