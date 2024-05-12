import { SectionTitle } from "@/components/ui/Section";
import { DataCard } from "@/components/ui/DataCard";
import { CTACard } from "./CTACard";

import DataSVG from "@/assets/icons/data.svg?react";
import FireSVG from "@/assets/icons/fire.svg?react";
import LightBulbSVG from "@/assets/icons/light-bulb.svg?react";
import SunSVG from "@/assets/icons/sun.svg?react";

const INVESTMENT_SERVICES_DATA = [
  {
    Icon: DataSVG,
    title: "Market Insight",
    paragraph:
      "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions",
  },
  {
    Icon: FireSVG,
    title: "ROI Assessment",
    paragraph:
      "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments",
  },
  {
    Icon: LightBulbSVG,
    title: "Customized Strategies",
    paragraph:
      "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs",
  },
  {
    Icon: SunSVG,
    title: "Diversification Mastery",
    paragraph:
      "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations",
  },
] as const;

export function InvestmentSection() {
  return (
    <section className="flex flex-col items-center gap-10 xl:flex-row xl:gap-15">
      <div className="grid gap-7.5 md:grid-cols-2 xl:grid-cols-1 xl:gap-10">
        <SectionTitle
          title="Smart Investments, Informed Decisions"
          paragraph="Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions."
          className="md:place-self-center"
        />
        <CTACard
          link="/contact#contact"
          paragraph="Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
          title="Unlock Your Investment Potential"
        />
      </div>
      <div className="grid gap-2.5 rounded-xl bg-gray-10 p-2.5 sm:grid-cols-2">
        {INVESTMENT_SERVICES_DATA.map((serviceData) => (
          <DataCard key={serviceData.title} {...serviceData} className="bg-gray-08" />
        ))}
      </div>
    </section>
  );
}
