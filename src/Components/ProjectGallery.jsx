import React, { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes, FaExpand } from "react-icons/fa";

/**
 * ProjectGallery
 * A full-size image slideshow that never crops: the active image is shown with
 * object-contain on a framed stage, navigated by arrows / keyboard / thumbnails,
 * and expandable into a true full-screen lightbox.
 */
const ProjectGallery = ({ images = [], title = "" }) => {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const count = images.length;
  const hasMany = count > 1;

  const go = useCallback(
    (dir) => setCurrent((i) => (i + dir + count) % count),
    [count]
  );

  const select = useCallback((i) => setCurrent(i), []);

  // Keyboard navigation (global while a gallery/lightbox is active)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  // Lock body scroll while lightbox is open
  useEffect(() => {
    if (lightbox) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [lightbox]);

  if (count === 0) return null;

  const active = images[current];

  return (
    <div className="mb-16">
      {/* Stage */}
      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-blue-400/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

        <div className="relative rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-slate-900/60 backdrop-blur-sm shadow-xl overflow-hidden">
          {/* Contained image — never cropped */}
          <button
            type="button"
            onClick={() => setLightbox(true)}
            className="block w-full cursor-zoom-in"
            aria-label="Expand image to full screen"
          >
            <img
              src={active}
              alt={`${title} screenshot ${current + 1}`}
              className="w-full max-h-[72vh] object-contain mx-auto select-none transition-opacity duration-300"
            />
          </button>

          {/* Counter */}
          {hasMany && (
            <div className="absolute top-4 left-4 bg-slate-950/70 backdrop-blur-sm text-slate-700 dark:text-slate-200 text-xs font-mono px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700/50 tabular-nums pointer-events-none">
              {current + 1} / {count}
            </div>
          )}

          {/* Expand hint */}
          <div className="absolute top-4 right-4 bg-slate-950/70 backdrop-blur-sm text-slate-600 dark:text-slate-300 p-2 rounded-full border border-slate-200 dark:border-slate-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <FaExpand className="text-xs" />
          </div>

          {/* Arrows */}
          {hasMany && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-slate-950/60 hover:bg-blue-600/80 text-white border border-slate-200 dark:border-slate-700/50 hover:border-blue-500/50 backdrop-blur-sm transition-all duration-300 hover:scale-110"
              >
                <FaChevronLeft />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-slate-950/60 hover:bg-blue-600/80 text-white border border-slate-200 dark:border-slate-700/50 hover:border-blue-500/50 backdrop-blur-sm transition-all duration-300 hover:scale-110"
              >
                <FaChevronRight />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Thumbnail rail */}
      {hasMany && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2 snap-x">
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => select(i)}
              aria-label={`View image ${i + 1}`}
              aria-current={i === current}
              className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 snap-start transition-all duration-300 ${
                i === current
                  ? "border-blue-500 ring-2 ring-blue-500/30 scale-105"
                  : "border-slate-200 dark:border-slate-700/50 hover:border-slate-500/70 opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10 animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setLightbox(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} image viewer`}
        >
          {/* Close */}
          <button
            type="button"
            onClick={() => setLightbox(false)}
            aria-label="Close viewer"
            className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center rounded-full bg-white/80 dark:bg-slate-800/70 hover:bg-red-600/80 text-white border border-slate-200 dark:border-slate-700/50 transition-all duration-300 hover:scale-110"
          >
            <FaTimes />
          </button>

          {/* Counter */}
          {hasMany && (
            <div className="absolute top-6 left-6 text-slate-600 dark:text-slate-300 text-sm font-mono tabular-nums">
              {current + 1} / {count}
            </div>
          )}

          {/* Full-size image */}
          <img
            src={active}
            alt={`${title} screenshot ${current + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl select-none"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Arrows */}
          {hasMany && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  go(-1);
                }}
                aria-label="Previous image"
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 dark:bg-slate-800/70 hover:bg-blue-600/80 text-white border border-slate-200 dark:border-slate-700/50 transition-all duration-300 hover:scale-110"
              >
                <FaChevronLeft />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  go(1);
                }}
                aria-label="Next image"
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 dark:bg-slate-800/70 hover:bg-blue-600/80 text-white border border-slate-200 dark:border-slate-700/50 transition-all duration-300 hover:scale-110"
              >
                <FaChevronRight />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
