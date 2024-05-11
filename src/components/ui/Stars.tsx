import StarSVG from "@/assets/icons/star.svg?react";
import { cn } from "@/lib/utils/cn";

type StarsProps = {
  num: number;
  className?: string;
};

export function Stars({ num, className }: StarsProps) {
  return (
    <div className={cn("flex gap-2", className)}>
      {Array.from({ length: num }).map((_, index) => (
        <span
          key={index}
          className="grid size-7.5 place-items-center rounded-full border bg-gray-10 lg:size-9"
        >
          <StarSVG className="lg:size-5" />
        </span>
      ))}
    </div>
  );
}
