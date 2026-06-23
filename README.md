# 月光弓手女神 PV 展示网站

第一阶段目标：整理资源路径，保证首页、角色设定、PV 分镜、素材图库、角色卡页面稳定显示。

## 本地运行

```bash
npm install
npm run dev
npm run build
```

如果 Windows PowerShell 拦截 `npm.ps1`，可以改用：

```bash
npm.cmd run dev
npm.cmd run build
```

## 资源目录

图片统一放在：

```text
public/assets/images/
```

PV 视频统一放在：

```text
public/assets/videos/
```

角色卡页面统一放在：

```text
public/assets/character-card/pages/
```

页面引用的路径都来自 `src/data/siteConfig.ts`。首页主视觉使用 `/assets/images/main-visual.png`，首页 PV 使用 `/assets/videos/01-opening-walk.mp4`。

## 角色卡

角色卡页面路径为 `/character-card`，展示：

- `/assets/character-card/pages/character-card-01-cover.png`
- `/assets/character-card/pages/character-card-02-visual-identity.png`
- `/assets/character-card/pages/character-card-03-turnaround.png`
- `/assets/character-card/pages/character-card-04-face-expression.png`
- `/assets/character-card/pages/character-card-05-costume-design.png`
- `/assets/character-card/pages/character-card-06-weapon-design.png`
- `/assets/character-card/pages/character-card-07-skill-system.png`
- `/assets/character-card/pages/character-card-08-world-production.png`

点击任意角色卡可以放大预览。
