import { ImageIcon } from "lucide-react";
import { useState } from "react";

type AssetImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
};

export default function AssetImage({
  src,
  alt,
  className = "",
  fallbackClassName = "",
}: AssetImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex min-h-48 items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-cyan-100/75 ${fallbackClassName || className}`}
      >
        <div className="flex flex-col items-center gap-3 px-5 text-center">
          <ImageIcon className="h-8 w-8" />
          <span className="break-all text-xs">{src || "未设置图片路径"}</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
