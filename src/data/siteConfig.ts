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
  ["Moonlit Sea", "background", "Deep blue sky, moonlit sea, and starfield atmosphere."],
  ["Main Visual", "main-visual", "Primary key art for the hero section."],
  ["Full Front", "full-front", "Full-body front view."],
  ["Full Back", "full-back", "Back view and costume silhouette."],
  ["Side View", "side-view", "Side profile reference."],
  ["Half Portrait", "half-portrait", "Portrait framing and divine gaze."],
  ["Transparent Standee", "transparent-stand", "Transparent character standee for composition work."],
  ["Expression Sheet", "expression-sheet", "Facial expression reference."],
  ["Three View", "three-view", "Front, side, and back structure reference."],
  ["Costume Detail", "outfit-detail", "Fabric, gem ornaments, and layered dress detail."],
  ["Costume Structure", "outfit-structure", "Layering, sash, and silhouette construction."],
  ["Halo Hair", "hairstyle-halo", "Hair, headpiece, and divine halo design."],
  ["Shoes Detail", "shoes-detail", "Footwear and lower hem reference."],
  ["Weapon Detail", "weapon-detail", "Silver Moon Bow structure and gem core."],
  ["Hand Bow Detail", "hand-bow-detail", "Hand pose, bow grip, and string detail."],
  ["Bow Action", "action-bow", "Combat pose and aiming line."],
  ["Skill Charge", "skill-charge", "Moon-string charging effect."],
  ["Star Rain", "skill-star-rain", "Ultimate star-rain burst."],
  ["Lunar Barrier", "skill-barrier", "Protective lunar barrier effect."],
].map(([title, name, description]) => ({
  title,
  type: "image",
  src: imagePath(name),
  description,
}));

