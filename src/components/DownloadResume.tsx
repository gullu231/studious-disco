import React, { useRef } from "react";

const DownloadResume: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/click.mp3" preload="auto" />
      <a
        href="/resume.pdf"
        download
        className="inline-flex items-center gap-2 px-6 py-3 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
        style={{
          background: 'linear-gradient(90deg, var(--accent) 0%, #bf61ff 100%)',
        }}
        onClick={handleClick}
      >
        <span className="text-xl group-hover:animate-bounce">⬇️</span>
        Download Resume
      </a>
    </>
  );
};

export default DownloadResume;
