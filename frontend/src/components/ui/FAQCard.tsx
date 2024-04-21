import { Link } from "react-router-dom";

type FAQCardProps = {
  question: string;
  answer: string;
};

export function FAQCard({ question, answer }: FAQCardProps) {
  return (
    <div className="flex flex-col justify-between gap-5 rounded-xl border border-gray-15 p-7.5 lg:gap-6 lg:p-10">
      <p className="text-lg lg:text-xl">{question}</p>
      <p className="text-sm text-gray-60 lg:text-base">{answer}</p>
      {/* // TODO: change The link to the FAQ page */}
      <Link to="/" className="rounded-lg border border-gray-15 px-5 py-3.5 text-center">
        Read More
      </Link>
    </div>
  );
}
