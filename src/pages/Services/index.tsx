import { HeaderSection } from "@/components/ui/HeaderSection";
import { LinksSection } from "@/components/ui/LinksSection";
import HomeIconSVG from "@/assets/icons/home.svg?react";
import CashIconSVG from "@/assets/icons/cash.svg?react";
import BuildingsIconSVG from "@/assets/icons/buildings.svg?react";
import SunIconSVG from "@/assets/icons/sun.svg?react";

const LINKS_DATA = [
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

export function Services() {
  return (
    <div className="container min-h-[10000px] flex-grow space-y-20 lg:space-y-30">
      <div>
        <HeaderSection
          title="Elevate Your Real Estate Experience"
          paragraph="Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."
        />
        <LinksSection linksData={LINKS_DATA} />
      </div>
    </div>
  );
}
