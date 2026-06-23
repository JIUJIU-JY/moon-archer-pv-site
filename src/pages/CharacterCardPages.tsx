import { X } from "lucide-react";
import { useState } from "react";
import AssetImage from "../components/AssetImage";
import { CharacterCardPage } from "../data/siteConfig";
import { useSiteConfig } from "../hooks/useSiteConfig";

export default function CharacterCardPages() {
  const { config } = useSiteConfig();
  const [preview, setPreview] = useState<CharacterCardPage | null>(null);

  return (
    <section className="section-shell">
      <p className="section-kicker">Character Card</p>
      <h1 className="section-title">角色卡页面</h1>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {config.characterCardPages.map((page) => (
          <button
            key={page.src}
            type="button"
            onClick={() => setPreview(page)}
            className="glass-panel overflow-hidden rounded-lg text-left transition hover:-translate-y-1 hover:border-cyan-100/45"
          >
            <AssetImage src={page.src} alt={page.title} className="aspect-[3/4] w-full object-cover" />
            <div className="border-t border-white/10 p-4">
              <h2 className="font-display text-lg font-semibold text-white">{page.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{page.description}</p>
              <p className="mt-3 break-all text-xs text-cyan-100/70">{page.src}</p>
            </div>
          </button>
        ))}
      </div>

      {preview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-xl">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-lg border border-white/15 bg-slate-950 shadow-glow">
            <button
              className="absolute right-4 top-4 z-10 icon-button bg-slate-950/80"
              type="button"
              onClick={() => setPreview(null)}
              title="关闭预览"
            >
              <X className="h-5 w-5" />
            </button>
            <AssetImage
              src={preview.src}
              alt={preview.title}
              className="max-h-[82vh] w-full object-contain"
              fallbackClassName="min-h-[55vh] w-full"
            />
            <div className="border-t border-white/10 p-4">
              <h2 className="font-display text-2xl font-semibold text-white">{preview.title}</h2>
              <p className="mt-2 text-slate-300">{preview.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
