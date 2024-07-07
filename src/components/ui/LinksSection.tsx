import { HashLink } from "react-router-hash-link";
import { IconContainer } from "@/components/ui/IconContainer";
import { SVGcomponent } from "@/types/svgComponent";
import DiagonalArrowIconSVG from "@/assets/icons/diagonal-arrow.svg?react";

type LinkData = {
  to: string;
  Icon: SVGcomponent;
  label: string;
  target?: React.HTMLAttributeAnchorTarget;
  ariaLabel?: string;
};

type LinksSectionProps = {
  linksData: readonly LinkData[];
};

export function LinksSection({ linksData }: LinksSectionProps) {
  return (
    <section className="mx-break-out px-break-out grid grid-cols-2 gap-2.5 rounded-xl border bg-gray-08 p-2.5 shadow-[#191919_0px_0px_0px_5px] min-[1700px]:container md:col-span-2 lg:order-5 lg:grid-cols-4 min-[1700px]:!p-2.5">
      {linksData.map(({ to, Icon, label, target, ariaLabel }) => (
        <HashLink
          target={target}
          aria-label={ariaLabel}
          key={label}
          to={to}
          className="relative flex flex-col items-center justify-center gap-3.5 rounded-[10px] border bg-gray-10 px-4 py-5"
        >
          <IconContainer Icon={Icon} />
          <p className="text-center text-sm font-medium sm:text-base">{label}</p>
          <DiagonalArrowIconSVG
            className="absolute right-3 top-4 size-5 stroke-gray-30 lg:right-5 lg:top-6"
            role="img"
            aria-hidden="true"
          />
        </HashLink>
      ))}
    </section>
  );
}
