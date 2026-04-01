import { useState, useEffect, useRef } from 'react'
import './DoYouLoveMe.css'

interface DoYouLoveMeProps {
    onComplete?: () => void
}

export function DoYouLoveMe({ onComplete }: DoYouLoveMeProps) {
    const [stage, setStage] = useState<'question' | 'loading' | 'result' | 'fadeout' | 'hidden'>('question')
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)
    const noButtonRef = useRef<HTMLButtonElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const handleNoHover = () => {
        if (noButtonRef.current && containerRef.current) {
            const container = containerRef.current.getBoundingClientRect()
            const button = noButtonRef.current.getBoundingClientRect()

            const maxX = container.width - button.width - 40
            const maxY = container.height - button.height - 40

            const newX = Math.floor(Math.random() * maxX) - maxX / 2
            const newY = Math.floor(Math.random() * maxY) - maxY / 2

            noButtonRef.current.style.transform = `translate(${newX}px, ${newY}px)`
        }
    }

    const handleYesClick = () => {
        setStage('loading')
        // Show loading for 3 seconds
        setTimeout(() => {
            setStage('result')
            // Show result for 4 seconds, then fade out
            setTimeout(() => {
                setStage('fadeout')
                // After fadeout animation, hide and trigger callback
                setTimeout(() => {
                    setStage('hidden')
                    onComplete?.()
                }, 1000) // 1 second for fadeout
            }, 4000) // 4 seconds to show the result
        }, 3000)
    }

    // If hidden, don't render the section
    if (stage === 'hidden') {
        return null
    }

    return (
        <section
            ref={sectionRef}
            className={`doyouloveme-section min-h-screen flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden transition-opacity duration-1000 ${stage === 'fadeout' ? 'opacity-0' : 'opacity-100'
                }`}
        >
            {/* Question Stage */}
            <div
                ref={containerRef}
                className={`question-container transition-all duration-700 ${stage === 'question'
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-90 pointer-events-none absolute'
                    } ${isVisible ? 'translate-y-0' : 'translate-y-12'}`}
            >
                {/* Tenor GIF Embed */}
                <div className="gif-container mb-8">
                    <div
                        className="tenor-gif-embed"
                        data-postid="25789758"
                        data-share-method="host"
                        data-width="100%"
                    >
                        <a href="https://tenor.com/view/tkthao219-bubududu-gif-25789758"></a>
                        <a href="https://tenor.com/search/tkthao219-stickers"></a>
                    </div>
                </div>

                <h2 className="question-text font-heading text-4xl sm:text-5xl md:text-6xl text-cream text-center mb-8">
                    Do you love me?
                </h2>

                <div className="button-container flex justify-center gap-6 relative h-20">
                    <button
                        onClick={handleYesClick}
                        className="love-btn yes-btn"
                    >
                        Yes
                    </button>
                    <button
                        ref={noButtonRef}
                        onMouseEnter={handleNoHover}
                        onTouchStart={handleNoHover}
                        className="love-btn no-btn"
                    >
                        No
                    </button>
                </div>
            </div>

            {/* Loading Stage - Heart Loader */}
            <div
                className={`heart-loader-container transition-all duration-700 ${stage === 'loading'
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-90 pointer-events-none absolute'
                    }`}
            >
                <div className="cssload-main">
                    <div className="cssload-heart">
                        <span className="cssload-heartL"></span>
                        <span className="cssload-heartR"></span>
                        <span className="cssload-square"></span>
                    </div>
                    <div className="cssload-shadow"></div>
                </div>
            </div>

            {/* Result Stage */}
            <div
                className={`result-container transition-all duration-700 ${stage === 'result' || stage === 'fadeout'
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-90 pointer-events-none absolute'
                    }`}
            >
                <video
                    className="gif-result rounded-xl shadow-2xl mb-6"
                    src="/cute love gif.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <h2 className="font-heading text-4xl sm:text-5xl text-cream text-center">
                    I knew it 😍!
                </h2>
            </div>
        </section>
    )
}
