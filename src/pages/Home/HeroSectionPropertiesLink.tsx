import { Link } from "react-router-dom";
import DiagonalArrowIconSVG from "@/assets/icons/diagonal-arrow.svg?react";

export default function HeroSectionPropertiesLink() {
  const size = 95;
  const radius = size / 2 - 10;

  return (
    <Link
      className="absolute bottom-0 left-0 size-[130px] translate-y-1/3 rounded-full border border-gray-15 bg-gray-08 p-4 md:hidden 2xl:top-[95px] 2xl:block 2xl:-translate-x-1/2"
      to="/properties"
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 fill-white text-xs font-semibold tracking-widest"
        aria-hidden="true"
      >
        <defs>
          <path
            id="circlePath"
            d={`
                M ${size / 2}, ${size / 2}
                m -${radius}, 0
               a ${radius},${radius} 0 1,1 ${radius * 2},0
               a ${radius},${radius} 0 1,1 -${radius * 2},0
              `}
          />
        </defs>
        <text>
          <textPath xlinkHref="#circlePath" startOffset="50%" style={{ textAnchor: "middle" }}>
            Discover Your Dream Property ✨
          </textPath>
        </text>
      </svg>
      <span
        aria-hidden="true"
        className="absolute right-1/2 top-1/2 grid size-14 -translate-y-1/2 translate-x-1/2 place-items-center rounded-full border border-gray-15 bg-gray-10"
      >
        <DiagonalArrowIconSVG className="size-5 stroke-white" />
      </span>
      <span className="sr-only">Browse Properties</span>
    </Link>
  );
}
