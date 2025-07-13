import React from "react";

const ConfettiSVG = () => (
  <svg width="100vw" height="100vh" style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999 }}>
    {[...Array(80)].map((_, i) => (
      <circle
        key={i}
        cx={Math.random() * window.innerWidth}
        cy={Math.random() * window.innerHeight}
        r={Math.random() * 6 + 2}
        fill={`hsl(${Math.random() * 360}, 80%, 60%)`}
        opacity={0.7}
      />
    ))}
  </svg>
);

const EasterEggConfetti: React.FC<{ show: boolean }> = ({ show }) => {
  if (!show) return null;
  return <ConfettiSVG />;
};

export default EasterEggConfetti;
