import { HashLink } from "react-router-hash-link";
import { cn } from "@/lib/utils";

type FAQCardProps = {
  question: string;
  answer: string;
  className?: string;
};

export function FAQCard({ question, answer, className }: FAQCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between gap-5 rounded-xl border p-7.5 lg:gap-6 lg:p-10",
        className
      )}
    >
      <p className="text-lg lg:text-xl 3xl:text-2xl">{question}</p>
      <p className="text-primary">{answer}</p>
      <HashLink
        to="/about#how-it-is-work"
        className="btn-tertiary btn-sm 3xl:btn-md text-center 3xl:text-lg"
      >
        Read More
      </HashLink>
    </div>
  );
}
