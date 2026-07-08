import React, { useEffect, useState } from "react";

/**
 * ArcGalleryHero
 * Fans an array of images out along a circular arc, then reveals a headline
 * and call-to-action buttons below. Adapted to plain JSX (CRA) and the site's
 * dark slate theme.
 *
 * Props:
 *  - images: string[]                 (required)
 *  - title, subtitle: node            headline + supporting copy
 *  - primaryLabel / onPrimary         main CTA button
 *  - secondaryLabel / onSecondary     secondary CTA button
 *  - startAngle / endAngle            arc sweep in degrees
 *  - radiusLg/Md/Sm                   arc radius per breakpoint
 *  - cardSizeLg/Md/Sm                 card size per breakpoint
 *  - className                        extra classes on the outer section
 */
export const ArcGalleryHero = ({
  images,
  title = "My Work, at a Glance",
  subtitle = "A visual tour through the projects I've designed, built, and shipped.",
  primaryLabel = "Explore Projects",
  onPrimary,
  secondaryLabel = "Get in Touch",
  onSecondary,
  startAngle = 20,
  endAngle = 160,
  radiusLg = 480,
  radiusMd = 360,
  radiusSm = 240,
  cardSizeLg = 130,
  cardSizeMd = 100,
  cardSizeSm = 74,
  className = "",
}) => {
  const [dimensions, setDimensions] = useState({
    radius: radiusLg,
    cardSize: cardSizeLg,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDimensions({ radius: radiusSm, cardSize: cardSizeSm });
      } else if (width < 1024) {
        setDimensions({ radius: radiusMd, cardSize: cardSizeMd });
      } else {
        setDimensions({ radius: radiusLg, cardSize: cardSizeLg });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [radiusLg, radiusMd, radiusSm, cardSizeLg, cardSizeMd, cardSizeSm]);

  const count = Math.max(images.length, 2);
  const step = (endAngle - startAngle) / (count - 1);

  return (
    <section
      className={`relative overflow-hidden text-white min-h-screen flex flex-col ${className}`}
    >
      {/* Arc geometry container */}
      <div
        className="relative mx-auto w-full"
        style={{ height: dimensions.radius * 1.2 }}
      >
        {/* Bottom-center pivot */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
          {images.map((src, i) => {
            const angle = startAngle + step * i;
            const angleRad = (angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * dimensions.radius;
            const y = Math.sin(angleRad) * dimensions.radius;

            return (
              <div
                key={i}
                className="absolute opacity-0 animate-arc-fade-in-up"
                style={{
                  width: dimensions.cardSize,
                  height: dimensions.cardSize,
                  left: `calc(50% + ${x}px)`,
                  bottom: `${y}px`,
                  transform: "translate(-50%, 50%)",
                  animationDelay: `${i * 90}ms`,
                  animationFillMode: "forwards",
                  zIndex: count - i,
                }}
              >
                <div
                  className="rounded-2xl shadow-xl overflow-hidden ring-1 ring-slate-700/60 bg-slate-800 transition-transform duration-300 hover:scale-110 hover:ring-blue-500/60 w-full h-full"
                  style={{ transform: `rotate(${angle / 4 - 22.5}deg)` }}
                >
                  <img
                    src={src}
                    alt={`Project ${i + 1}`}
                    className="block w-full h-full object-cover"
                    draggable={false}
                    onError={(e) => {
                      e.target.src =
                        "https://placehold.co/400x400/1e293b/94a3b8?text=Project";
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Headline + CTA below the arc */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 -mt-40 md:-mt-52 lg:-mt-64">
        <div
          className="text-center max-w-2xl px-6 opacity-0 animate-arc-fade-in"
          style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          <p className="mt-4 text-lg text-slate-300">{subtitle}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onPrimary}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {primaryLabel}
            </button>
            <button
              onClick={onSecondary}
              className="w-full sm:w-auto px-6 py-3 rounded-full border border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white transition-all duration-200"
            >
              {secondaryLabel}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes arc-fade-in-up {
          from { opacity: 0; transform: translate(-50%, 60%); }
          to   { opacity: 1; transform: translate(-50%, 50%); }
        }
        @keyframes arc-fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-arc-fade-in-up {
          animation-name: arc-fade-in-up;
          animation-duration: 0.8s;
          animation-timing-function: ease-out;
        }
        .animate-arc-fade-in {
          animation-name: arc-fade-in;
          animation-duration: 0.8s;
          animation-timing-function: ease-out;
        }
      `}</style>
    </section>
  );
};

export default ArcGalleryHero;
