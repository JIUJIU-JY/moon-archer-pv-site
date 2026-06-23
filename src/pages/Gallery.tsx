import GalleryGrid from "../components/GalleryGrid";
import { useSiteConfig } from "../hooks/useSiteConfig";

export default function Gallery() {
  const { config } = useSiteConfig();

  return (
    <section className="section-shell">
      <p className="section-kicker">Asset Library</p>
      <h1 className="section-title">素材图库</h1>
      <div className="mt-8">
        <GalleryGrid categories={config.gallery} />
      </div>
    </section>
  );
}
