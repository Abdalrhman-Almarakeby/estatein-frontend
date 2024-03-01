import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.svg";
import burgerIcon from "@/assets/icons/burger-menu.svg";
import xIcon from "@/assets/icons/x.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  function toggleMenu() {
    setIsOpen((isOpen) => !isOpen);
  }

  function handleTransitionEnd(e: React.TransitionEvent<HTMLElement>) {
    const target = e.target as Element;
    if (menuRef.current !== target) return;

    if (isOpen) {
      target.classList.add("visible");
      target.classList.remove("invisible");
    } else {
      target.classList.add("invisible");
      target.classList.remove("visible");
    }
  }

  return (
    <header className="border-y border-y-gray-15 bg-gray-10 py-5 text-sm text-white 2xl:py-5 2xl:text-lg">
      <div className="container flex items-center justify-between md:block">
        <img src={logo} alt="Logo of Estatein" className="w-[100px] md:hidden" />
        <nav
          ref={menuRef}
          className={cn(
            "flex absolute md:backdrop-blur-none  pt-20 md:visible  md:static duration-300 items-center transition-[right] gap-10 text-3xl md:text-base flex-col md:flex-row  top-0  h-svh  w-svw md:size-auto  backdrop-blur-md  md:pt-0 md:gap-1 self-stretch md:flex 2xl:gap-1.5",
            isOpen ? "right-0" : "-right-[110%]"
          )}
          onTransitionEnd={handleTransitionEnd}
        >
          <img
            src={logo}
            alt="Logo of Estatein"
            className="mr-auto hidden w-[100px] md:block lg:w-[110px] xl:w-[130px] 2xl:w-[160px]"
          />
          <Link
            to="/"
            className={cn(
              "py-3 px-5 2xl:px-6 2xl:py-3.5 rounded-[0.625rem] border border-transparent transition duration-300",
              pathname === "/" && "md:border-gray-15 md:bg-gray-08"
            )}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={cn(
              "py-3 px-5 2xl:px-6 2xl:py-3.5 rounded-[0.625rem] border border-transparent transition duration-300",
              pathname === "/about" && " md:border-gray-15 md:bg-gray-08"
            )}
          >
            About Us
          </Link>
          <Link
            to="/properties"
            className={cn(
              "py-3 px-5 2xl:px-6 2xl:py-3.5 rounded-[0.625rem] border border-transparent transition duration-300",
              pathname === "/properties" && " md:border-gray-15 md:bg-gray-08"
            )}
          >
            Properties
          </Link>
          <Link
            to="/services"
            className={cn(
              "py-3 px-5 2xl:px-6 2xl:py-3.5 rounded-[0.625rem] border border-transparent transition duration-300",
              pathname === "/services" && " md:border-gray-15 md:bg-gray-08"
            )}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="rounded-[0.625rem] px-5 py-3 md:ml-auto md:border md:border-gray-15 md:bg-gray-08 2xl:px-6 2xl:py-3.5"
          >
            Contact Us
          </Link>
        </nav>
        <button className="z-[99999] md:hidden" onClick={toggleMenu}>
          <img src={isOpen ? xIcon : burgerIcon} alt="Icon menu" className="size-10" />
          <span className="sr-only">{isOpen ? "Close Menu" : "Open Menu"}</span>
        </button>
      </div>
    </header>
  );
}
