import { useEffect, useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import { Link } from "react-router-dom";

type HomeCarouselSectionProps = {
  id: string;
  sectionName: string;
  title: string;
  paragraph: string;
  link: string;
  children: React.ReactNode[];
};

function HomeCarouselSection({
  id,
  sectionName,
  title,
  paragraph,
  link,
  children,
}: HomeCarouselSectionProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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

      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="flex flex-col gap-7.5"
      >
        <CarouselContent className="md:-ml-5">{children}</CarouselContent>
        <div className="flex items-center border-t border-t-gray-15 pt-4 text-sm min-[450px]:flex-row lg:gap-2.5">
          <Link
            to={link}
            className="mr-auto rounded-lg border border-gray-15 px-5 py-3.5 text-center lg:hidden"
          >
            View All {sectionName}
          </Link>
          <CarouselPrevious className="static translate-x-0 translate-y-0 lg:order-2" />
          <p className="px-5 text-gray-60 lg:order-1 lg:mr-auto lg:text-base">
            <span className="text-white">{current}</span> of {count}
          </p>
          <CarouselNext className="static translate-x-0 translate-y-0 lg:order-3" />
        </div>
      </Carousel>
    </section>
  );
}

export { HomeCarouselSection, CarouselItem };
