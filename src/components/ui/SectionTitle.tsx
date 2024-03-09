import StarsSVG from "@/assets/abstractDesigns/stars.svg?react";

type SectionTitleProps = {
  title: string;
  paragraph: string;
};

export default function SectionTitle({ title, paragraph }: SectionTitleProps) {
  return (
    <div className="relative space-y-1.5 lg:space-y-2.5">
      <StarsSVG className="absolute -left-2 -translate-y-full lg:h-6" />
      <h3 className="text-[1.75rem] font-medium lg:text-[2.375rem] 2xl:text-4xl 3xl:text-5xl">
        {title}
      </h3>
      <p className="text-sm text-gray-60 lg:text-base 3xl:text-lg">{paragraph}</p>
    </div>
  );
}
