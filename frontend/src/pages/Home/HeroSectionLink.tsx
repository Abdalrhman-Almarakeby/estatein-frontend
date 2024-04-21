import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import IconContainerSVG from "@/assets/icons/icon-container.svg?react";
import DiagonalArrowIconSVG from "@/assets/icons/diagonal-arrow.svg?react";

type HeroSectionLinkProps = {
  to: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  label: string;
  className?: string;
};

export function HeroSectionLink({ to, Icon, label, className }: HeroSectionLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        "relative flex flex-col items-center justify-center gap-3.5 rounded-[10px] border border-gray-15 bg-gray-10 px-4 py-5",
        className
      )}
    >
      <span className="relative" aria-hidden="true">
        <IconContainerSVG className="animate-spin duration-10s" />
        <Icon className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2" />
      </span>
      <p className="text-center text-sm font-medium sm:text-base">{label}</p>
      <DiagonalArrowIconSVG
        className="absolute right-3 top-4 size-5 stroke-gray-30 lg:right-5 lg:top-6"
        role="img"
        aria-hidden="true"
      />
    </Link>
  );
}
