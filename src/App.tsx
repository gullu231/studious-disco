import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  Connect,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";
import React, { useState } from "react";
import EasterEggConfetti from "./components/EasterEggConfetti";
import AnimatedBackground from "./components/AnimatedBackground";
import CustomCursor from "./components/CustomCursor";
import ThemeToggle from "./components/ThemeToggle";
import AccentColorPicker from "./components/AccentColorPicker";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [egg, setEgg] = useState(false);
  const typedRef = React.useRef('');

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      typedRef.current = (typedRef.current + e.key).slice(-3);
      if (typedRef.current.toLowerCase() === 'wow') {
        setEgg(true);
        setTimeout(() => setEgg(false), 2000);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const handleThemeToggle = () => setIsDark((d) => !d);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <AnimatedBackground />
        <CustomCursor />
        <ThemeToggle onToggle={handleThemeToggle} isDark={isDark} />
        <AccentColorPicker />
        <EasterEggConfetti show={egg} />
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Connect />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
