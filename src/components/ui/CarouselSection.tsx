import { memo } from "react";
import { HashLink } from "react-router-hash-link";
import { Section, SectionTitle } from "@/components/ui/Section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import ErrorSVG from "@/assets/icons/error.svg?react";

type CarouselSectionProps = {
  id: string;
  sectionName?: string;
  title: string;
  paragraph: string;
  children: React.ReactNode[];
  isError?: boolean;
  retry?: () => void;
  link?: string;
  viewAll?: boolean | undefined;
};

const CarouselSection = memo(
  ({
    id,
    sectionName,
    title,
    paragraph,
    link,
    children,
    isError,
    retry,
    viewAll = true,
  }: CarouselSectionProps) => {
    const isViewAll = viewAll && link && sectionName;

    return (
      <Section id={id} className="space-y-10 md:space-y-12 lg:space-y-15">
        <div className="flex justify-between">
          <SectionTitle title={title} paragraph={paragraph} />
          {isViewAll && (
            <HashLink
              to={link}
              className="btn-tertiary btn-sm 3xl:btn-lg  hidden self-end text-center lg:block"
            >
              View All {sectionName}
            </HashLink>
          )}
        </div>

        {!isError ? (
          <Carousel
            opts={{
              align: "start",
            }}
            className="flex flex-col gap-7.5"
          >
            <CarouselContent className="md:-ml-5">{children}</CarouselContent>
            <div className="flex flex-wrap items-center justify-between gap-2.5 border-t border-t-gray-15 pt-4 text-sm min-[450px]:flex-nowrap min-[450px]:justify-normal md:justify-end md:gap-5">
              {isViewAll && (
                <HashLink
                  to={link}
                  className="btn-tertiary btn-sm 3xl:btn-lg order-last mr-auto basis-full text-center min-[450px]:order-none min-[450px]:basis-auto lg:hidden"
                >
                  View All {sectionName}
                </HashLink>
              )}
              <CarouselPrevious className="static translate-x-0 translate-y-0 lg:order-2" />
              <CarouselNext className="static translate-x-0 translate-y-0 lg:order-3" />
            </div>
          </Carousel>
        ) : (
          <div className="flex h-[485px] flex-col items-center justify-center gap-4 text-balance rounded-md border text-center text-lg sm:h-[580px] md:h-[454px] lg:h-[500px] xl:h-[480px] 2xl:h-[510px]">
            <ErrorSVG />
            There was a problem connecting to the server. Please check your internet connection and
            try again.
            <button onClick={retry} className="btn-primary btn-sm 3xl:btn-lg text-base">
              Try agin
            </button>
          </div>
        )}
      </Section>
    );
  }
);

export { CarouselSection, CarouselItem };
