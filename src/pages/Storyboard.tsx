import StoryboardCard from "../components/StoryboardCard";
import { useSiteConfig } from "../hooks/useSiteConfig";

export default function Storyboard() {
  const { config } = useSiteConfig();

  return (
    <section className="section-shell">
      <p className="section-kicker">PV Storyboard</p>
      <h1 className="section-title">8 个 PV 分镜</h1>
      <div className="mt-8 grid gap-6">
        {config.storyboard.map((shot) => (
          <StoryboardCard key={shot.id} shot={shot} />
        ))}
      </div>
    </section>
  );
}
