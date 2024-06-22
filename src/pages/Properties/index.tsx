import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CTA } from "@/components/ui/CTA";
import { HeaderSection } from "@/components/ui/HeaderSection";
import { FilterForm } from "./FilterForm";
import { PropertiesSection } from "./PropertiesSection";
import { PropertiesFilters, propertiesFiltersZodSchema } from "@/lib/schemas";
import { PropertiesInquiryForm } from "./PropertiesInquiryForm";
import { Helmet } from "react-helmet-async";

export function Properties() {
  const { control, watch } = useForm<PropertiesFilters>({
    resolver: zodResolver(propertiesFiltersZodSchema),
  });

  return (
    <div className="page-spacing flex-grow">
      <Helmet>
        <title>Properties - EstateIn | Discover the Best Real Estate Listings</title>
        <meta
          name="description"
          content="Explore a diverse range of real estate properties with EstateIn. Find your dream home, investment property, or rental with ease. Browse our listings today and discover the best properties available."
        />
        <meta
          name="keywords"
          content="real estate, properties, homes for sale, investment properties, rentals, buy property, estate listings"
        />
      </Helmet>
      <div className="space-y-5">
        <HeaderSection
          paragraph="Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey."
          title="Find Your Dream Property"
        />
        <FilterForm control={control} />
      </div>
      <PropertiesSection filters={watch()} />
      <PropertiesInquiryForm />
      <CTA />
    </div>
  );
}
