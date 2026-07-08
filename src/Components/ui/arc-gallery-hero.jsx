import React, { useEffect, useState } from "react";

/**
 * ArcGalleryHero
 * Fans a set of cards out along a circular arc, then reveals a headline and
 * call-to-action button below. Plain JSX (CRA) styled for the dark slate theme.
 *
 * Cards can be supplied two ways:
 *  - items:  [{ image, href, title }]   preferred — each card links to `href`
 *  - images: string[]                   simple fallback (no links)
 *
 * Other props:
 *  - title, subtitle
 *  - primaryLabel / onPrimary           main CTA (rendered only if label set)
 *  - secondaryLabel / onSecondary       secondary CTA (rendered only if both set)
 *  - startAngle / endAngle              arc sweep in degrees
 *  - radiusLg/Md/Sm, cardSizeLg/Md/Sm   geometry per breakpoint
 *  - className                          extra classes on the outer section
 */
export const ArcGalleryHero = ({
  items,
  images,
  title = "My Work, at a Glance",
  subtitle = "A tour through the projects I've designed, built, and shipped.",
  primaryLabel = "Explore Projects",
  onPrimary,
  secondaryLabel,
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
  const [hovered, setHovered] = useState(null);

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

  // Normalize inputs to a common card shape.
  const cards = (items && items.length
    ? items
    : (images || []).map((src) => ({ image: src }))
  ).filter((c) => c && c.image);

  const count = Math.max(cards.length, 2);
  const step = (endAngle - startAngle) / (count - 1);

  // Only render the headline / CTA block when there's something to show.
  const hasContent = Boolean(
    title || subtitle || primaryLabel || (secondaryLabel && onSecondary)
  );

  return (
    <section
      className={`relative overflow-hidden text-slate-900 dark:text-white flex flex-col ${
        hasContent ? "min-h-screen" : ""
      } ${className}`}
    >
      {/* Arc geometry container */}
      <div
        className="relative mx-auto w-full"
        style={{ height: dimensions.radius * 1.2 }}
      >
        {/* Bottom-center pivot */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
          {cards.map((card, i) => {
            const angle = startAngle + step * i;
            const angleRad = (angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * dimensions.radius;
            const y = Math.sin(angleRad) * dimensions.radius;
            const isHovered = hovered === i;

            const inner = (
              <div
                className="rounded-2xl shadow-xl overflow-hidden ring-1 ring-slate-300 dark:ring-slate-700/60 bg-white dark:bg-slate-800 w-full h-full transition-transform duration-300"
                style={{
                  transform: `rotate(${angle / 4 - 22.5}deg) scale(${
                    isHovered ? 1.15 : 1
                  })`,
                }}
              >
                <img
                  src={card.image}
                  alt={card.title || `Project ${i + 1}`}
                  className="block w-full h-full object-cover"
                  draggable={false}
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/400x400/1e293b/94a3b8?text=Project";
                  }}
                />
              </div>
            );

            const commonProps = {
              onMouseEnter: () => setHovered(i),
              onMouseLeave: () => setHovered((h) => (h === i ? null : h)),
              className:
                "absolute opacity-0 animate-arc-fade-in-up cursor-pointer",
              style: {
                width: dimensions.cardSize,
                height: dimensions.cardSize,
                left: `calc(50% + ${x}px)`,
                bottom: `${y}px`,
                transform: "translate(-50%, 50%)",
                animationDelay: `${i * 90}ms`,
                animationFillMode: "forwards",
                // Hovered card jumps above its overlapping neighbors.
                zIndex: isHovered ? 999 : count - i,
              },
            };

            return card.href ? (
              <a key={i} href={card.href} title={card.title} {...commonProps}>
                {inner}
              </a>
            ) : (
              <div key={i} {...commonProps}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>

      {/* Headline + CTA below the arc */}
      {hasContent && (
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
          {subtitle && <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{subtitle}</p>}
          {(primaryLabel || (secondaryLabel && onSecondary)) && (
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              {primaryLabel && (
                <button
                  onClick={onPrimary}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {primaryLabel}
                </button>
              )}
              {secondaryLabel && onSecondary && (
                <button
                  onClick={onSecondary}
                  className="w-full sm:w-auto px-6 py-3 rounded-full border border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-800 hover:text-white transition-all duration-200"
                >
                  {secondaryLabel}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      )}

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
