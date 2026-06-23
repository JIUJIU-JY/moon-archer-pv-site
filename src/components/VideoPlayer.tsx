import { Pause, Play, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type VideoPlayerProps = {
  src: string;
  poster?: string;
  title: string;
  className?: string;
};

export default function VideoPlayer({ src, poster, title, className = "" }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
    setIsPlaying(false);
    videoRef.current?.load();
  }, [src]);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video || hasError) {
      return;
    }

    if (video.paused) {
      await video.play().catch(() => setIsPlaying(false));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMuted = () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const replay = async () => {
    const video = videoRef.current;
    if (!video || hasError) {
      return;
    }

    video.currentTime = 0;
    await video.play().catch(() => setIsPlaying(false));
  };

  return (
    <div
      className={`group relative aspect-video min-h-56 overflow-hidden rounded-lg moon-border bg-slate-950/80 ${className}`}
    >
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 p-5 text-center text-sm text-cyan-100/75">
          <span className="break-all">视频路径待替换：{src}</span>
        </div>
      ) : (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          muted={isMuted}
          loop
          playsInline
          poster={poster}
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onError={() => setHasError(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-3">
        <p className="min-w-0 truncate text-sm font-medium text-white">{title}</p>
        <div className="flex shrink-0 items-center gap-2">
          <button className="icon-button" onClick={togglePlay} type="button" title={isPlaying ? "暂停" : "播放"}>
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <button className="icon-button" onClick={toggleMuted} type="button" title={isMuted ? "取消静音" : "静音"}>
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
          <button className="icon-button" onClick={replay} type="button" title="重新播放">
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
