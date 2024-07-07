import { useQuery } from "@tanstack/react-query";
import { CarouselItem, CarouselSection } from "@/components/ui/CarouselSection";
import { axios } from "@/lib/axios";
import { Property } from "@/types";
import { PropertyCard, PropertyCardSkelton } from "@/components/ui/PropertyCard";
import { PropertiesFilters } from "@/lib/schemas";

type PropertiesSectionProps = {
  filters: PropertiesFilters;
};

export function PropertiesSection({ filters }: PropertiesSectionProps) {
  const {
    data: properties,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const { data } = await axios.get<Property[]>(`/properties`);
      return data;
    },
  });

  function filterProperties(properties: Property[], filters: PropertiesFilters): Property[] | null {
    // TODO: Implement real client side validation
    // eslint-disable-next-line no-console
    console.log(filters);
    return properties;
  }

  const filteredProperties = properties ? filterProperties(properties, filters) : null;

  return (
    <CarouselSection
      id="properties"
      title="Discover a World of Possibilities"
      paragraph="Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home"
      isError={isError}
      retry={refetch}
      viewAll={false}
    >
      {filteredProperties &&
        filteredProperties.map((propertyData) => {
          return (
            <CarouselItem key={propertyData._id} className="md:basis-1/2 md:pl-5 xl:basis-1/3">
              <PropertyCard {...propertyData} />
            </CarouselItem>
          );
        })}

      {isLoading &&
        Array.from({ length: 6 }).map((_, i) => (
          <CarouselItem key={i} className="md:basis-1/2 md:pl-5 xl:basis-1/3">
            <PropertyCardSkelton />
          </CarouselItem>
        ))}
    </CarouselSection>
  );
}
