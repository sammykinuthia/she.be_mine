import { useRef, useState, useEffect } from "react";
import { FaMusic, FaVolumeMute } from "react-icons/fa";

export default function Music() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const fadeInterval = useRef(null);

  useEffect(() => {
    // Initialize the audio object directly
    // Ensure the file is in the 'public' folder
    audioRef.current = new Audio("/instrumental_love.mp3");
    audioRef.current.loop = true;

    // Cleanup: Stop music if the component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      clearInterval(fadeInterval.current);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    clearInterval(fadeInterval.current);

    if (!playing) {
      audio.volume = 0;
      // The browser allows .play() because it is inside this click handler
      audio.play()
        .then(() => {
          setPlaying(true);
          fadeInterval.current = setInterval(() => {
            if (audio.volume < 0.5) {
              audio.volume = Math.min(audio.volume + 0.05, 0.6);
            } else {
              clearInterval(fadeInterval.current);
            }
          }, 100);
        })
        .catch((err) => console.error("Playback blocked:", err));
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <button 
      onClick={toggle} 
      style={{
        background: "rgba(255, 255, 255, 0.15)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "white",
        backdropFilter: "blur(5px)"
      }}
    >
      {playing ? <FaMusic size={20} /> : <FaVolumeMute size={20} />}
    </button>
  );
}