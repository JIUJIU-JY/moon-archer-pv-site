import { SkipForward } from "lucide-react";
import { useState } from "react";
import HeroSection from "../components/HeroSection";
import StoryboardCard from "../components/StoryboardCard";
import { useSiteConfig } from "../hooks/useSiteConfig";

const introVideoSrc = "/assets/videos/moonlight-archer-pv-v1.mp4";

export default function Home() {
  const { config } = useSiteConfig();
  const [introFinished, setIntroFinished] = useState(false);

  if (!introFinished) {
    return (
      <section className="fixed inset-0 z-50 overflow-hidden bg-slate-950">
        <img
          src={config.hero.backgroundImage}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <video
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-25 blur-2xl"
          src={introVideoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,199,255,0.14),rgba(2,6,23,0.42)_42%,rgba(2,6,23,0.92)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 to-transparent" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-14 sm:px-8">
          <div className="relative w-full max-w-[1280px]">
            <div className="absolute -inset-4 rounded-[28px] bg-cyan-300/15 blur-3xl" />
            <div className="absolute -inset-px rounded-2xl border border-cyan-100/25" />
            <video
              className="relative z-10 mx-auto max-h-[78vh] w-full rounded-2xl border border-white/20 bg-slate-950 object-contain shadow-[0_0_80px_rgba(37,199,255,0.24)]"
              src={introVideoSrc}
              autoPlay
              muted
              playsInline
              controls
              preload="auto"
              onEnded={() => setIntroFinished(true)}
              onError={() => setIntroFinished(true)}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIntroFinished(true)}
          className="absolute right-5 top-5 z-20 inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/55 px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/15"
        >
          <SkipForward className="h-4 w-4" />
          Skip
        </button>
      </section>
    );
  }

  return (
    <>
      <HeroSection config={config} />
      <section className="section-shell">
        <p className="section-kicker">PV Preview</p>
        <h2 className="section-title">Moonlit Preview</h2>
        <div className="mt-7 grid gap-6">
          {config.storyboard.slice(0, 2).map((shot) => (
            <StoryboardCard key={shot.id} shot={shot} />
          ))}
        </div>
      </section>
    </>
  );
}
