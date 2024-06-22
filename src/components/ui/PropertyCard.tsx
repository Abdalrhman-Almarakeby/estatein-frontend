import { HashLink } from "react-router-hash-link";
import { type Property } from "@/types";
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
    <div className="flex flex-col gap-4 rounded-xl border p-5 lg:gap-5 lg:p-7.5">
      <img
        src={image}
        alt="property image"
        loading="lazy"
        className="aspect-[31/21] rounded-[0.625rem]"
      />

      <div className="space-y-5">
        <div className="space-y-1">
          <h4 className="text-lg lg:text-xl 3xl:text-2xl">{title}</h4>
          <p className="text-primary line-clamp-2">{description}</p>
        </div>
        <div className="badges-container">
          <span>
            <BedSVG aria-hidden="true" /> <span>{bedrooms}-Bedroom</span>
          </span>
          <span>
            <BathSVG aria-hidden="true" /> <span>{bathrooms}-Bathroom</span>
          </span>
          <span>
            <BuildingSVG aria-hidden="true" /> <span>villa</span>
          </span>
        </div>
        <div className="flex items-center gap-7.5">
          <p className="grid">
            <span className="text-primary">Price</span>
            <span className="text-lg">{formatCurrency(price.listingPrice)}</span>
          </p>
          <HashLink
            to={`/properties/${_id}`}
            className="btn-primary btn-sm 3xl:btn-md flex-grow text-center 3xl:text-lg"
          >
            View Details
          </HashLink>
        </div>
      </div>
    </div>
  );
}

export function PropertyCardSkelton() {
  return (
    <div
      className="flex basis-full flex-col gap-4 rounded-xl border p-5 lg:gap-5 lg:p-7.5"
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
