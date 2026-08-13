"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 h-10 w-10 rounded-full shadow-lg glow-sm"
    >
      <FaArrowUp className="h-4 w-4" />
    </Button>
  );
}