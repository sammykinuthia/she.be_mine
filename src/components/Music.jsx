import { useRef, useState, useEffect } from "react";
import { FaMusic, FaVolumeMute } from "react-icons/fa";

export default function Music() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const fadeInterval = useRef(null);

  // Detect if the device is mobile (where volume control is restricted)
  const isMobile = typeof window !== "undefined" && 
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    clearInterval(fadeInterval.current);

    if (!playing) {
      // Mobile fix: Skip volume fading logic because it's ignored/unsupported
      if (isMobile) {
        audio.volume = 1; // Force full volume (device buttons handle the rest)
        audio.play().then(() => setPlaying(true)).catch(err => console.error(err));
      } else {
        // Desktop: Keep the nice fade-in
        audio.volume = 0;
        audio.play().then(() => {
          setPlaying(true);
          fadeInterval.current = setInterval(() => {
            if (audio.volume < 0.6) {
              audio.volume = Math.min(audio.volume + 0.05, 0.6);
            } else {
              clearInterval(fadeInterval.current);
            }
          }, 100);
        }).catch(err => console.error(err));
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      {/* On mobile, 'preload="auto"' is sometimes ignored unless 'autoPlay' is present.
        We add 'playsInline' for broader compatibility.
      */}
      <audio 
        ref={audioRef} 
        src="/instrumental_love.mp3" 
        loop 
        preload="auto"
        playsInline 
      />
      
      <button 
        className="music-btn" 
        onClick={toggle}
        type="button"
        style={{ 
          cursor: "pointer", 
          border: "none", 
          background: "none",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        aria-label={playing ? "Mute Music" : "Play Music"}
      >
        {/* We use a ternary to ensure the icon switches regardless of the audio state */}
        {!playing ? (
          <FaVolumeMute size={24} style={{ color: "white" }} />
        ) : (
          <FaMusic size={24} style={{ color: "white" }} />
        )}
      </button>
    </>
  );
}