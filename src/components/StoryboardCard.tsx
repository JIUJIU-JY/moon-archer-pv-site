import { Clapperboard } from "lucide-react";
import { StoryboardShot } from "../data/siteConfig";
import AssetImage from "./AssetImage";
import VideoPlayer from "./VideoPlayer";

type StoryboardCardProps = {
  shot: StoryboardShot;
};

export default function StoryboardCard({ shot }: StoryboardCardProps) {
  return (
    <article className="glass-panel grid overflow-hidden rounded-lg lg:grid-cols-[0.92fr_1.08fr]">
      <div className="relative">
        <VideoPlayer src={shot.video} poster={shot.image} title={`${shot.id} ${shot.title}`} className="h-full rounded-none" />
      </div>
      <div className="grid gap-4 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">Shot {shot.id}</p>
            <h2 className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">{shot.title}</h2>
          </div>
          <span className="rounded-full border border-cyan-100/25 bg-cyan-100/10 px-3 py-1 text-xs text-cyan-50">
            PV Shot
          </span>
        </div>
        <p className="leading-7 text-slate-200">{shot.description}</p>
        <div className="rounded-lg border border-white/10 bg-slate-950/35 p-4">
          <div className="flex items-center gap-2 text-cyan-100">
            <Clapperboard className="h-4 w-4" />
            <p className="text-sm font-semibold">Asset Notes</p>
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-300">{shot.assets}</p>
        </div>
        <AssetImage src={shot.image} alt={shot.title} className="aspect-[16/7] w-full rounded-md object-cover" />
      </div>
    </article>
  );
}
