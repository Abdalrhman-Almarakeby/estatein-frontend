import { Section, SectionTitle } from "@/components/ui/Section";
import { HOW_IT_IS_WORK } from "@/constant/howItIsWork";

export function HowItIsWordSection() {
  return (
    <Section>
      <SectionTitle
        title="Navigating the Estatein Experience"
        paragraph="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
      />
      <div className="grid gap-7.5 md:grid-cols-2 xl:grid-cols-3">
        {HOW_IT_IS_WORK.map(({ title, paragraph }, i) => (
          <div key={title} className="flex flex-col">
            <p className="py-3.5 px-4 border border-b-0 border-l-purple-60 lg:text-lg 3xl:text-xl">
              Step {i + 1}
            </p>
            <div className="p-7.5 grow border border-l border-l-purple-60 flex flex-col gap-3.5">
              <h4 className="text-lg font-semibold lg:text-lg 3xl:text-[1.625rem]">{title}</h4>
              <p className="text-primary">{paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
