import StarsSVG from "@/assets/abstractDesigns/stars.svg?react";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type SectionTitleProps = {
  title: string;
  paragraph: string;
  className?: string;
};

type SectionProps = HTMLAttributes<HTMLDivElement>;

function SectionTitle({ title, paragraph, className }: SectionTitleProps) {
  return (
    <div className={cn("relative space-y-1.5 lg:space-y-2.5", className)}>
      <StarsSVG className="absolute -left-2 -translate-y-full lg:h-6" />
      <h3 className="h-primary">{title}</h3>
      <p className="text-primary">{paragraph}</p>
    </div>
  );
}

function Section({ className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn("space-y-10 md:space-y-12 lg:space-y-15 2xl:space-y-20", className)}
      {...props}
    >
      {children}
    </section>
  );
}

export { SectionTitle, Section };
