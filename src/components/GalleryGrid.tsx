import { Film, ImageIcon, X } from "lucide-react";
import { useState } from "react";
import { GalleryCategory, GalleryItem } from "../data/siteConfig";
import AssetImage from "./AssetImage";
import VideoPlayer from "./VideoPlayer";

type GalleryGridProps = {
  categories: GalleryCategory[];
};

export default function GalleryGrid({ categories }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.name ?? "");
  const [previewItem, setPreviewItem] = useState<GalleryItem | null>(null);

  const visibleCategory = categories.find((category) => category.name === activeCategory) ?? categories[0];

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-3">
        {categories.map((category) => (
          <button
            key={category.name}
            type="button"
            onClick={() => setActiveCategory(category.name)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm transition ${
              visibleCategory?.name === category.name
                ? "bg-cyan-100 text-slate-950 shadow-silver-glow"
                : "border border-white/10 bg-white/10 text-slate-100 hover:bg-white/15"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleCategory?.items.map((item) => (
          <button
            key={`${item.type}-${item.src}`}
            type="button"
            onClick={() => setPreviewItem(item)}
            className="glass-panel group overflow-hidden rounded-lg text-left transition hover:-translate-y-1 hover:border-cyan-100/45"
          >
            <div className="relative">
              {item.type === "image" ? (
                <AssetImage src={item.src} alt={item.title} className="aspect-[4/3] w-full object-cover" />
              ) : (
                <video className="aspect-[4/3] w-full object-cover" muted loop playsInline preload="metadata">
                  <source src={item.src} type="video/mp4" />
                </video>
              )}
              <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-slate-950/70 p-2 text-cyan-50 backdrop-blur">
                {item.type === "image" ? <ImageIcon className="h-4 w-4" /> : <Film className="h-4 w-4" />}
              </div>
            </div>
            <div className="p-4">
              <h2 className="font-display text-lg font-semibold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
              <p className="mt-3 break-all text-xs text-cyan-100/70">{item.src}</p>
            </div>
          </button>
        ))}
      </div>

      {previewItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-xl">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-lg border border-white/15 bg-slate-950 shadow-glow">
            <button
              className="absolute right-4 top-4 z-10 icon-button bg-slate-950/80"
              type="button"
              onClick={() => setPreviewItem(null)}
              title="关闭预览"
            >
              <X className="h-5 w-5" />
            </button>
            {previewItem.type === "image" ? (
              <AssetImage
                src={previewItem.src}
                alt={previewItem.title}
                className="max-h-[75vh] w-full object-contain"
                fallbackClassName="min-h-[55vh] w-full"
              />
            ) : (
              <VideoPlayer src={previewItem.src} title={previewItem.title} />
            )}
            <div className="border-t border-white/10 p-4">
              <h2 className="font-display text-2xl font-semibold text-white">{previewItem.title}</h2>
              <p className="mt-2 text-slate-300">{previewItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
