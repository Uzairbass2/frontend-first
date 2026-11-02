import { useEffect, useState } from "react";
import ra2Logo from "@/assets/Ra2logo.png";

export function LoadingScreen() {
  const [isMounted, setIsMounted] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const fadeTimeout = window.setTimeout(() => setIsFadingOut(true), 1500);
    const removeTimeout = window.setTimeout(() => setIsMounted(false), 2000);
    return () => {
      window.clearTimeout(fadeTimeout);
      window.clearTimeout(removeTimeout);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div
      role="status"
      aria-label="Loading RA2 Travel and Tours"
      aria-hidden={isFadingOut}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ivory transition-opacity duration-500 ease-out motion-reduce:transition-none ${
        isFadingOut ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <img
        src={ra2Logo}
        alt="RA2 Travel and Tours"
        className="size-48 object-contain sm:size-56"
      />
      <div
        aria-hidden="true"
        className="mt-8 size-9 animate-spin rounded-full border-[3px] border-forest/15 border-t-gold motion-reduce:animate-none"
      />
      <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-forest">
        Preparing your journey
      </p>
    </div>
  );
}
