import { Section, SectionTitle } from "@/components/ui/Section";
import { DataCard } from "@/components/ui/DataCard";
import { SVGcomponent } from "@/types/svgComponent";
import { CTACard } from "./CTACard";

type ServiceData = {
  title: string;
  paragraph: string;
  Icon: SVGcomponent;
};

type ServicesSectionProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  paragraph: string;
  servicesData: readonly ServiceData[];
  CTACardData: {
    title: string;
    paragraph: string;
    link: string;
  };
  id: string;
};

export function ServicesSection({
  title,
  paragraph,
  servicesData,
  CTACardData,
  id,
}: ServicesSectionProps) {
  return (
    <Section id={id}>
      <SectionTitle title={title} paragraph={paragraph} />
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-7.5">
        {servicesData.map((serviceData) => (
          <DataCard key={serviceData.title} {...serviceData} />
        ))}
        <CTACard {...CTACardData} className="sm:col-span-2" extend />
      </div>
    </Section>
  );
}
