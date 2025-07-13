import React, { useEffect, useRef } from "react";
import { useAccentColor } from "../utils/useAccentColor";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const accent = useAccentColor();

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 24,
        height: 24,
        borderRadius: "50%",
        background: accent,
        pointerEvents: "none",
        zIndex: 99999,
        mixBlendMode: "difference",
        transition: "background 0.2s, transform 0.08s",
        transform: "translate3d(-100px, -100px, 0)",
      }}
    />
  );
};

export default CustomCursor;
