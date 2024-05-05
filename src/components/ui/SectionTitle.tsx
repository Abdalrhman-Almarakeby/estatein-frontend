import StarsSVG from "@/assets/abstractDesigns/stars.svg?react";

type SectionTitleProps = {
  title: string;
  paragraph: string;
};

export function SectionTitle({ title, paragraph }: SectionTitleProps) {
  return (
    <div className="relative space-y-1.5 lg:space-y-2.5">
      <StarsSVG className="absolute -left-2 -translate-y-full lg:h-6" />
      <h3 className="h-primary">{title}</h3>
      <p className="text-primary">{paragraph}</p>
    </div>
  );
}
