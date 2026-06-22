import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  poster?: string;
  className?: string;
  /** apply subtle cinematic zoom (1 → 1.05) */
  zoom?: boolean;
  /** fade-in once visible */
  fade?: boolean;
  objectPosition?: string;
};

/**
 * Reusable luxury background video.
 * Always autoplay + muted + loop + playsInline + no controls.
 * Lazy-loads via IntersectionObserver and never pauses on scroll.
 */
export function LuxuryVideo({
  src,
  poster,
  className = "",
  zoom = true,
  fade = true,
  objectPosition = "center",
}: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !visible) return;
    const play = () => {
      el.play().catch(() => {});
    };
    play();
    // Re-assert play on visibility change so it "continues forever"
    const onVis = () => {
      if (!document.hidden) play();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [visible]);

  return (
    <video
      ref={ref}
      src={visible ? src : undefined}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      disablePictureInPicture
      onLoadedData={() => setLoaded(true)}
      onCanPlay={() => ref.current?.play().catch(() => {})}
      className={[
        "h-full w-full object-cover will-change-transform pointer-events-none select-none",
        fade ? "transition-opacity duration-[1200ms]" : "",
        fade ? (loaded ? "opacity-100" : "opacity-0") : "",
        zoom ? "animate-slow-zoom" : "",
        className,
      ].join(" ")}
      style={{ objectPosition }}
    />
  );
}

export default LuxuryVideo;
