import { z } from "zod";
import { FILTERING_DATA } from "@/constant/filtersData";

function getOptionsAsTuple(filterName: string): [string, ...string[]] | null {
  const options = FILTERING_DATA.find(({ name }) => name === filterName)?.options.map(
    ({ value }) => value
  );
  return options && options.length > 0 ? [options[0], ...options.slice(1)] : null;
}

const propertiesFiltersZodSchema = z.object({
  location: z
    .enum(getOptionsAsTuple("location") || [""], {
      invalid_type_error: "Invalid location",
    })
    .optional(),
  propertyType: z
    .enum(getOptionsAsTuple("propertyType") || [""], {
      invalid_type_error: "Invalid property type",
    })
    .optional(),
  pricingRange: z
    .enum(getOptionsAsTuple("pricingRange") || [""], {
      invalid_type_error: "Invalid pricing range",
    })
    .optional(),
  propertySize: z
    .enum(getOptionsAsTuple("propertySize") || [""], {
      invalid_type_error: "Invalid property size",
    })
    .optional(),
});

type PropertiesFilters = z.infer<typeof propertiesFiltersZodSchema>;

export { propertiesFiltersZodSchema, type PropertiesFilters };
