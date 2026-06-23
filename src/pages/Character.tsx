import CharacterCard from "../components/CharacterCard";
import { useSiteConfig } from "../hooks/useSiteConfig";

export default function Character() {
  const { config } = useSiteConfig();

  return (
    <section className="section-shell">
      <p className="section-kicker">Character Design</p>
      <h1 className="section-title">角色设定卡</h1>
      <div className="mt-8">
        <CharacterCard character={config.character} />
      </div>
    </section>
  );
}
