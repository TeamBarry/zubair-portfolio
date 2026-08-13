"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeTransition() {
  const { resolvedTheme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevTheme, setPrevTheme] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (prevTheme && prevTheme !== resolvedTheme) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
      return () => clearTimeout(timer);
    }
    setPrevTheme(resolvedTheme);
  }, [resolvedTheme, prevTheme]);

  if (!isTransitioning) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{
        background: resolvedTheme === "dark" 
          ? "radial-gradient(circle at top right, hsl(222.2 84% 4.9%), transparent 70%)"
          : "radial-gradient(circle at bottom left, hsl(0 0% 100%), transparent 70%)",
        animation: "themeSweep 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      }}
    />
  );
}