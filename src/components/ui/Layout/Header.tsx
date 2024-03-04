import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMenu } from "./useMenu";
import { useShowHeader } from "./useShowHeader";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.svg";
import burgerIcon from "@/assets/icons/burger-menu.svg";
import xIcon from "@/assets/icons/x-mark.svg";

export default function Header() {
  const { pathname } = useLocation();
  const menuRef = useRef<HTMLElement>(null);

  const showHeader = useShowHeader();
  const { isOpen, toggle, menuTransitionEnd } = useMenu(menuRef, pathname, showHeader);

  return (
    <header
      className={cn(
        "border-y z-40 border-y-gray-15 fixed  w-full left-0 md:static transition-[top] duration-300 bg-gray-10 py-5 text-sm text-white 2xl:py-5 2xl:text-lg",
        showHeader ? "top-0" : "-top-full md:top-0"
      )}
    >
      <div className="container flex items-center justify-between md:block">
        <img src={logo} alt="Logo of Estatein" className="w-[100px] md:hidden" />
        <nav
          id="main-menu"
          aria-label="Main menu"
          aria-expanded={isOpen}
          aria-hidden={window.innerWidth < 768 && !isOpen}
          role="menu"
          ref={menuRef}
          className={cn(
            "absolute z-50 top-0 flex h-svh w-svw flex-col items-center gap-5 self-stretch pt-20 text-3xl backdrop-blur-md transition-[right] duration-300 md:visible md:static md:flex md:size-auto md:flex-row md:gap-1 md:pt-0 md:text-base md:backdrop-blur-none 2xl:gap-1.5",
            isOpen ? "right-0" : "-right-[110%]"
          )}
          onTransitionEnd={menuTransitionEnd}
        >
          <img
            src={logo}
            alt="Logo of Estatein"
            className="mr-auto hidden w-[100px] md:block lg:w-[110px] xl:w-[130px] 2xl:w-[160px]"
          />
          <Link
            onClick={() => isOpen && toggle()}
            to="/"
            role="menuitem"
            className={cn(
              "rounded-[0.625rem] border border-transparent px-5 py-3 transition duration-300 2xl:px-6 2xl:py-3.5",
              pathname === "/" && "md:bg-gray-08 md:border-gray-15"
            )}
          >
            Home
          </Link>
          <Link
            onClick={() => isOpen && toggle()}
            to="/about"
            role="menuitem"
            className={cn(
              "rounded-[0.625rem] border border-transparent px-5 py-3 transition duration-300 2xl:px-6 2xl:py-3.5",
              pathname === "/about" && "md:bg-gray-08 md:border-gray-15"
            )}
          >
            About Us
          </Link>
          <Link
            onClick={() => isOpen && toggle()}
            to="/properties"
            role="menuitem"
            className={cn(
              "rounded-[0.625rem] border border-transparent px-5 py-3 transition duration-300 2xl:px-6 2xl:py-3.5",
              pathname === "/properties" && "md:bg-gray-08 md:border-gray-15"
            )}
          >
            Properties
          </Link>
          <Link
            onClick={() => isOpen && toggle()}
            to="/services"
            role="menuitem"
            className={cn(
              "rounded-[0.625rem] border border-transparent px-5 py-3 transition duration-300 2xl:px-6 2xl:py-3.5",
              pathname === "/services" && "md:bg-gray-08 md:border-gray-15"
            )}
          >
            Services
          </Link>
          <Link
            onClick={() => isOpen && toggle()}
            to="/contact"
            role="menuitem"
            className="rounded-[0.625rem] px-5 py-3 md:ml-auto md:border md:border-gray-15 md:bg-gray-08 2xl:px-6 2xl:py-3.5"
          >
            Contact Us
          </Link>
        </nav>
        <button
          aria-expanded={isOpen}
          aria-controls="main-menu"
          aria-label="Toggle menu"
          onClick={toggle}
          className="z-[99999] md:hidden"
        >
          <img src={isOpen ? xIcon : burgerIcon} alt="Icon menu" className="size-10" />
          <span className="sr-only">{isOpen ? "Close Menu" : "Open Menu"}</span>
        </button>
      </div>
    </header>
  );
}
