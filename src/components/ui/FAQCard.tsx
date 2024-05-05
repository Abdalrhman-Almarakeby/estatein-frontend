import { Link } from "react-router-dom";

type FAQCardProps = {
  question: string;
  answer: string;
};

export function FAQCard({ question, answer }: FAQCardProps) {
  return (
    <div className="flex flex-col justify-between gap-5 rounded-xl border p-7.5 lg:gap-6 lg:p-10">
      <p className="text-lg lg:text-xl">{question}</p>
      <p className="text-primary">{answer}</p>
      <Link
        to="/about#how-it-is-work"
        className="btn-tertiary btn-sm 3xl:btn-md 3xl:text-lg text-center"
      >
        Read More
      </Link>
    </div>
  );
}
