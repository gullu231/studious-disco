import React, { useEffect, useRef, useState } from "react";

const Typewriter: React.FC<{ text: string; speed?: number; className?: string }> = ({ text, speed = 60, className }) => {
  const [displayed, setDisplayed] = useState("");
  const i = useRef(0);

  useEffect(() => {
    setDisplayed("");
    i.current = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i.current]);
      i.current++;
      if (i.current >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className={className}>{displayed}</span>;
};

export default Typewriter;
