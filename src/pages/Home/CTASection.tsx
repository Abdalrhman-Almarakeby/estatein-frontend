import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="flex flex-col gap-12.5 px-4 py-12.5">
      <div className="flex flex-col gap-1.5">
        <p className="text-[1.75rem] font-medium">Start Your Real Estate Journey Today</p>
        <p className="text-sm text-gray-60">
          Your dream property is just a click away. Whether you're looking for a new home, a
          strategic investment, or expert real estate advice, Estatein is here to assist you every
          step of the way. Take the first step towards your real estate goals and explore our
          available properties or get in touch with our team for personalized assistance.
        </p>
      </div>
      <Link to="/properties" className="rounded-lg bg-purple-60 py-3.5 text-center text-sm">
        Explore Properties
      </Link>
    </section>
  );
}
