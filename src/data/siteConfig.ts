export type ThemeConfig = {
  primary: string;
  moon: string;
  silver: string;
  jewel: string;
  aura: string;
};

export type NavItem = {
  label: string;
  path: string;
};

export type HeroConfig = {
  name: string;
  title: string;
  intro: string;
  backgroundImage: string;
  mainVisual: string;
  video: string;
  primaryAction: string;
  secondaryAction: string;
};

export type CharacterInfo = {
  name: string;
  title: string;
  attribute: string;
  weapon: string;
  keywords: string[];
  intro: string;
};

export type CharacterImages = {
  mainVisual: string;
  fullFront: string;
  fullBack: string;
  sideView: string;
  halfPortrait: string;
  expressionSheet: string;
  threeView: string;
  outfitDetail: string;
  outfitStructure: string;
  weaponDetail: string;
  handBowDetail: string;
  actionBow: string;
  transparentStand: string;
};

export type DesignSection = {
  title: string;
  image: string;
  description: string;
};

export type SkillConfig = {
  name: string;
  description: string;
  image: string;
};

export type StoryboardShot = {
  id: string;
  title: string;
  video: string;
  image: string;
  description: string;
  assets: string;
};

export type GalleryItem = {
  title: string;
  type: "image" | "video";
  src: string;
  description: string;
};

export type GalleryCategory = {
  name: string;
  items: GalleryItem[];
};

export type CharacterCardPage = {
  title: string;
  src: string;
  description: string;
};

export type SiteConfig = {
  theme: ThemeConfig;
  nav: NavItem[];
  hero: HeroConfig;
  character: {
    info: CharacterInfo;
    images: CharacterImages;
    designSections: DesignSection[];
    skills: SkillConfig[];
  };
  storyboard: StoryboardShot[];
  gallery: GalleryCategory[];
  characterCardPages: CharacterCardPage[];
};

const imagePath = (name: string) => `/assets/images/${name}.png`;
const videoPath = (name: string) => `/assets/videos/${name}.mp4`;
const cardPath = (name: string) => `/assets/character-card/pages/${name}.png`;

const allImageItems: GalleryItem[] = [
  ["背景图", "background", "深蓝星空与月海背景。"],
  ["首页主视觉", "main-visual", "首页首屏主图。"],
  ["正面全身", "full-front", "角色正面全身设定。"],
  ["背面图", "full-back", "角色背面服装结构。"],
  ["侧面图", "side-view", "角色侧面轮廓设定。"],
  ["半身肖像", "half-portrait", "角色半身肖像与神性凝视。"],
  ["透明背景立绘", "transparent-stand", "可用于合成的透明背景立绘。"],
  ["表情表", "expression-sheet", "角色表情变化参考。"],
  ["三视图", "three-view", "正侧背结构参考。"],
  ["服装细节", "outfit-detail", "礼装材质、纹样与宝石饰件。"],
  ["服装结构", "outfit-structure", "服装层次和剪裁结构。"],
  ["发型神环", "hairstyle-halo", "发型、头饰与神环结构。"],
  ["鞋履细节", "shoes-detail", "足部与裙摆下缘设计。"],
  ["武器细节", "weapon-detail", "银月星弓造型与宝石核心。"],
  ["手部弓细节", "hand-bow-detail", "手部持弓与弓弦细节。"],
  ["张弓动作", "action-bow", "战斗姿态与动作线。"],
  ["技能蓄力", "skill-charge", "月弦蓄光技能图。"],
  ["星雨降临", "skill-star-rain", "大招星雨爆发画面。"],
  ["月辉结界", "skill-barrier", "防护结界技能图。"],
].map(([title, name, description]) => ({
  title,
  type: "image",
  src: imagePath(name),
  description,
}));

const allVideoItems: GalleryItem[] = [
  ["01 月海开场", "01-opening-walk", "整体氛围与月海世界开场。"],
  ["02 星翼起飞", "05-fly-up", "正面星翼展开，建立角色完整形象。"],
  ["03 中景登场", "02-main-intro", "停步持弓，展示角色姿态与武器轮廓。"],
  ["04 半身肖像", "03-portrait", "神性凝视，强化角色气质。"],
  ["05 服装细节", "08-Clothing-Details", "礼装衣摆、腰封与宝石饰件特写镜头。"],
  ["06 武器特写", "04-weapon", "弓与手部特写镜头。"],
  ["07 张弓蓄力", "06-bow-charge", "空中张弓蓄力瞄准镜头。"],
  ["08 星雨爆发", "07-star-rain", "星雨降临技能爆发镜头。"],
].map(([title, name, description]) => ({
  title,
  type: "video",
  src: videoPath(name),
  description,
}));

