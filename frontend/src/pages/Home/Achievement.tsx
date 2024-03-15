import { cn } from "@/lib/utils";

type AchievementProps = {
  achievement: string;
  label: string;
  className?: string;
};

export default function Achievement({ achievement, label, className }: AchievementProps) {
  return (
    <div
      className={cn(
        "last:col-span-2 space-y-0.5 border border-gray-15 bg-gray-10 p-4 sm:!col-span-1",
        className
      )}
    >
      <h4 className="block text-2xl font-bold xl:text-3xl 3xl:text-4xl">{achievement}</h4>
      <p className="block text-sm font-medium text-gray-60 2xl:text-base 3xl:text-lg">{label}</p>
    </div>
  );
}
