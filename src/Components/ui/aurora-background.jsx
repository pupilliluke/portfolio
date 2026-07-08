import React from "react";
import { motion } from "framer-motion";

/**
 * AuroraBackground
 * A living gradient-mesh of slow-drifting, heavily-blurred color blobs.
 * Adapted to plain JSX (CRA) — no shadcn `cn`, no `bg-background`.
 *
 * Custom palette (subtle, over a dark base): deep navy, soft white glow,
 * periwinkle indigo, muted sky, and a faint slate-blue. Low opacities +
 * large blur keep it quietly beautiful rather than loud.
 *
 * Props:
 *  - children            content rendered above the aurora (optional)
 *  - className           extra classes on the outer wrapper
 *  - colors              blob colors (rgba strings); defaults below
 *  - speed               animation speed multiplier (default 1)
 *  - blur                blur radius in px (default 90)
 *  - intensity           blob opacity 0..1 (default 1)
 */
const DEFAULT_COLORS = [
  "rgba(30, 58, 138, 0.30)", // deep navy
  "rgba(226, 232, 240, 0.10)", // soft white glow
  "rgba(99, 102, 241, 0.20)", // periwinkle indigo
  "rgba(56, 189, 248, 0.14)", // muted sky
  "rgba(51, 65, 85, 0.28)", // faint slate-blue
];

function generateBlobs(colors, speed) {
  const c = (i) => colors[i] || DEFAULT_COLORS[i];
  return [
    {
      color: c(0),
      size: "60%",
      initialX: "10%",
      initialY: "-20%",
      xKeyframes: ["10%", "50%", "30%", "70%", "10%"],
      yKeyframes: ["-20%", "10%", "40%", "-10%", "-20%"],
      scaleKeyframes: [1, 1.2, 0.9, 1.1, 1],
      duration: 26 / speed,
    },
    {
      color: c(1),
      size: "55%",
      initialX: "60%",
      initialY: "60%",
      xKeyframes: ["60%", "20%", "80%", "40%", "60%"],
      yKeyframes: ["60%", "20%", "50%", "80%", "60%"],
      scaleKeyframes: [1.1, 0.8, 1.3, 0.9, 1.1],
      duration: 32 / speed,
    },
    {
      color: c(2),
      size: "50%",
      initialX: "80%",
      initialY: "-10%",
      xKeyframes: ["80%", "30%", "60%", "10%", "80%"],
      yKeyframes: ["-10%", "30%", "70%", "40%", "-10%"],
      scaleKeyframes: [0.9, 1.3, 1, 1.2, 0.9],
      duration: 29 / speed,
    },
    {
      color: c(3),
      size: "45%",
      initialX: "30%",
      initialY: "70%",
      xKeyframes: ["30%", "70%", "10%", "50%", "30%"],
      yKeyframes: ["70%", "10%", "30%", "60%", "70%"],
      scaleKeyframes: [1, 1.1, 0.8, 1.2, 1],
      duration: 36 / speed,
    },
    {
      color: c(4),
      size: "65%",
      initialX: "50%",
      initialY: "30%",
      xKeyframes: ["50%", "10%", "70%", "30%", "50%"],
      yKeyframes: ["30%", "60%", "-10%", "50%", "30%"],
      scaleKeyframes: [1.2, 0.9, 1.1, 0.85, 1.2],
      duration: 24 / speed,
    },
  ];
}

export function AuroraBackground({
  children,
  className = "",
  colors = DEFAULT_COLORS,
  speed = 1,
  blur = 90,
  intensity = 1,
}) {
  const blobs = generateBlobs(colors, speed);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      {/* Aurora layer */}
      <div className="absolute inset-0 overflow-hidden">
        {blobs.map((blob, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: blob.size,
              height: blob.size,
              background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
              left: blob.initialX,
              top: blob.initialY,
              opacity: intensity,
              filter: `blur(${blur}px)`,
              willChange: "transform",
            }}
            animate={{
              left: blob.xKeyframes,
              top: blob.yKeyframes,
              scale: blob.scaleKeyframes,
            }}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Content */}
      {children != null && <div className="relative z-10">{children}</div>}
    </div>
  );
}

export default AuroraBackground;
