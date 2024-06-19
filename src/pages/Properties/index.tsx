import { CTA } from "@/components/ui/CTA";
import { HeaderSection } from "@/components/ui/HeaderSection";

export function Properties() {
  return (
    <div className="page-spacing flex-grow">
      <HeaderSection
        paragraph="Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey."
        title="Find Your Dream Property"
      />

      <CTA />
    </div>
  );
}
