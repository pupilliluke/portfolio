import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollProgress from "../Components/ScrollProgress";
import AuroraBackground from "../Components/ui/aurora-background";
import { useTheme } from "../context/ThemeContext";

// Aurora blob palettes, tuned per theme so the background stays subtle.
const DARK_AURORA = [
  "rgba(30, 58, 138, 0.30)", // deep navy
  "rgba(226, 232, 240, 0.10)", // soft white glow
  "rgba(99, 102, 241, 0.20)", // periwinkle indigo
  "rgba(56, 189, 248, 0.14)", // muted sky
  "rgba(51, 65, 85, 0.28)", // faint slate-blue
];

const LIGHT_AURORA = [
  "rgba(59, 130, 246, 0.18)", // soft blue
  "rgba(255, 255, 255, 0.35)", // white glow
  "rgba(129, 140, 248, 0.16)", // periwinkle
  "rgba(56, 189, 248, 0.16)", // sky
  "rgba(203, 213, 225, 0.35)", // light slate
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
