import './WelcomeModal.css'
import { LilyIcon } from './LilyIcon'
import { CONFIG } from '../config'

interface WelcomeModalProps {
    isVisible: boolean
    onEnter: () => void
}

export function WelcomeModal({ isVisible, onEnter }: WelcomeModalProps) {
    return (
        <div className={`welcome-overlay ${!isVisible ? 'hidden' : ''}`}>
            {/* Floating Lily Petals Background - Keep lightweight SVG component for performance */}
            <div className="welcome-petals">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className={`welcome-petal wp-${i + 1}`}>
                        <LilyIcon className="w-8 h-10 opacity-10" />
                    </div>
                ))}
            </div>

            {/* Side Lily Decorations - Using lily2.png */}
            <div className="side-lily side-left">
                <img src={CONFIG.assets.images.lilySide} alt="" className="w-64 h-auto opacity-80" />
            </div>
            <div className="side-lily side-right">
                <img src={CONFIG.assets.images.lilySide} alt="" className="w-64 h-auto opacity-80" />
            </div>

            {/* Sparkle Particles */}
            <div className="sparkle-container">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="sparkle" />
                ))}
            </div>

            {/* Main Card */}
            <div className="welcome-card">
                {/* Main Lily Decoration - Using lily1.png */}
                <div className="welcome-lily-icon">
                    <img
                        src={CONFIG.assets.images.lilyMain}
                        alt="Lily"
                        className="w-32 h-auto opacity-100 drop-shadow-[0_0_15px_rgba(122,158,126,0.3)]"
                    />
                </div>

                {/* Decorative Line with small lily icon */}
                <div className="welcome-line">
                    <div className="line-segment"></div>
                    <span className="line-lily">🌸</span>
                    <div className="line-segment"></div>
                </div>

                {/* Greeting */}
                <h1 className="welcome-greeting">{CONFIG.welcome.title}</h1>

                {/* For */}
                <p className="welcome-for">{CONFIG.welcome.intro}</p>

                {/* Name */}
                <h2 className="welcome-name">{CONFIG.recipientName}</h2>

                {/* Subtitle */}
                <p className="welcome-subtitle">
                    {CONFIG.welcome.subtitle}
                </p>

                {/* Enter Button with lily accent */}
                <button className="welcome-button" onClick={onEnter}>
                    <span className="button-icon">🌷</span>
                    <span>{CONFIG.welcome.buttonText}</span>
                </button>

                {/* Date */}
                <p className="welcome-date">{CONFIG.eventDate}</p>
            </div>

            {/* Sound Hint */}
            <div className="sound-hint">
                <span className="sound-icon">🎵</span>
                <span>{CONFIG.welcome.soundHint}</span>
            </div>
        </div>
    )
}
