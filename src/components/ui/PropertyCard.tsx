import { Link } from "react-router-dom";
import BedSVG from "@/assets/icons/bed.svg?react";
import BathSVG from "@/assets/icons/bath.svg?react";
import BuildingSVG from "@/assets/icons/building.svg?react";

export default function PropertyCard() {
  // TODO: Add props and change the data into the data that comes from the props
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-gray-15 p-5 lg:gap-5 lg:p-7.5">
      <img src="https://placehold.co/31x21" alt="" className="aspect-[31/21] rounded-[0.625rem]" />
      <div className="space-y-5">
        <div className="space-y-1">
          <h4 className="text-lg">Rustic Retreat Cottage</h4>
          <p className="line-clamp-2 text-sm text-gray-60">
            An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community An elegant 3-bedroom,
            2.5-bathroom townhouse in a gated community
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5 text-sm">
          <span className="flex gap-1 rounded-3xl border border-gray-15 bg-gray-10 px-3.5 py-[0.40625rem]">
            <BedSVG /> <span>4-Bedroom</span>
          </span>
          <span className="flex gap-1 rounded-3xl border border-gray-15 bg-gray-10 px-3.5 py-[0.40625rem]">
            <BathSVG /> <span>3-Bathroom</span>
          </span>
          <span className="flex gap-1 rounded-3xl border border-gray-15 bg-gray-10 px-3.5 py-[0.40625rem]">
            <BuildingSVG /> <span>villa</span>
          </span>
        </div>
        <div className="flex gap-7.5">
          <p className="grid">
            <span className="text-sm text-gray-60">Price</span>
            <span className="text-lg">$550,000</span>
          </p>
          <Link
            to="/"
            className="flex-grow rounded-lg bg-purple-60 px-3 py-3.5 text-center text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
