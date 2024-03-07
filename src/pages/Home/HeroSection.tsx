import { Link } from "react-router-dom";
import HeroSectionPropertiesLink from "./HeroSectionPropertiesLink";
import HeroSectionLink from "./HeroSectionLink";
import Achievement from "./Achievement";
import heroImg from "@/assets/imgs/landing-page-hero.webp";
import HomeIconSVG from "@/assets/icons/home.svg?react";
import CashIconSVG from "@/assets/icons/cash.svg?react";
import BuildingIconSVG from "@/assets/icons/building.svg?react";
import SunIconSVG from "@/assets/icons/sun.svg?react";

export default function Hero() {
  return (
    <section className="min-[1700px]:pt- grid gap-10 py-10 md:grid-cols-2 md:gap-y-16 lg:gap-y-10 xl:gap-y-16 xl:pt-24.5 2xl:gap-x-15 2xl:gap-y-0 min-[1700px]:mt-24.5 min-[1700px]:gap-y-16 min-[1700px]:pt-0">
      <section className="relative mb-4 2xl:mr-break-out min-[1700px]:container lg:order-2 lg:row-span-2 xl:row-span-3 xl:mb-0 min-[1700px]:!p-0">
        <img
          src={heroImg}
          alt="A digital illustration of a group of futuristic blue skyscrapers with a sleek design against a dark background, evoking a sense of advanced urban architecture. The buildings are illuminated with a grid-like pattern that gives them a glowing effect."
          className="aspect-[690/622] w-full rounded-xl"
        />
        <HeroSectionPropertiesLink />
      </section>
      <section className="flex flex-col gap-4 sm:gap-6 lg:order-1 lg:mt-auto 2xl:mb-12.5 3xl:mt-0">
        <h1 className="text-[1.75rem] font-medium leading-tight min-[450px]:text-3xl sm:text-4xl 2xl:text-5xl 3xl:text-6xl">
          Discover Your Dream Property with Estatein
        </h1>
        <p className="text-sm text-gray-60 min-[450px]:text-base sm:text-xl 3xl:text-lg">
          Your journey to finding the perfect property begins here. Explore our listings to find the
          home that matches your dreams.
        </p>
      </section>
      <nav className="flex flex-col gap-4 text-center text-sm sm:flex-row sm:text-base md:col-span-2 lg:order-3 lg:col-span-1 lg:items-start 2xl:mb-12.5 3xl:text-lg">
        <Link
          className="flex-grow rounded-lg border border-gray-15 py-3.5 lg:flex-grow-0 lg:px-5 3xl:px-6 3xl:py-4.5"
          to="/about"
        >
          Learn More
        </Link>
        <Link
          className="flex-grow rounded-lg bg-purple-60 py-3.5 lg:flex-grow-0 lg:px-5 3xl:px-6 3xl:py-4.5"
          to="/properties"
        >
          Browse Properties
        </Link>
      </nav>
      <section className="grid grid-cols-2 gap-3 text-center sm:grid-cols-3 md:col-span-2 lg:order-4 lg:mb-6 xl:col-span-1 xl:mb-0 2xl:col-span-1 2xl:mb-24.5 2xl:items-center min-[1700px]:mb-0">
        <Achievement achievement="200+" label="Happy Customer" />
        <Achievement achievement="10K+" label="Years Of Experience" />
        <Achievement achievement="16+" label="Years Of Experience" />
      </section>
      <section className="grid grid-cols-2 gap-2.5 rounded-xl border border-gray-15 bg-gray-08 p-2.5 shadow-[#191919_0px_0px_0px_5px] lg:mx-break-out min-[1700px]:container md:col-span-2 lg:order-5 lg:grid-cols-4 min-[1700px]:!p-2.5">
        {/* // TODO: Add the right links */}
        <HeroSectionLink to="/" Icon={HomeIconSVG} label="Find Your Dream Home" />
        <HeroSectionLink to="/" Icon={CashIconSVG} label="Unlock Property Value" />
        <HeroSectionLink to="/" Icon={BuildingIconSVG} label="Effortless Property Management" />
        <HeroSectionLink to="/" Icon={SunIconSVG} label="Smart Investments, Informed Decisions" />
      </section>
    </section>
  );
}
