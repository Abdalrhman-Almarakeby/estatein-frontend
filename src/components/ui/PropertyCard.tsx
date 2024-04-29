import { Link } from "react-router-dom";
import { type Property } from "@/lib/types/property";
import BedSVG from "@/assets/icons/bed.svg?react";
import BathSVG from "@/assets/icons/bath.svg?react";
import BuildingSVG from "@/assets/icons/building.svg?react";
import { formatCurrency } from "@/lib/utils";

export function PropertyCard({
  _id,
  title,
  description,
  bedrooms,
  bathrooms,
  image,
  price,
}: Property) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-gray-15 p-5 lg:gap-5 lg:p-7.5">
      <img src={image} alt="property image" className="aspect-[31/21] rounded-[0.625rem]" />

      <div className="space-y-5">
        <div className="space-y-1">
          <h4 className="text-lg">{title}</h4>
          <p className="line-clamp-2 text-sm text-gray-60">{description}</p>
        </div>
        <div className="flex flex-wrap gap-1.5 text-sm">
          <span className="flex gap-1 rounded-3xl border border-gray-15 bg-gray-10 px-3.5 py-[0.40625rem]">
            <BedSVG /> <span>{bedrooms}-Bedroom</span>
          </span>
          <span className="flex gap-1 rounded-3xl border border-gray-15 bg-gray-10 px-3.5 py-[0.40625rem]">
            <BathSVG /> <span>{bathrooms}-Bathroom</span>
          </span>
          <span className="flex gap-1 rounded-3xl border border-gray-15 bg-gray-10 px-3.5 py-[0.40625rem]">
            <BuildingSVG /> <span>villa</span>
          </span>
        </div>
        <div className="flex gap-7.5">
          <p className="grid">
            <span className="text-sm text-gray-60">Price</span>
            <span className="text-lg">{formatCurrency(price.listingPrice)}</span>
          </p>
          <Link
            to={`/properties/${_id}`}
            className="flex-grow rounded-lg bg-purple-60 px-3 py-3.5 text-center text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export function PropertyCardSkelton() {
  return (
    <div
      className="flex flex-col gap-4 basis-full rounded-xl border border-gray-15 p-5 lg:gap-5 lg:p-7.5"
      aria-busy="true"
    >
      <div
        className="aspect-[31/21] animate-pulse rounded-[0.625rem] bg-gray-300"
        aria-hidden="true"
      ></div>
      <div className="space-y-5">
        <div className="space-y-1">
          <div className="h-5 w-1/2 animate-pulse rounded-lg bg-gray-300" aria-hidden="true"></div>
          <div className="h-5 animate-pulse rounded-lg bg-gray-300" aria-hidden="true"></div>
          <div className="h-5 animate-pulse rounded-lg bg-gray-300" aria-hidden="true"></div>
        </div>
        <div className="flex flex-wrap gap-1.5 text-sm">
          <div className="h-5 w-32 animate-pulse rounded-3xl bg-gray-300" aria-hidden="true"></div>
          <div className="h-5 w-32 animate-pulse rounded-3xl bg-gray-300" aria-hidden="true"></div>
          <div className="h-5 w-12 animate-pulse rounded-3xl bg-gray-300" aria-hidden="true"></div>
        </div>
        <div className="flex gap-7.5">
          <div className="grid gap-3">
            <span className="h-3 w-15 animate-pulse rounded bg-gray-300" aria-hidden="true"></span>
            <span className="h-5 w-20 animate-pulse rounded bg-gray-300" aria-hidden="true"></span>
          </div>
          <div className="flex-grow animate-pulse rounded-lg bg-gray-300" aria-hidden="true"></div>
        </div>
      </div>
    </div>
  );
}
