import { useEffect, useState } from "react";

export function useAccentColor() {
  const [accent, setAccent] = useState(
    getComputedStyle(document.documentElement).getPropertyValue("--accent") || "#6366f1"
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const newAccent = getComputedStyle(document.documentElement).getPropertyValue("--accent") || "#6366f1";
      setAccent(newAccent.trim());
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["style"] });
    return () => observer.disconnect();
  }, []);

  return accent;
}
