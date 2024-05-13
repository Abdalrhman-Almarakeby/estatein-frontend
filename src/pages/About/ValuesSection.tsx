import { DataCard } from "@/components/ui/DataCard";
import { SectionTitle } from "@/components/ui/Section";
import { VALUES } from "@/constant/values";

export function ValuesSection() {
  return (
    <section className="flex flex-col gap-10 xl:flex-row xl:gap-15">
      <SectionTitle
        title="Our Values"
        paragraph="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
        className="xl:mb-20 xl:self-center"
      />
      <div className="grid gap-2.5 rounded-xl bg-gray-10 p-2.5 sm:grid-cols-2">
        {VALUES.map((serviceData) => (
          <DataCard key={serviceData.title} {...serviceData} className="bg-gray-08" />
        ))}
      </div>
    </section>
  );
}