const allVideoItems: GalleryItem[] = [
  ["01 Moon Sea Opening", "01-opening-walk", "World-scale opening shot."],
  ["02 Winged Ascent", "05-fly-up", "Full character reveal with star wings."],
  ["03 Main Entrance", "02-main-intro", "Mid shot with bow silhouette."],
  ["04 Divine Portrait", "03-portrait", "Portrait shot for character presence."],
  ["05 Costume Detail", "08-Clothing-Details", "Dress, sash, and jewel close-ups."],
  ["06 Weapon Close-Up", "04-weapon", "Bow and hand detail shot."],
  ["07 Bow Charge", "06-bow-charge", "Aerial aiming and charge shot."],
  ["08 Star Rain Burst", "07-star-rain", "Final skill burst sequence."],
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
    { label: "Home", path: "/" },
    { label: "Character", path: "/character" },
    { label: "PV Shots", path: "/storyboard" },
    { label: "Gallery", path: "/gallery" },
    { label: "Art Book", path: "/character-card" },
  ],
  hero: {
    name: "Moonlit Archer Goddess",
    title: "Silver Moonstring Guardian of the Star Sea",
    intro:
      "A sacred archer born from moonlight and stardust, carrying a jewel-blue bow across the quiet sea of night.",
    backgroundImage: imagePath("background"),
    mainVisual: imagePath("main-visual"),
    video: videoPath("01-opening-walk"),
    primaryAction: "Preview Gallery",
    secondaryAction: "View Art Book",
  },
  character: {
    info: {
      name: "Moonlit Archer Goddess",
      title: "Silver Moonstring Guardian of the Star Sea",
      attribute: "Moon / Star / Divine",
      weapon: "Silver Moon Bow",
      keywords: ["Moon Sea", "Star Wings", "Halo", "Silver Bow", "Jewel Blue"],
      intro:
        "A serene celestial guardian whose bowstring gathers moonlight and releases arrows like falling stars.",
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
        title: "Costume Design",
        image: imagePath("outfit-detail"),
        description: "Deep blue fabric, silver threadwork, translucent layers, and jewel accents.",
      },
      {
        title: "Costume Structure",
        image: imagePath("outfit-structure"),
        description: "Layered sash, flowing veil, skirt volume, and ornament placement.",
      },
      {
        title: "Halo Design",
        image: imagePath("hairstyle-halo"),
        description: "A floating lunar halo made of crescent arcs, stars, and crystal fragments.",
      },
      {
        title: "Weapon Design",
        image: imagePath("weapon-detail"),
        description: "A crescent bow with a suspended jewel core and luminous moonstring.",
      },
    ],
    skills: [
      {
        name: "Moonstring Charge",
        description: "Draws in moonlight and turns the next arrow into a piercing beam.",
        image: imagePath("skill-charge"),
      },
      {
        name: "Star Rain",
        description: "Releases a sacred arrow skyward, calling down a field of silver-blue stars.",
        image: imagePath("skill-star-rain"),
      },
      {
        name: "Lunar Veil",
        description: "Unfolds a translucent moon barrier to guard allies and cleanse darkness.",
        image: imagePath("skill-barrier"),
      },
    ],
  },
  storyboard: [
    {
      id: "01",
      title: "Moon Sea Opening",
      video: videoPath("01-opening-walk"),
      image: imagePath("background"),
      description: "A wide establishing shot over the moonlit sea.",
      assets: "Moon sea background, silhouette, stardust, ambient opening sound.",
    },
    {
      id: "02",
      title: "Winged Full Reveal",
      video: videoPath("05-fly-up"),
      image: imagePath("full-front"),
      description: "The star wings unfold as the full character silhouette rises.",
      assets: "Full front art, star wings, water surface, lift glow.",
    },
    {
      id: "03",
      title: "Main Entrance",
      video: videoPath("02-main-intro"),
      image: imagePath("main-visual"),
      description: "She stops at center frame as the bow appears behind her.",
      assets: "Main visual, standee, Silver Moon Bow, cloth motion.",
    },
    {
      id: "04",
      title: "Divine Portrait",
      video: videoPath("03-portrait"),
      image: imagePath("half-portrait"),
      description: "A close portrait shot with halo light and a calm gaze.",
      assets: "Half portrait, expression sheet, halo glow, eye highlight.",
    },
    {
      id: "05",
      title: "Costume Close-Up",
      video: videoPath("08-Clothing-Details"),
      image: imagePath("outfit-detail"),
      description: "Close views of translucent fabric, silver lines, sash, and jewel ornaments.",
      assets: "Costume detail, outfit structure, fabric texture, jewel ornaments.",
    },
    {
      id: "06",
      title: "Weapon Close-Up",
      video: videoPath("04-weapon"),
      image: imagePath("hand-bow-detail"),
      description: "The hand, bow body, jewel core, and moonstring come into focus.",
      assets: "Weapon detail, hand pose, blue gem glow, bowstring particles.",
    },
    {
      id: "07",
      title: "Bow Charge",
      video: videoPath("06-bow-charge"),
      image: imagePath("action-bow"),
      description: "She aims in midair as the arrow locks onto the distant shadow.",
      assets: "Action pose, charge skill, orbiting camera, targeting glow.",
    },
    {
      id: "08",
      title: "Star Rain Burst",
      video: videoPath("07-star-rain"),
      image: imagePath("skill-star-rain"),
      description: "The arrow breaks into a cascade of silver-blue starlight.",
      assets: "Star Rain skill art, burst effect, sky background, particle trails.",
    },
  ],
  gallery: [
    { name: "All Images", items: allImageItems },
    { name: "All Videos", items: allVideoItems },
    { name: "Key Visual", items: allImageItems.filter((item) => ["Moonlit Sea", "Main Visual"].includes(item.title)) },
    {
      name: "Character",
      items: allImageItems.filter((item) =>
        ["Full Front", "Full Back", "Side View", "Half Portrait", "Transparent Standee", "Expression Sheet", "Three View"].includes(item.title),
      ),
    },
    {
      name: "Costume",
      items: allImageItems.filter((item) => ["Costume Detail", "Costume Structure", "Halo Hair", "Shoes Detail"].includes(item.title)),
    },
    {
      name: "Weapon",
      items: allImageItems.filter((item) => ["Weapon Detail", "Hand Bow Detail", "Bow Action"].includes(item.title)),
    },
    {
      name: "Skills",
      items: allImageItems.filter((item) => ["Skill Charge", "Star Rain", "Lunar Barrier"].includes(item.title)),
    },
    { name: "Background", items: allImageItems.filter((item) => item.title === "Moonlit Sea") },
    { name: "PV Videos", items: allVideoItems },
  ],
  characterCardPages: [
    ["01 Cover", "character-card-01-cover", "Art book cover."],
    ["02 Visual Identity", "character-card-02-visual-identity", "Visual identity and mood guide."],
    ["03 Turnaround", "character-card-03-turnaround", "Front, side, and back character view."],
    ["04 Face Expression", "character-card-04-face-expression", "Face and expression references."],
    ["05 Costume Design", "character-card-05-costume-design", "Costume structure and detail design."],
    ["06 Weapon Design", "character-card-06-weapon-design", "Silver Moon Bow and grip detail."],
    ["07 Skill System", "character-card-07-skill-system", "Skill visual language and combat effects."],
    ["08 World Production", "character-card-08-world-production", "World, mood, and PV production notes."],
  ].map(([title, name, description]) => ({
    title,
    src: cardPath(name),
    description,
  })),
};

export const SITE_CONFIG_STORAGE_KEY = "moon-archer-site-config-v5";
