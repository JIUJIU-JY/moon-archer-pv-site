import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import {
  defaultSiteConfig,
  SITE_CONFIG_STORAGE_KEY,
  SiteConfig,
} from "../data/siteConfig";

type SiteConfigContextValue = {
  config: SiteConfig;
  setConfig: (nextConfig: SiteConfig) => void;
  saveConfig: () => void;
  resetConfig: () => void;
  importConfig: (nextConfig: SiteConfig) => void;
  exportConfig: () => string;
};

const SiteConfigContext = createContext<SiteConfigContextValue | null>(null);

const cloneConfig = (config: SiteConfig): SiteConfig =>
  JSON.parse(JSON.stringify(config)) as SiteConfig;

const loadStoredConfig = (): SiteConfig => {
  if (typeof window === "undefined") {
    return cloneConfig(defaultSiteConfig);
  }

  const rawConfig = window.localStorage.getItem(SITE_CONFIG_STORAGE_KEY);
  if (!rawConfig) {
    return cloneConfig(defaultSiteConfig);
  }

  try {
    return JSON.parse(rawConfig) as SiteConfig;
  } catch {
    return cloneConfig(defaultSiteConfig);
  }
};

export function SiteConfigProvider({ children }: { children: ReactNode }) {
  const [config, setConfigState] = useState<SiteConfig>(() => loadStoredConfig());

  const value = useMemo<SiteConfigContextValue>(
    () => ({
      config,
      setConfig: (nextConfig) => setConfigState(cloneConfig(nextConfig)),
      saveConfig: () => {
        window.localStorage.setItem(SITE_CONFIG_STORAGE_KEY, JSON.stringify(config, null, 2));
      },
      resetConfig: () => {
        window.localStorage.removeItem(SITE_CONFIG_STORAGE_KEY);
        setConfigState(cloneConfig(defaultSiteConfig));
      },
      importConfig: (nextConfig) => {
        setConfigState(cloneConfig(nextConfig));
        window.localStorage.setItem(
          SITE_CONFIG_STORAGE_KEY,
          JSON.stringify(nextConfig, null, 2),
        );
      },
      exportConfig: () => JSON.stringify(config, null, 2),
    }),
    [config],
  );

  return <SiteConfigContext.Provider value={value}>{children}</SiteConfigContext.Provider>;
}

export function useSiteConfig() {
  const context = useContext(SiteConfigContext);
  if (!context) {
    throw new Error("useSiteConfig must be used inside SiteConfigProvider");
  }

  return context;
}
