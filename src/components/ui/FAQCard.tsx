import { Link } from "react-router-dom";

export default function FAQCard() {
  // TODO: Add props and change the data into the data that comes from the props
  return (
    <div className="grid gap-5 rounded-xl border border-gray-15 p-7.5 lg:gap-6 lg:p-10">
      <p className="text-lg lg:text-xl">How do I search for properties on Estatein?</p>
      <p className="text-sm text-gray-60 lg:text-base">
        Learn how to use our user-friendly search tools to find properties that match your criteria.
      </p>
      <Link to="/" className="rounded-lg border border-gray-15 px-5 py-3.5 text-center">
        Read More
      </Link>
    </div>
  );
}
