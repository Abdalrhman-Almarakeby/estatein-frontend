import PropertyCard from "@/components/ui/PropertyCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import FAQCard from "@/components/ui/FAQCard";
import HeroSection from "./HeroSection";
import { HomeCarouselSection, CarouselItem } from "./HomeCarouselSection";
import CTASection from "./CTASection";

export default function Home() {
  return (
    <main className="flex-grow bg-gray-08">
      <div className="container space-y-20 lg:space-y-30">
        <HeroSection />

        <HomeCarouselSection
          id="featured-properties"
          title="Featured Properties"
          paragraph="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein."
          link="/properties"
          sectionName="Properties"
        >
          {Array.from({ length: 60 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 md:pl-5 xl:basis-1/3">
              <PropertyCard />
            </CarouselItem>
          ))}
        </HomeCarouselSection>
        <HomeCarouselSection
          id="testimonials"
          title="What Our Clients Say"
          paragraph="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
          link="/"
          sectionName="Testimonials"
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 md:pl-5 xl:basis-1/3">
              <TestimonialCard />
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
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 md:pl-5 xl:basis-1/3">
              <FAQCard />
            </CarouselItem>
          ))}
        </HomeCarouselSection>
        <CTASection />
      </div>
    </main>
  );
}
