import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollProgress from "../Components/ScrollProgress";
import AuroraBackground from "../Components/ui/aurora-background";
import { useTheme } from "../context/ThemeContext";

// Aurora blob palettes, tuned per theme so the background stays subtle.
const DARK_AURORA = [
  "rgba(37, 99, 235, 0.55)", // deep blue
  "rgba(226, 232, 240, 0.18)", // soft white glow
  "rgba(99, 102, 241, 0.45)", // periwinkle indigo
  "rgba(56, 189, 248, 0.35)", // sky
  "rgba(71, 85, 105, 0.50)", // slate-blue
];

const LIGHT_AURORA = [
  "rgba(59, 130, 246, 0.40)", // blue
  "rgba(255, 255, 255, 0.45)", // white glow
  "rgba(129, 140, 248, 0.38)", // periwinkle
  "rgba(56, 189, 248, 0.38)", // sky
  "rgba(148, 163, 184, 0.45)", // slate
];

const MainLayout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-white transition-colors duration-300">
      {/* Global aurora background — fixed behind every page, part of the page itself */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <AuroraBackground
          className="relative h-full w-full"
          colors={theme === "dark" ? DARK_AURORA : LIGHT_AURORA}
          speed={0.8}
          blur={100}
        />
      </div>

      <div className="relative z-10">
        <ScrollProgress />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
