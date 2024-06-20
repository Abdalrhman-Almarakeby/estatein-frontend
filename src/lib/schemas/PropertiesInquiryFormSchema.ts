import {
  LOCATION_OPTIONS,
  PRICING_RANGE_OPTIONS,
  PROPERTY_SIZE_OPTIONS,
  PROPERTY_TYPE_OPTIONS,
} from "@/constant/filtersData";
import { z } from "zod";

const propertiesInquiryZodSchema = z.object({
  firstName: z
    .string({ required_error: "First Name is required", invalid_type_error: "Invalid First Name" })
    .min(1, "First Name is required")
    .min(3, "First name must be at least 3 characters long")
    .max(30, "First name must be at most 30 characters long"),
  lastName: z
    .string({ required_error: "Last Name is required", invalid_type_error: "Invalid Last Name" })
    .min(1, "Last Name is required")
    .min(3, "Last name must be at least 3 characters long")
    .max(30, "Last name must be at most 30 characters long"),
  email: z
    .string({ required_error: "Email is required", invalid_type_error: "Invalid Email" })
    .min(1, "Email is required")
    .email("Invalid Email"),
  phone: z
    .string({
      required_error: "Phone Number is required",
      invalid_type_error: "Invalid Phone Number",
    })
    .min(1, "Phone Number is required")
    .min(10, "Phone number must be at least 10 digits long")
    .max(14, "Phone number must be at most 14 digits long"),
  preferredLocation: z.enum(LOCATION_OPTIONS, {
    required_error: "Preferred location is required",
    invalid_type_error: "Invalid preferred location",
  }),
  propertyType: z.enum(PROPERTY_TYPE_OPTIONS, {
    required_error: "Property type is required",
    invalid_type_error: "Invalid property type",
  }),
  numOfBathrooms: z.string().refine(
    (value) => {
      const numberValue = Number(value);
      return !isNaN(numberValue) && numberValue >= 1 && numberValue <= 5;
    },
    {
      message: "No. Of Bathrooms must be a number  between 1 and 5",
    }
  ),
  numOfRooms: z.string().refine(
    (value) => {
      const numberValue = Number(value);
      return !isNaN(numberValue) && numberValue >= 1 && numberValue <= 10;
    },
    {
      message: "No. Of Rooms must be a number  between 1 and 10",
    }
  ),
  budget: z.enum(PRICING_RANGE_OPTIONS, {
    required_error: "Budget is required",
    invalid_type_error: "Invalid budget",
  }),
  propertySize: z.enum(PROPERTY_SIZE_OPTIONS, {
    required_error: "Property size is required",
    invalid_type_error: "Invalid property size",
  }),
  preferredContactMethod: z.enum(["email", "phone"], {
    required_error: "Property size is required",
    invalid_type_error: "Invalid property size",
  }),
  message: z
    .string({ required_error: "Message is required", invalid_type_error: "Invalid Message" })
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters long")
    .max(500, "Message must be at most 500 characters long"),
  agreeOnTerms: z.literal(true, {
    errorMap: () => ({ message: "You have to agree to the terms and conditions" }),
  }),
});

type PropertiesInquiry = z.infer<typeof propertiesInquiryZodSchema>;

export { propertiesInquiryZodSchema, type PropertiesInquiry };
