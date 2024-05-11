import StarsSVG from "@/assets/abstractDesigns/stars.svg?react";
import { cn } from "@/lib/utils/cn";

type SectionTitleProps = {
  title: string;
  paragraph: string;
  className?: string;
};

export function SectionTitle({ title, paragraph, className }: SectionTitleProps) {
  return (
    <div className={cn("relative space-y-1.5 lg:space-y-2.5", className)}>
      <StarsSVG className="absolute -left-2 -translate-y-full lg:h-6" />
      <h3 className="h-primary">{title}</h3>
      <p className="text-primary">{paragraph}</p>
    </div>
  );
}
