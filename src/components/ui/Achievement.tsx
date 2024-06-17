import { cn } from "@/lib/utils";

type AchievementProps = {
  achievement: string;
  label: string;
  className?: string;
};

export function Achievement({ achievement, label, className }: AchievementProps) {
  return (
    <h2
      className={cn(
        "last:col-span-2 space-y-0.5 border bg-gray-10 p-4 xl:px-2 sm:!col-span-1",
        className
      )}
    >
      <span className="block text-2xl font-bold xl:text-3xl 3xl:text-4xl">{achievement}</span>
      <span className="text-primary block">{label}</span>
    </h2>
  );
}
