import { formatWithComma, upperFirst } from "@/lib/utils/string";
import LocationIconSVG from "@/assets/icons/location.svg?react";
import PropertyIconSVG from "@/assets/icons/property.svg?react";
import CashIconSVG from "@/assets/icons/cash.svg?react";
import CubeIconSVG from "@/assets/icons/cube.svg?react";
import { LOCATIONS } from "./locations";
import { PROPERTIES_TYPES } from "./propertiesTypes";
import { PRICING_RANGES } from "./pricingRanges";
import { PROPERTY_SIZES } from "./propertySizes";

export const FILTERING_DATA = [
  {
    name: "location",
    label: "Location",
    Icon: LocationIconSVG,
    options: LOCATIONS.map((location) => ({
      label: upperFirst(location),
      value: location,
    })),
  },
  {
    label: "Property Type",
    name: "propertyType",
    Icon: PropertyIconSVG,
    options: PROPERTIES_TYPES.map((type) => ({
      label: upperFirst(type),
      value: type,
    })),
  },
  {
    label: "Pricing Range",
    name: "pricingRange",
    Icon: CashIconSVG,
    options: PRICING_RANGES.map(({ min, max }, i) => {
      const isLast = i === PRICING_RANGES.length - 1;

      return {
        label: isLast
          ? `${formatWithComma(min)}$+`
          : `${formatWithComma(min)}$ - ${formatWithComma(max)}$`,
        value: isLast ? `${min}` : `${min}-${max}`,
      };
    }),
  },
  {
    label: "Property Size",
    name: "propertySize",
    Icon: CubeIconSVG,
    options: PROPERTY_SIZES.map(({ min, max }, i) => {
      const isLast = i === PRICING_RANGES.length - 1;

      return {
        label: isLast
          ? `${formatWithComma(min)}m²+`
          : `${formatWithComma(min)}m² - ${formatWithComma(max)}m²`,
        value: isLast ? `${min}` : `${min}-${max}`,
      };
    }),
  },
] as const;

export const LOCATION_OPTIONS = getOptionsAsTuple("location") || [""];
export const PROPERTY_TYPE_OPTIONS = getOptionsAsTuple("propertyType") || [""];
export const PRICING_RANGE_OPTIONS = getOptionsAsTuple("pricingRange") || [""];
export const PROPERTY_SIZE_OPTIONS = getOptionsAsTuple("propertySize") || [""];

function getOptionsAsTuple(filterName: string): [string, ...string[]] | null {
  const options = FILTERING_DATA.find(({ name }) => name === filterName)?.options.map(
    ({ value }) => value
  );
  return options && options.length > 0 ? [options[0], ...options.slice(1)] : null;
}
