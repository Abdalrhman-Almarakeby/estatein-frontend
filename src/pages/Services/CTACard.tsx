import { HashLink } from "react-router-hash-link";
import WavesSVG from "@/assets/abstractDesigns/waves-2.svg?react";
import { cn } from "@/lib/utils/cn";

type CTACardProps = {
  title: string;
  link: string;
  paragraph: string;
  extend?: boolean | undefined;
  className?: string;
};

export function CTACard({ title, paragraph, link, className, extend }: CTACardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-5 justify-center rounded-[0.625rem] border bg-gray-10 p-6 lg:p-10 3xl:gap-7.5 3xl:p-12.5",
        className
      )}
    >
      <WavesSVG className="absolute inset-0 h-full w-full" />
      <div
        className={cn(
          "flex flex-col gap-5",
          extend && "sm:flex-row sm:items-center sm:justify-between"
        )}
      >
        <p
          className={cn(
            "z-10 text-xl font-bold",
            extend ? "lg:text-2xl 3xl:text-3xl" : "lg:[1.375rem] 3xl:text-2xl"
          )}
        >
          {title}
        </p>
        <HashLink
          to={link}
          className={cn("btn-secondary btn-sm 3xl:btn-lg z-10 text-center", !extend && "hidden")}
        >
          Learn More
        </HashLink>
      </div>
      <p className="text-primary z-10">{paragraph}</p>
      <HashLink
        to={link}
        className={cn("btn-secondary btn-sm 3xl:btn-lg z-10 text-center", extend && "hidden")}
      >
        Learn More
      </HashLink>
    </div>
  );
}
