import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { type Property } from "@/types";
import { TESTIMONIALS } from "@/constant/testimonials";
import { FAQS } from "@/constant/faqs";
import { PropertyCard, PropertyCardSkelton } from "@/components/ui/PropertyCard";
import { TestimonialCard } from "@/pages/Home/TestimonialCard";
import { FAQCard } from "@/pages/Home/FAQCard";
import { HeroSection } from "./HeroSection";
import { HomeCarouselSection, CarouselItem } from "./HomeCarouselSection";
import { CTA } from "@/components/ui/CTA";

const PROPERTIES_TO_DISPLAY = 60;

export function Home() {
  const {
    data: properties,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const { data } = await axios.get<Property[]>(
        `https://estatein-zgvy.onrender.com/properties?limit=${PROPERTIES_TO_DISPLAY}`
      );
      return data;
    },
  });

  return (
    <main className="flex-grow bg-gray-08">
      <div className="page-spacing">
        <HeroSection />

        <HomeCarouselSection
          id="featured-properties"
          title="Featured Properties"
          paragraph="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein."
          link="/properties"
          sectionName="Properties"
          isError={isError}
          retry={refetch}
        >
          {properties &&
            properties.map((propertyData) => {
              return (
                <CarouselItem key={propertyData._id} className="md:basis-1/2 md:pl-5 xl:basis-1/3">
                  <PropertyCard {...propertyData} />
                </CarouselItem>
              );
            })}

          {isLoading &&
            Array.from({ length: PROPERTIES_TO_DISPLAY }).map((_, i) => (
              <CarouselItem key={i} className="md:basis-1/2 md:pl-5 xl:basis-1/3">
                <PropertyCardSkelton />
              </CarouselItem>
            ))}
        </HomeCarouselSection>

        <HomeCarouselSection
          id="testimonials"
          title="What Our Clients Say"
          paragraph="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
          link="/about#clients"
          sectionName="Testimonials"
        >
          {TESTIMONIALS.map((testimonial) => (
            <CarouselItem key={testimonial.name} className="md:basis-1/2 md:pl-5 xl:basis-1/3">
              <TestimonialCard {...testimonial} />
            </CarouselItem>
          ))}
        </HomeCarouselSection>

        <HomeCarouselSection
          id="faqs"
          title="Frequently Asked Questions"
          paragraph="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
          link="/about"
          sectionName="FAQs"
        >
          {FAQS.map((faq) => (
            <CarouselItem key={faq.question} className="md:basis-1/2 md:pl-5 xl:basis-1/3">
              <FAQCard {...faq} />
            </CarouselItem>
          ))}
        </HomeCarouselSection>
        <CTA />
      </div>
    </main>
  );
}
