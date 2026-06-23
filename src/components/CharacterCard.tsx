import { Gem, Sparkles } from "lucide-react";
import { SiteConfig } from "../data/siteConfig";
import AssetImage from "./AssetImage";

type CharacterCardProps = {
  character: SiteConfig["character"];
};

export default function CharacterCard({ character }: CharacterCardProps) {
  const { info, images, designSections, skills } = character;

  const imageSpecs = [
    { title: "主图", src: images.mainVisual, alt: `${info.name}主视觉图`, ratio: "aspect-[4/5]" },
    { title: "正面全身", src: images.fullFront, alt: `${info.name}正面全身`, ratio: "aspect-[3/4]" },
    { title: "背面图", src: images.fullBack, alt: `${info.name}背面图`, ratio: "aspect-[3/4]" },
    { title: "侧面图", src: images.sideView, alt: `${info.name}侧面图`, ratio: "aspect-[3/4]" },
    { title: "半身肖像", src: images.halfPortrait, alt: `${info.name}半身肖像`, ratio: "aspect-[4/5]" },
    { title: "表情表", src: images.expressionSheet, alt: `${info.name}表情表`, ratio: "aspect-[4/3]" },
    { title: "三视图", src: images.threeView, alt: `${info.name}三视图`, ratio: "aspect-[4/3]" },
    { title: "透明背景立绘", src: images.transparentStand, alt: `${info.name}透明背景立绘`, ratio: "aspect-[3/4]" },
  ];

  const detailSpecs = [
    { title: "服装细节", src: images.outfitDetail, alt: `${info.name}服装细节` },
    { title: "服装结构", src: images.outfitStructure, alt: `${info.name}服装结构` },
    { title: "武器细节", src: images.weaponDetail, alt: `${info.name}武器细节` },
    { title: "手部弓细节", src: images.handBowDetail, alt: `${info.name}手部弓细节` },
    { title: "张弓动作", src: images.actionBow, alt: `${info.name}张弓动作` },
  ];

  return (
    <div className="grid gap-6">
      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel rounded-lg p-4">
          <AssetImage
            src={images.mainVisual}
            alt={`${info.name}主视觉`}
            className="aspect-[4/5] w-full rounded-md object-cover"
          />
        </div>

        <div className="glass-panel rounded-lg p-5 sm:p-7">
          <p className="section-kicker">Character Profile</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white">{info.name}</h1>
          <p className="mt-2 text-xl text-cyan-100">{info.title}</p>
          <p className="mt-5 leading-8 text-slate-200">{info.intro}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <InfoItem label="属性" value={info.attribute} />
            <InfoItem label="武器" value={info.weapon} />
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
        <h2 className="section-title">基础图片</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {imageSpecs.map((item) => (
            <ImageSpec key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section>
        <p className="section-kicker">Design Details</p>
        <h2 className="section-title">服装 / 武器 / 动作</h2>
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
        <p className="section-kicker">Skill Settings</p>
        <h2 className="section-title">技能图</h2>
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
