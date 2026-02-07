import { useRef, useState } from "react";
import { FaMusic, FaVolumeMute } from "react-icons/fa";

export default function Music() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const fadeInterval = useRef(null); // Store interval to clear it if user toggles quickly

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    // Clear any existing fade intervals to prevent volume "fighting"
    clearInterval(fadeInterval.current);

    if (!playing) {
      // Start at zero volume
      audio.volume = 0;
      
      audio.play().then(() => {
        setPlaying(true);
        
        // Smooth Fade In
        fadeInterval.current = setInterval(() => {
          if (audio.volume < 0.6) {
            // Use Math.min to ensure we don't exceed the target
            audio.volume = Math.min(audio.volume + 0.05, 0.6);
          } else {
            clearInterval(fadeInterval.current);
          }
        }, 150);
      }).catch((error) => {
        console.error("Autoplay prevented or file missing:", error);
        // Note: This usually happens if the user hasn't interacted with the page yet.
      });
    } else {
      // Immediate Pause
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src="/instrumental_love.mp3" 
        loop 
        preload="auto" 
      />
      <button 
        style={{ cursor: "pointer", border: "none", background: "none" }} 
        className="music-btn" 
        onClick={toggle}
        aria-label={playing ? "Mute Music" : "Play Music"}
      >
        {!playing ? <FaVolumeMute size={24} /> : <FaMusic size={24} />}
      </button>
    </>
  );
}