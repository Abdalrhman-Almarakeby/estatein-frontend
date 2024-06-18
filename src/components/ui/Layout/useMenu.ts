import { useEffect, useState, useDebugValue } from "react";
import { useThrottle, useWindowSize } from "@/lib/hooks";

export function useMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const throttledIsOpen = useThrottle(isOpen);
  const windowSize = useWindowSize();

  const isMenuHidden = windowSize.width < 768 && !isOpen;

  function toggle() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  useEffect(() => {
    let prevScrollPosition = 0;

    function handleScroll() {
      const currentScrollPosition = window.scrollY;

      const MIN_SCROLL_AMOUNT = 50;
      const scrollAmount = Math.abs(currentScrollPosition - prevScrollPosition);

      const scrolledALot = scrollAmount > MIN_SCROLL_AMOUNT;
      if (isOpen && scrolledALot) {
        setIsOpen(false);
      }

      prevScrollPosition = currentScrollPosition;
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen, setIsOpen]);

  useDebugValue({
    isMenuHidden,
    isOpen,
    throttledIsOpen,
  });

  return {
    isMenuHidden,
    isOpen: throttledIsOpen,
    toggle,
  };
}
