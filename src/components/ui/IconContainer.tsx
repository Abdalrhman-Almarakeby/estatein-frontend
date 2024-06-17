import IconContainerSVG from "@/assets/icons/icon-container.svg?react";
import { SVGcomponent } from "@/lib/types";
import { cn } from "@/lib/utils";

type IconContainerProps = {
  Icon: SVGcomponent;
  className?: string;
};

export function IconContainer({ Icon, className }: IconContainerProps) {
  return (
    <span className={cn("relative", className)} aria-hidden="true">
      <IconContainerSVG className="size-12 animate-[spin_10s_linear] lg:size-15 3xl:size-20" />
      <Icon className=" [&>*]:!fill-purple-75 absolute right-1/2 top-1/2 size-5 -translate-y-1/2 translate-x-1/2 !fill-purple-75 lg:size-6 3xl:size-9" />
    </span>
  );
}
