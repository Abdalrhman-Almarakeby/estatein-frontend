import { useFetch } from "@/lib/hooks/useFetch";
import { type Property } from "@/types/property";
import { testimonials } from "@/constant/testimonials";
import { faqs } from "@/constant/faqs";
import Loading from "@/components/ui/Loading";
import PropertyCard from "@/components/ui/PropertyCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import FAQCard from "@/components/ui/FAQCard";
import HeroSection from "./HeroSection";
import { HomeCarouselSection, CarouselItem } from "./HomeCarouselSection";
import CTASection from "./CTASection";

export default function Home() {
  const {
    data: propertiesData,
    isPending,
    error,
  } = useFetch<Property[]>("http://localhost:8080/properties?limit=60");

  return (
    <main className="flex-grow bg-gray-08">
      {isPending && <Loading />}
      {error && <p>{error}</p>}
      <div className="container space-y-20 lg:space-y-30">
        <HeroSection />

        {propertiesData && (
          <HomeCarouselSection
            id="featured-properties"
            title="Featured Properties"
            paragraph="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein."
            link="/properties"
            sectionName="Properties"
          >
            {propertiesData.map((propertyData) => {
              return (
                <CarouselItem key={propertyData._id} className="md:basis-1/2 md:pl-5 xl:basis-1/3">
                  <PropertyCard {...propertyData} />
                </CarouselItem>
              );
            })}
          </HomeCarouselSection>
        )}

        <HomeCarouselSection
          id="testimonials"
          title="What Our Clients Say"
          paragraph="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
          link="/"
          sectionName="Testimonials"
        >
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.name} className="md:basis-1/2 md:pl-5 xl:basis-1/3">
              <TestimonialCard {...testimonial} />
            </CarouselItem>
          ))}
        </HomeCarouselSection>

        <HomeCarouselSection
          id="featured-properties"
          title="Frequently Asked Questions"
          paragraph="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
          link="/"
          sectionName="FAQs"
        >
          {faqs.map((faq) => (
            <CarouselItem key={faq.question} className="md:basis-1/2 md:pl-5 xl:basis-1/3">
              <FAQCard {...faq} />
            </CarouselItem>
          ))}
        </HomeCarouselSection>
        <CTASection />
      </div>
    </main>
  );
}
