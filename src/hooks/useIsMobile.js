import { useEffect, useState } from "react";

/**
 * Returns true when the viewport matches a mobile-width media query.
 * Used to swap heavy animated/WebGL/canvas backgrounds for lightweight
 * fallbacks on phones, where they can freeze or crash the browser.
 */
export default function useIsMobile(
  // Narrow screens, plus any touch device up to tablet width (covers phones
  // in landscape, which can report ~930px wide, and iPads).
  query = "(max-width: 768px), (pointer: coarse) and (max-width: 1024px)"
) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches
  );

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const mql = window.matchMedia(query);
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mql.matches);
    // Safari <14 uses addListener/removeListener.
    if (mql.addEventListener) {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    }
    mql.addListener(onChange);
    return () => mql.removeListener(onChange);
  }, [query]);

  return isMobile;
}
