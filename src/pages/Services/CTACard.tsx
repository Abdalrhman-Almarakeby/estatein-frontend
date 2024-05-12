import { HashLink } from "react-router-hash-link";
import WavesSVG from "@/assets/abstractDesigns/waves-2.svg?react";
import { cn } from "@/lib/utils/cn";

type CTACardProps = {
  title: string;
  link: string;
  paragraph: string;
  className?: string;
};

export default function CTACard({ title, paragraph, link, className }: CTACardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-5 justify-center rounded-[0.625rem] border bg-gray-10 p-6 lg:p-10 3xl:gap-7.5 3xl:p-12.5",
        className
      )}
    >
      <WavesSVG className="absolute inset-0 h-full w-full" />
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="z-10 text-xl font-bold lg:text-2xl 3xl:text-3xl">{title}</p>
        <HashLink to={link} className="btn-secondary btn-sm 3xl:btn-lg z-10 text-center">
          Learn More
        </HashLink>
      </div>
      <p className="text-primary z-10">{paragraph}</p>
    </div>
  );
}
