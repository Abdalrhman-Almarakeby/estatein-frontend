import { useEffect, useState } from "react";
import { ScrollDirection } from "@/lib/types/scrollDirection";
import { getScrollDirection } from "./getScrollDirection";

export function useShowHeader() {
  const [isOnTop, setIsOnTop] = useState(true);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection | null>(null);

  useEffect(() => {
    let lastScrollPosition = window.scrollY;

    function handleScroll() {
      setIsOnTop(window.scrollY < 100);
      setScrollDirection(getScrollDirection(lastScrollPosition, scrollDirection || "up"));

      lastScrollPosition = window.scrollY > 0 ? window.scrollY : 0;
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDirection]);

  return scrollDirection === "up" || isOnTop;
}
