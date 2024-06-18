import { useState, useEffect } from "react";
import { ScrollDirection } from "@/types";
import { useWindowSize } from "@/lib/hooks";
import { getScrollDirection } from "./getScrollDirection";

export function useShowHeader() {
  const [isOnTop, setIsOnTop] = useState(true);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection | null>(null);
  const windowSize = useWindowSize();

  const MAX_TOP_POSITION = 100;

  const isSmallScreen = windowSize.width < 768;

  useEffect(() => {
    let lastScrollPosition = window.scrollY;

    function handleScroll() {
      if (!isSmallScreen) return;
      setIsOnTop(window.scrollY < MAX_TOP_POSITION);
      setScrollDirection(getScrollDirection(lastScrollPosition, scrollDirection || "up"));

      lastScrollPosition = window.scrollY;
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSmallScreen, scrollDirection, windowSize.width]);

  if (!isSmallScreen) return false;

  return scrollDirection === "up" || isOnTop;
}
