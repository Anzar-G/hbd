import { useState, useEffect } from 'react'

interface MusicPlayerProps {
  audioRef: React.RefObject<HTMLAudioElement | null>
}

export function MusicPlayer({ audioRef }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)

    // Sync initial state
    setIsPlaying(!audio.paused)

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
    }
  }, [audioRef])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play().catch(() => { })
    }
  }

  return (
    <div
      className="fixed z-40 flex items-center gap-2 bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-[max(1.5rem,env(safe-area-inset-right))]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip */}
      {isHovered && (
        <span
          className={`absolute right-full mr-3 whitespace-nowrap px-3 py-1.5 rounded text-[0.75rem] font-lora italic text-cream border border-[rgba(201,160,160,0.3)] bg-[rgba(10,10,15,0.8)] backdrop-blur-sm transition-opacity duration-300 hidden sm:block ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          {isPlaying ? 'Now Playing' : 'Play Music'}
        </span>
      )}

      {/* Equalizer bars */}
      {isPlaying && (
        <div className="hidden sm:flex items-end gap-1 h-5">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-[3px] rounded-full bg-[rgba(201,160,160,0.5)]"
              style={{
                height: '10px',
                animation: `equalizer-bar ${1.2 + i * 0.2}s ease-in-out infinite`,
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Main button */}
      <button
        type="button"
        onClick={togglePlay}
        className="relative flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[rgba(10,10,15,0.7)] backdrop-blur-md border border-[rgba(201,160,160,0.3)] text-cream cursor-pointer transition-all duration-300 ease-out hover:border-[rgba(201,160,160,0.6)] hover:shadow-[0_0_12px_rgba(201,160,160,0.2)]"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying && (
          <svg
            className="absolute inset-0 w-full h-full rounded-full -rotate-90"
            style={{ animation: 'ring-rotate 3s linear infinite' }}
          >
            <circle
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke="rgba(201,160,160,0.4)"
              strokeWidth="1.5"
              strokeDasharray="60 120"
            />
          </svg>
        )}
        {isPlaying ? (
          <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 relative z-10 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </div>
  )
}
