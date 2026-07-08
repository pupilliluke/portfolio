// src/Components/EntryScreen.jsx
// Full-screen spiral "entry" splash shown on first site load. Adapted from the
// provided demo.tsx: instead of navigating to an external site, "Enter" dismisses
// the overlay to reveal the page underneath.
import { useState, useEffect } from "react";
import { SpiralAnimation } from "./ui/spiral-animation";

const EntryScreen = ({ onEnter }) => {
  const [startVisible, setStartVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  // Fade in the start button after the animation loads
  useEffect(() => {
    const timer = setTimeout(() => setStartVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    if (leaving) return;
    setLeaving(true);
    // Let the fade-out play before unmounting
    setTimeout(() => onEnter && onEnter(), 700);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] w-full h-full overflow-hidden bg-black transition-opacity duration-700 ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Spiral Animation */}
      <div className="absolute inset-0">
        <SpiralAnimation />
      </div>

      {/* Elegant text button with pulsing effect */}
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-1000 ease-out ${
          startVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <button
          onClick={handleEnter}
          className="text-white text-2xl tracking-[0.2em] uppercase font-extralight transition-all duration-700 hover:tracking-[0.3em] animate-pulse"
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default EntryScreen;
