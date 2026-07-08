import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FiArrowRight } from "react-icons/fi";

/**
 * Gallery4 — a horizontally-scrolling carousel of cards.
 *
 * Adapted from the shadcn/ui "gallery4" block to this project's stack:
 * plain JS + Tailwind 3 (slate dark theme) + react-icons, using
 * embla-carousel-react directly instead of the shadcn Carousel wrapper.
 *
 * @param {Object}   props
 * @param {string}   props.title
 * @param {string}   props.description
 * @param {Array<{id:string,title:string,description:string,href:string,image:string}>} props.items
 */
export const Gallery4 = ({
  title = "Featured Projects",
  description = "",
  items = [],
}) => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    breakpoints: {
      "(max-width: 768px)": { dragFree: true },
    },
  });

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 flex items-end justify-between md:mb-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                {title}
              </span>
            </h2>
            {description && (
              <p className="max-w-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <div
                key={item.id}
                className="min-w-0 shrink-0 grow-0 max-w-[320px] pl-5 lg:max-w-[360px]"
              >
                <a href={item.href} className="group block rounded-xl">
                  <div className="relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700/50 md:aspect-[5/4] lg:aspect-[16/9]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-gradient-to-b from-slate-900/0 via-slate-900/50 to-slate-900/95" />
                    <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                      <div className="flex flex-col items-start rounded-xl bg-slate-950/70 p-5 text-white backdrop-blur-md ring-1 ring-white/10 md:p-6">
                        <div className="mb-2 text-xl font-semibold">
                          {item.title}
                        </div>
                        <div className="mb-6 line-clamp-2 text-sm text-slate-200 md:mb-7">
                          {item.description}
                        </div>
                        <div className="flex items-center text-sm font-medium">
                          Read more
                          <FiArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery4;
