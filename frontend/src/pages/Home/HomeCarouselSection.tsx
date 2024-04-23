import { memo } from "react";
import { Link } from "react-router-dom";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import ErrorSVG from "@/assets/icons/error.svg?react";

type HomeCarouselSectionProps = {
  id: string;
  sectionName: string;
  title: string;
  paragraph: string;
  link: string;
  children: React.ReactNode[];
  isError?: boolean;
  retry?: () => void;
};

const HomeCarouselSection = memo(
  ({
    id,
    sectionName,
    title,
    paragraph,
    link,
    children,
    isError,
    retry,
  }: HomeCarouselSectionProps) => {
    return (
      <section id={id} className="space-y-10 md:space-y-12 lg:space-y-15">
        <div className="flex justify-between">
          <SectionTitle title={title} paragraph={paragraph} />
          <Link
            to={link}
            className="hidden self-end rounded-lg border border-gray-15 px-5 py-3.5 text-center text-sm lg:block"
          >
            View All {sectionName}
          </Link>
        </div>

        {!isError ? (
          <Carousel
            opts={{
              align: "start",
            }}
            className="flex flex-col gap-7.5"
          >
            <CarouselContent className="md:-ml-5">{children}</CarouselContent>
            <div className="flex flex-wrap items-center justify-between gap-2.5 border-t border-t-gray-15 pt-4 text-sm min-450:flex-nowrap min-450:justify-normal md:justify-end md:gap-5">
              <Link
                to={link}
                className="order-last mr-auto basis-full rounded-lg border border-gray-15 px-5 py-3.5 text-center min-450:order-none min-450:basis-auto lg:hidden"
              >
                View All {sectionName}
              </Link>
              <CarouselPrevious className="static translate-x-0 translate-y-0 lg:order-2" />
              <CarouselNext className="static translate-x-0 translate-y-0 lg:order-3" />
            </div>
          </Carousel>
        ) : (
          <div className="flex h-[485px] flex-col items-center justify-center gap-4 text-balance rounded-md border border-gray-15 text-center text-lg sm:h-[580px] md:h-[454px] lg:h-[500px] xl:h-[480px] 2xl:h-[510px]">
            <ErrorSVG />
            There was a problem connecting to the server. Please check your internet connection and
            try again.
            <button onClick={retry} className="rounded-lg bg-purple-60 px-5 py-2 text-base">
              Try agin
            </button>
          </div>
        )}
      </section>
    );
  }
);

export { HomeCarouselSection, CarouselItem };
