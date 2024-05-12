import IconContainerSVG from "@/assets/icons/icon-container.svg?react";
import { cn } from "@/lib/utils/cn";

type IconContainerProps = {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  className?: string;
};

export function IconContainer({ Icon, className }: IconContainerProps) {
  return (
    <span className={cn("relative", className)} aria-hidden="true">
      <IconContainerSVG className="animate-[spin_10s_linear] size-12 lg:size-15 3xl:size-20" />
      <Icon className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 fill-purple-75 size-5 lg:size-6 3xl:size-9" />
    </span>
  );
}
