import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { CarouselSection, CarouselItem } from "@/components/ui/CarouselSection";
import { PropertyCard, PropertyCardSkelton } from "@/components/ui/PropertyCard";
import { CTA } from "@/components/ui/CTA";
import { TESTIMONIALS } from "@/constant/testimonials";
import { FAQS } from "@/constant/faqs";
import { type Property } from "@/types/property";
import { axios } from "@/lib/axios";
import { TestimonialCard } from "./TestimonialCard";
import { FAQCard } from "./FAQCard";
import { HeroSection } from "./HeroSection";

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
      const { data } = await axios.get<Property[]>(`/properties?limit=${PROPERTIES_TO_DISPLAY}`);
      return data;
    },
  });

  return (
    <main className="flex-grow bg-gray-08">
      <Helmet>
        <title>Estatein - Your Ultimate Real Estate Destination | Discover Properties</title>
        <meta
          name="description"
          content="Welcome to Estatein! Find your perfect home, explore top property listings, and connect with trusted real estate agents. Your dream property is just a click away."
        />
        <meta
          name="keywords"
          content="real estate, property listings, home search, real estate agents, dream home"
        />
      </Helmet>
      <div className="page-spacing">
        <HeroSection />

        <CarouselSection
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
        </CarouselSection>

        <CarouselSection
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
        </CarouselSection>

        <CarouselSection
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
        </CarouselSection>
        <CTA />
      </div>
    </main>
  );
}
