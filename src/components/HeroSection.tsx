import { ArrowRight, BadgeInfo, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { SiteConfig } from "../data/siteConfig";
import AssetImage from "./AssetImage";
import VideoPlayer from "./VideoPlayer";

type HeroSectionProps = {
  config: SiteConfig;
};

export default function HeroSection({ config }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <AssetImage src={config.hero.backgroundImage} alt="" className="h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/35" />
      </div>

      <div className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="animate-fadeUp">
          <p className="section-kicker">Moonlit Archer PV</p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            {config.hero.name}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-cyan-100">{config.hero.title}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">{config.hero.intro}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#main-pv"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-5 py-3 font-semibold text-slate-950 shadow-silver-glow transition hover:-translate-y-0.5 hover:bg-white"
            >
              <Play className="h-4 w-4" />
              {config.hero.primaryAction}
            </a>
            <Link
              to="/character-card"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              <BadgeInfo className="h-4 w-4" />
              {config.hero.secondaryAction}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-5 lg:pt-10">
          <div className="relative animate-float">
            <div className="absolute inset-8 rounded-full bg-cyan-300/20 blur-3xl" />
            <AssetImage
              src={config.hero.mainVisual}
              alt={config.hero.name}
              className="relative mx-auto aspect-[4/5] max-h-[650px] w-full max-w-xl rounded-lg object-cover moon-border"
            />
          </div>
          <div id="main-pv" className="scroll-mt-24">
            <VideoPlayer
              src={config.hero.video}
              poster={config.hero.mainVisual}
              title={`${config.hero.name} | ${config.hero.primaryAction}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
