import HomeIconSVG from "@/assets/icons/home.svg?react";
import CashIconSVG from "@/assets/icons/cash.svg?react";
import BuildingsIconSVG from "@/assets/icons/buildings.svg?react";
import SunIconSVG from "@/assets/icons/sun.svg?react";

export const HOME_PAGE_LINKS_DATA = [
  {
    to: "/properties",
    Icon: HomeIconSVG,
    label: "Find Your Dream Home",
  },
  {
    to: "/properties",
    Icon: CashIconSVG,
    label: "Unlock Property Value",
  },
  {
    to: "/properties",
    Icon: BuildingsIconSVG,
    label: "Effortless Property Management",
  },
  {
    to: "/properties",
    Icon: SunIconSVG,
    label: "Smart Investments, Informed Decisions",
  },
] as const;
