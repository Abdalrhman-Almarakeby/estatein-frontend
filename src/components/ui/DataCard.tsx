import { cn } from "@/lib/utils/cn";
import { IconContainer } from "@/components/ui/IconContainer";

type DataCardProps = {
  title: string;
  paragraph: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  className?: string;
};

export function DataCard({ title, paragraph, Icon, className }: DataCardProps) {
  return (
    <div
      className={cn(
        "grid gap-4 p-6 rounded-[0.625rem] border lg:p-10 lg:gap-5 3xl:px-12.5 3xl:py-10 3xl:gap-7.5",
        className
      )}
    >
      <div className="flex items-center gap-2.5 lg:gap-4 3xl:gap-6">
        <IconContainer Icon={Icon} />
        <p className="text-lg font-semibold lg:text-xl 3xl:text-2xl">{title}</p>
      </div>
      <p className="text-primary">{paragraph}</p>
    </div>
  );
}
