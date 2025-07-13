import React from "react";
import { useSound } from "../utils/useSound";


const ThemeToggle: React.FC<{ onToggle: () => void; isDark: boolean }> = ({ onToggle, isDark }) => {
  const play = useSound("/click.mp3");
  const handleClick = () => {
    play();
    onToggle();
  };
  return (
    <button
      onClick={handleClick}
      className="fixed top-4 right-4 z-50 bg-white/80 dark:bg-black/80 rounded-full p-2 shadow-lg hover:scale-110 transition-all duration-200"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <span role="img" aria-label="Light mode">🌞</span>
      ) : (
        <span role="img" aria-label="Dark mode">🌙</span>
      )}
    </button>
  );
};

export default ThemeToggle;
