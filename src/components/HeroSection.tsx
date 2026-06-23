import { ArrowRight, BadgeInfo, ChevronLeft, ChevronRight, Images, Play } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { GalleryItem, SiteConfig } from "../data/siteConfig";
import AssetImage from "./AssetImage";

type HeroSectionProps = {
  config: SiteConfig;
};

export default function HeroSection({ config }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <AssetImage src={config.hero.backgroundImage} alt="Moonlit sea background" className="h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/82 to-slate-950/35" />
      </div>

      <div className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-8 py-8 lg:grid-cols-[0.56fr_1.44fr] lg:py-10">
        <div className="animate-fadeUp max-w-xl">
          <p className="section-kicker">Moonlit Archer PV</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {config.hero.name}
          </h1>
          <p className="mt-3 max-w-md text-base text-cyan-100 sm:text-lg">{config.hero.title}</p>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300 sm:text-base">{config.hero.intro}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#gallery-preview"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-silver-glow transition hover:-translate-y-0.5 hover:bg-white"
            >
              <Play className="h-4 w-4" />
              {config.hero.primaryAction}
            </a>
            <Link
              to="/character-card"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              <BadgeInfo className="h-4 w-4" />
              {config.hero.secondaryAction}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <FloatingGalleryCards config={config} />
      </div>
    </section>
  );
}

function FloatingGalleryCards({ config }: { config: SiteConfig }) {
  const galleryImages = useMemo(() => {
    const uniqueItems = new Map<string, GalleryItem>();
    config.gallery
      .flatMap((category) => category.items)
      .filter((item) => item.type === "image")
      .forEach((item) => {
        if (!uniqueItems.has(item.src)) {
          uniqueItems.set(item.src, item);
        }
      });

    return Array.from(uniqueItems.values());
  }, [config.gallery]);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = galleryImages[activeIndex] ?? {
    title: config.hero.name,
    type: "image" as const,
    src: config.hero.mainVisual,
    description: config.hero.title,
  };

  const move = (step: number) => {
    setActiveIndex((current) => {
      const total = galleryImages.length || 1;
      return (current + step + total) % total;
    });
  };

  return (
    <div id="gallery-preview" className="relative scroll-mt-24 lg:pt-4">
      <div className="pointer-events-none absolute inset-6 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-5 top-10 hidden h-56 w-40 rotate-6 rounded-lg border border-cyan-100/20 bg-white/10 shadow-glow backdrop-blur md:block" />
      <div className="pointer-events-none absolute -left-5 bottom-28 hidden h-44 w-36 -rotate-6 rounded-lg border border-cyan-100/20 bg-white/10 shadow-glow backdrop-blur md:block" />

      <div className="relative mx-auto max-w-3xl">
        <div className="glass-panel group relative overflow-hidden rounded-lg transition duration-500 hover:-translate-y-2 hover:border-cyan-100/45">
          <AssetImage
            src={activeItem.src}
            alt={activeItem.title}
            className="aspect-[4/5] max-h-[760px] w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/92 via-slate-950/36 to-transparent p-4 sm:p-5">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-100/75">
                  <Images className="h-4 w-4" />
                  Gallery Preview
                </p>
                <h2 className="mt-1 font-display text-xl font-semibold text-white sm:text-2xl">{activeItem.title}</h2>
              </div>
              <div className="flex shrink-0 gap-2">
                <button className="icon-button" type="button" onClick={() => move(-1)} title="Previous image">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button className="icon-button" type="button" onClick={() => move(1)} title="Next image">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex snap-x gap-3 overflow-x-auto pb-3">
          {galleryImages.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative h-24 w-20 shrink-0 snap-start overflow-hidden rounded-lg border transition hover:-translate-y-1 sm:h-28 sm:w-24 ${
                index === activeIndex
                  ? "border-cyan-100 shadow-silver-glow"
                  : "border-white/15 opacity-70 hover:opacity-100"
              }`}
              title={item.title}
            >
              <AssetImage src={item.src} alt={item.title} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