export const defaultSiteConfig: SiteConfig = {
  theme: {
    primary: "#2f80ff",
    moon: "#f4fbff",
    silver: "#bfd0e6",
    jewel: "#25c7ff",
    aura: "#9b8cff",
  },
  nav: [
    { label: "首页", path: "/" },
    { label: "角色设定", path: "/character" },
    { label: "PV分镜", path: "/storyboard" },
    { label: "素材图库", path: "/gallery" },
    { label: "角色卡", path: "/character-card" },
  ],
  hero: {
    name: "月光弓手女神",
    title: "银月圣弦的星海守望者",
    intro:
      "她自月海尽头踏光而来，银白神环映照星翼，以宝石蓝长弓守护夜幕下的愿望。每一次拉弦，都是月光与星雨共同降临的神谕。",
    backgroundImage: imagePath("background"),
    mainVisual: imagePath("main-visual"),
    video: videoPath("01-opening-walk"),
    primaryAction: "观看PV",
    secondaryAction: "查看角色卡",
  },
  character: {
    info: {
      name: "月光弓手女神",
      title: "银月圣弦的星海守望者",
      attribute: "月 / 星 / 神圣",
      weapon: "银月星弓",
      keywords: ["月海", "星翼", "神环", "银白长弓", "宝石蓝光辉"],
      intro:
        "诞生于月潮与星尘交汇处的守望者，外表静谧温柔，却拥有贯穿夜空的精准意志。她以月光凝成弓弦，将迷途的灵魂引回星海。",
    },
    images: {
      mainVisual: imagePath("main-visual"),
      fullFront: imagePath("full-front"),
      fullBack: imagePath("full-back"),
      sideView: imagePath("side-view"),
      halfPortrait: imagePath("half-portrait"),
      expressionSheet: imagePath("expression-sheet"),
      threeView: imagePath("three-view"),
      outfitDetail: imagePath("outfit-detail"),
      outfitStructure: imagePath("outfit-structure"),
      weaponDetail: imagePath("weapon-detail"),
      handBowDetail: imagePath("hand-bow-detail"),
      actionBow: imagePath("action-bow"),
      transparentStand: imagePath("transparent-stand"),
    },
    designSections: [
      {
        title: "服装设定",
        image: imagePath("outfit-detail"),
        description: "礼装以深蓝夜幕为底，银白织纹沿腰线与裙摆展开，宝石蓝饰片强调肩颈、腰封与弓箭动作线。",
      },
      {
        title: "服装结构",
        image: imagePath("outfit-structure"),
        description: "结构图用于展示外层披帛、腰封、裙摆层次和银白装饰件的组合关系。",
      },
      {
        title: "头饰神环设定",
        image: imagePath("hairstyle-halo"),
        description: "神环悬浮于发冠之后，由新月弧线、星点与细小棱晶组成，会随情绪产生银蓝光晕。",
      },
      {
        title: "武器设定",
        image: imagePath("weapon-detail"),
        description: "银月星弓由弧月形弓臂、悬浮宝石核心和半透明弓弦组成，蓄力时箭矢由星雨凝聚成型。",
      },
    ],
    skills: [
      {
        name: "月弦蓄光",
        description: "拉弓时吸收周围月辉，将下一发星箭转化为高穿透光束。",
        image: imagePath("skill-charge"),
      },
      {
        name: "星雨降临",
        description: "向天空释放圣弦，召来连续坠落的银蓝星雨覆盖战场。",
        image: imagePath("skill-star-rain"),
      },
      {
        name: "月辉结界",
        description: "展开半透明月相护盾，为队友抵挡冲击并净化黑暗侵蚀。",
        image: imagePath("skill-barrier"),
      },
    ],
  },
  storyboard: [
    {
      id: "01",
      title: "月海开场・远处走来",
      video: videoPath("01-opening-walk"),
      image: imagePath("background"),
      description: "镜头从低角度掠过银白月海，远处身影踩着光路缓缓走近。",
      assets: "月海背景、主视觉剪影、星尘粒子、开场环境音。",
    },
    {
      id: "02",
      title: "正面星翼・整体形象建立",
      video: videoPath("05-fly-up"),
      image: imagePath("full-front"),
      description: "正面构图中星翼展开，角色离开水面，完整呈现月光弓手的神圣轮廓。",
      assets: "正面全身图、星翼、月海水面、升空光效。",
    },
    {
      id: "03",
      title: "中景登场・停步持弓",
      video: videoPath("02-main-intro"),
      image: imagePath("main-visual"),
      description: "角色在画面中央停步，衣摆与星翼轻轻浮动，长弓从侧后方显现。",
      assets: "主视觉图、透明立绘、银月星弓、轻风与布料动画。",
    },
    {
      id: "04",
      title: "半身肖像・神性凝视",
      video: videoPath("03-portrait"),
      image: imagePath("half-portrait"),
      description: "半身近景推进，神环亮起，眼神从宁静转为坚定。",
      assets: "半身肖像、表情设定、神环发光层、瞳孔高光。",
    },
    {
      id: "05",
      title: "服装细节・衣摆与饰件特写",
      video: videoPath("08-Clothing-Details"),
      image: imagePath("outfit-detail"),
      description: "镜头贴近礼装层次，展示银白织纹、宝石蓝饰片、腰封与轻纱衣摆的流动细节。",
      assets: "服装细节图、服装结构图、衣摆材质、宝石饰件、细节 PV 视频。",
    },
    {
      id: "06",
      title: "武器细节・弓与手部特写",
      video: videoPath("04-weapon"),
      image: imagePath("hand-bow-detail"),
      description: "切到手部与弓身特写，宝石核心启动，弓弦凝成一线月光。",
      assets: "武器细节、手部动作、宝石蓝发光、弓弦粒子。",
    },
    {
      id: "07",
      title: "空中张弓・蓄力瞄准",
      video: videoPath("06-bow-charge"),
      image: imagePath("action-bow"),
      description: "角色悬停空中张弓，镜头绕肩侧旋转，箭尖锁定远方暗影。",
      assets: "张弓动作图、蓄力技能、镜头环绕、目标锁定光线。",
    },
    {
      id: "08",
      title: "技能爆发・星雨降临",
      video: videoPath("07-star-rain"),
      image: imagePath("skill-star-rain"),
      description: "星箭射入云层后爆开，银蓝星雨从天穹倾泻而下。",
      assets: "星雨技能图、爆发光效、天空背景、粒子拖尾。",
    },
  ],
  gallery: [
    { name: "全部图片", items: allImageItems },
    { name: "全部视频", items: allVideoItems },
    { name: "主视觉", items: allImageItems.filter((item) => ["背景图", "首页主视觉"].includes(item.title)) },
    {
      name: "角色设定",
      items: allImageItems.filter((item) =>
        ["正面全身", "背面图", "侧面图", "半身肖像", "透明背景立绘", "表情表", "三视图"].includes(item.title),
      ),
    },
    {
      name: "服装",
      items: allImageItems.filter((item) => ["服装细节", "服装结构", "发型神环", "鞋履细节"].includes(item.title)),
    },
    {
      name: "武器",
      items: allImageItems.filter((item) => ["武器细节", "手部弓细节", "张弓动作"].includes(item.title)),
    },
    {
      name: "技能",
      items: allImageItems.filter((item) => ["技能蓄力", "星雨降临", "月辉结界"].includes(item.title)),
    },
    { name: "背景", items: allImageItems.filter((item) => item.title === "背景图") },
    { name: "PV视频", items: allVideoItems },
  ],
  characterCardPages: [
    ["01 封面", "character-card-01-cover", "角色卡封面。"],
    ["02 视觉识别", "character-card-02-visual-identity", "角色视觉识别与主题气质。"],
    ["03 三视图", "character-card-03-turnaround", "角色正侧背转面设定。"],
    ["04 表情设定", "character-card-04-face-expression", "表情与面部细节。"],
    ["05 服装设计", "character-card-05-costume-design", "服装结构与局部设计。"],
    ["06 武器设计", "character-card-06-weapon-design", "银月星弓与持弓细节。"],
    ["07 技能系统", "character-card-07-skill-system", "技能表现与战斗视觉。"],
    ["08 世界制作", "character-card-08-world-production", "世界观与 PV 制作参考。"],
  ].map(([title, name, description]) => ({
    title,
    src: cardPath(name),
    description,
  })),
};

export const SITE_CONFIG_STORAGE_KEY = "moon-archer-site-config-v4";
