import { useSearchParams } from "react-router-dom";
import { LOCATIONS, LOCATIONS_TYPE } from "@/constant/locations";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { LocationCard } from "./LocationCard";
import { cn } from "@/lib/utils/cn";

type LocationsType = (typeof LOCATIONS_TYPE)[number];

export function OfficeLocations() {
  const [searchParams, setSearchParams] = useSearchParams({ locationsType: "all" });
  const currentLocationsType = searchParams.get("locationsType") as LocationsType;

  const filteredLocations =
    currentLocationsType === "all"
      ? LOCATIONS
      : LOCATIONS.filter((location) => location.type === currentLocationsType);

  function handleLocationsClick(locationsType: LocationsType) {
    setSearchParams((prev) => {
      prev.set("locationsType", locationsType);
      return prev;
    });
  }

  return (
    <div className="space-y-10 md:space-y-12 lg:space-y-15 2xl:space-y-20">
      <SectionTitle
        title="Discover Our Office Locations"
        paragraph="Estatein is here to serve you across multiple locations. Whether you're looking to meet our team."
      />
      <div className="flex flex-col gap-7.5 lg:gap-10 3xl:gap-15">
        <div
          role="tablist"
          className="grid grid-cols-3 gap-2.5 rounded-[0.625rem] bg-gray-10 p-2.5 lg:self-start"
        >
          {LOCATIONS_TYPE.map((element) => (
            <button
              role="tab"
              aria-selected={currentLocationsType === element}
              aria-label={`Show ${element} locations`}
              className={cn(
                "btn-sm capitalize lg:px-9 3xl:px-16 3xl:btn-lg",
                currentLocationsType === element ? "btn-secondary" : "btn-tertiary"
              )}
              onClick={() => handleLocationsClick(element)}
            >
              {element}
            </button>
          ))}
        </div>
        <div role="tabpanel" className="grid gap-5 lg:grid-cols-2 lg:gap-5 3xl:gap-7.5">
          {filteredLocations.map((location) => (
            <LocationCard key={location.label} {...location} />
          ))}
        </div>
      </div>
    </div>
  );
}