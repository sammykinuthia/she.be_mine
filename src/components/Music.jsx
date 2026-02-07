import { useRef, useState } from "react";
import { FaMusic } from "react-icons/fa";

export default function Music() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!playing) {
      audio.volume = 0;
      audio.play();
      let v = 0;
      const fade = setInterval(() => {
        if (v < 0.6) {
          v += 0.05;
          audio.volume = v;
        } else clearInterval(fade);
      }, 150);
    } else {
      audio.pause();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} src="/love.mp3" loop />
      <button className="music-btn" onClick={toggle}>
        <FaMusic />
      </button>
    </>
  );
}
