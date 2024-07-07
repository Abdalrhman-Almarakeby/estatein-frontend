import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.svg";
import burgerIcon from "@/assets/icons/burger-menu.svg";
import xIcon from "@/assets/icons/x-mark.svg";
import { useMenu } from "./useMenu";

type HeaderProps = {
  showHeader: boolean;
};

export function Header({ showHeader }: HeaderProps) {
  const { pathname } = useLocation();

  const { isOpen, toggle, isMenuHidden } = useMenu();

  return (
    <header
      className={cn(
        "fixed left-0  z-40 w-full border-y border-y-gray-15 bg-gray-10 text-sm text-white transition-[top] duration-300 md:static md:py-5 2xl:text-lg",
        showHeader ? "top-0" : "-top-full md:top-0"
      )}
    >
      <div className="container flex items-center justify-between md:block">
        <img
          src={logo}
          alt="Logo of Estatein, consisting of a purple abstract geometric shape that suggests a dynamic, folded form, set against a black background."
          loading="lazy"
          className="w-[100px] md:sr-only"
          aria-hidden="true"
        />
        <nav
          id="main-menu"
          aria-label="Main menu"
          aria-expanded={isOpen}
          aria-hidden={isMenuHidden}
          role="menu"
          className={cn(
            "absolute top-0 z-50 flex h-svh w-svw flex-col items-center gap-5 self-stretch pt-20 text-3xl backdrop-blur-md md:static md:flex md:size-auto md:flex-row md:gap-1 md:pt-0 md:text-base md:backdrop-blur-none 2xl:gap-1.5",
            isOpen ? "right-0 flex animate-menu-open" : "-right-[110%] hidden animate-menu-close"
          )}
        >
          <HashLink
            to="/#"
            className="mr-auto hidden w-[100px] md:block lg:w-[110px] xl:w-[130px] 2xl:w-[160px]"
          >
            <img
              src={logo}
              alt="Logo of Estatein, consisting of a purple abstract geometric shape that suggests a dynamic, folded form, set against a black background."
              loading="lazy"
            />
          </HashLink>
          <HashLink
            onClick={() => isOpen && toggle()}
            to="/#"
            role="menuitem"
            className={cn(
              "rounded-[0.625rem] border border-transparent px-5 py-3 transition duration-300 2xl:px-6 2xl:py-3.5",
              pathname === "/" && "md:bg-gray-08 md:border-gray-15"
            )}
          >
            Home
          </HashLink>
          <HashLink
            onClick={() => isOpen && toggle()}
            to="/about#"
            role="menuitem"
            className={cn(
              "rounded-[0.625rem] border border-transparent px-5 py-3 transition duration-300 2xl:px-6 2xl:py-3.5",
              pathname === "/about" && "md:bg-gray-08 md:border-gray-15"
            )}
          >
            About Us
          </HashLink>
          <HashLink
            onClick={() => isOpen && toggle()}
            to="/properties#"
            role="menuitem"
            className={cn(
              "rounded-[0.625rem] border border-transparent px-5 py-3 transition duration-300 2xl:px-6 2xl:py-3.5",
              pathname === "/properties" && "md:bg-gray-08 md:border-gray-15"
            )}
          >
            Properties
          </HashLink>
          <HashLink
            onClick={() => isOpen && toggle()}
            to="/services#"
            role="menuitem"
            className={cn(
              "rounded-[0.625rem] border border-transparent px-5 py-3 transition duration-300 2xl:px-6 2xl:py-3.5",
              pathname === "/services" && "md:bg-gray-08 md:border-gray-15"
            )}
          >
            Services
          </HashLink>
          <HashLink
            onClick={() => isOpen && toggle()}
            to="/contact#"
            role="menuitem"
            className="rounded-[0.625rem] px-5 py-3 md:ml-auto md:border md:border-gray-15 md:bg-gray-08 2xl:px-6 2xl:py-3.5"
          >
            Contact Us
          </HashLink>
        </nav>
        <button
          aria-expanded={isOpen}
          aria-controls="main-menu"
          aria-label="Toggle menu"
          onClick={toggle}
          className="z-[99999] py-5 pl-5 md:hidden"
        >
          <img
            src={isOpen ? xIcon : burgerIcon}
            alt={
              isOpen
                ? "Close navigation menu."
                : "Menu icon consisting of three horizontal white lines on a black background, which opens the navigation menu when clicked."
            }
            loading="lazy"
            className="size-10"
          />
          <span className="sr-only">{isOpen ? "Close Menu" : "Open Menu"}</span>
        </button>
      </div>
    </header>
  );
}
