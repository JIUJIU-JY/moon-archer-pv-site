import { Menu, Sparkles, X } from "lucide-react";
import type { CSSProperties } from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSiteConfig } from "../hooks/useSiteConfig";

export default function Layout() {
  const { config } = useSiteConfig();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="starfield min-h-screen text-slate-50"
      style={
        {
          "--theme-primary": config.theme.primary,
          "--theme-moon": config.theme.moon,
          "--theme-silver": config.theme.silver,
          "--theme-jewel": config.theme.jewel,
          "--theme-aura": config.theme.aura,
        } as CSSProperties
      }
    >
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-35">
        <img
          src={config.hero.backgroundImage}
          alt="Moonlit star sea background"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/65 backdrop-blur-2xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <NavLink to="/" className="flex items-center gap-3 font-display text-lg font-semibold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-100/40 bg-white/10 text-cyan-100 shadow-silver-glow">
              <Sparkles className="h-4 w-4" />
            </span>
            <span>{config.hero.name}</span>
          </NavLink>

          <div className="hidden items-center gap-2 md:flex">
            {config.nav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm transition ${
                    isActive
                      ? "bg-cyan-100 text-slate-950 shadow-silver-glow"
                      : "text-slate-200 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button className="icon-button md:hidden" onClick={() => setIsOpen((value) => !value)} type="button">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {isOpen && (
          <div className="border-t border-white/10 px-4 py-3 md:hidden">
            <div className="grid gap-2">
              {config.nav.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm ${
                      isActive ? "bg-cyan-100 text-slate-950" : "bg-white/5 text-slate-100"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
