import { Gem, Sparkles } from "lucide-react";
import { SiteConfig } from "../data/siteConfig";
import AssetImage from "./AssetImage";

type CharacterCardProps = {
  character: SiteConfig["character"];
};

export default function CharacterCard({ character }: CharacterCardProps) {
  const { info, images, designSections, skills } = character;

  const imageSpecs = [
    { title: "Main Visual", src: images.mainVisual, alt: `${info.name} main visual`, ratio: "aspect-[4/5]" },
    { title: "Full Front", src: images.fullFront, alt: `${info.name} full front`, ratio: "aspect-[3/4]" },
    { title: "Full Back", src: images.fullBack, alt: `${info.name} full back`, ratio: "aspect-[3/4]" },
    { title: "Side View", src: images.sideView, alt: `${info.name} side view`, ratio: "aspect-[3/4]" },
    { title: "Half Portrait", src: images.halfPortrait, alt: `${info.name} half portrait`, ratio: "aspect-[4/5]" },
    { title: "Expression Sheet", src: images.expressionSheet, alt: `${info.name} expression sheet`, ratio: "aspect-[4/3]" },
    { title: "Three View", src: images.threeView, alt: `${info.name} three view`, ratio: "aspect-[4/3]" },
    { title: "Transparent Standee", src: images.transparentStand, alt: `${info.name} transparent standee`, ratio: "aspect-[3/4]" },
  ];

  const detailSpecs = [
    { title: "Costume Detail", src: images.outfitDetail, alt: `${info.name} costume detail` },
    { title: "Costume Structure", src: images.outfitStructure, alt: `${info.name} costume structure` },
    { title: "Weapon Detail", src: images.weaponDetail, alt: `${info.name} weapon detail` },
    { title: "Hand Bow Detail", src: images.handBowDetail, alt: `${info.name} hand bow detail` },
    { title: "Bow Action", src: images.actionBow, alt: `${info.name} bow action` },
  ];

  return (
    <div className="grid gap-6">
      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel rounded-lg p-4">
          <AssetImage
            src={images.mainVisual}
            alt={`${info.name} main visual`}
            className="aspect-[4/5] w-full rounded-md object-cover"
          />
        </div>

        <div className="glass-panel rounded-lg p-5 sm:p-7">
          <p className="section-kicker">Character Profile</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white">{info.name}</h1>
          <p className="mt-2 text-xl text-cyan-100">{info.title}</p>
          <p className="mt-5 leading-8 text-slate-200">{info.intro}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <InfoItem label="Attribute" value={info.attribute} />
            <InfoItem label="Weapon" value={info.weapon} />
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {info.keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-cyan-100/25 bg-cyan-100/10 px-3 py-1 text-sm text-cyan-50"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section>
        <p className="section-kicker">Character Images</p>
        <h2 className="section-title">Image Set</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {imageSpecs.map((item) => (
            <ImageSpec key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section>
        <p className="section-kicker">Design Details</p>
        <h2 className="section-title">Costume / Weapon / Action</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {detailSpecs.map((item) => (
            <ImageSpec key={item.title} {...item} ratio="aspect-[4/3]" />
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        {designSections.map((section) => (
          <article key={section.title} className="glass-panel grid gap-4 rounded-lg p-4 sm:grid-cols-[160px_1fr]">
            <AssetImage src={section.image} alt={section.title} className="aspect-square w-full rounded-md object-cover" />
            <div>
              <div className="flex items-center gap-2 text-cyan-100">
                <Sparkles className="h-4 w-4" />
                <h2 className="font-display text-xl font-semibold text-white">{section.title}</h2>
              </div>
              <p className="mt-3 leading-7 text-slate-200">{section.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section>
        <p className="section-kicker">Skill Art</p>
        <h2 className="section-title">Skill Images</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <article key={skill.name} className="glass-panel overflow-hidden rounded-lg">
              <AssetImage src={skill.image} alt={skill.name} className="aspect-[4/3] w-full object-cover" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-cyan-100">
                  <Gem className="h-4 w-4" />
                  <h3 className="font-display text-lg font-semibold text-white">{skill.name}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-200">{skill.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-950/35 p-4">
      <p className="text-xs uppercase tracking-[0.25em] text-cyan-100/70">{label}</p>
      <p className="mt-2 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}

function ImageSpec({
  title,
  src,
  alt,
  ratio,
}: {
  title: string;
  src: string;
  alt: string;
  ratio: string;
}) {
  return (
    <article className="glass-panel overflow-hidden rounded-lg">
      <AssetImage src={src} alt={alt} className={`${ratio} w-full object-cover`} />
      <div className="border-t border-white/10 p-4">
        <h2 className="font-display text-lg font-semibold text-white">{title}</h2>
        <p className="mt-1 break-all text-xs text-slate-300">{src}</p>
      </div>
    </article>
  );
}
