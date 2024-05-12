import { SectionTitle } from "@/components/ui/Section";
import { DataCard } from "@/components/ui/DataCard";
import { INVESTMENT_SERVICES_DATA } from "@/constant/services/investmentServices";
import { CTACard } from "./CTACard";

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
