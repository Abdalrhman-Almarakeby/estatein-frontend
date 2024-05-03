import { z } from "zod";
import { INQUIRY_TYPES } from "@/constant/inquiryTypes";
import { HEAR_ABOUT_US } from "@/constant/hearAboutUs";

export const contactSchema = z.object({
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
  inquiryType: z.enum(INQUIRY_TYPES, {
    required_error: "Inquiry Type is required",
    invalid_type_error: "Invalid Inquiry Type",
  }),
  hearAboutUs: z.enum(HEAR_ABOUT_US, {
    required_error: "An Option for How You Heard About Us is required",
    invalid_type_error: "Invalid option for how you heard about us",
  }),
  message: z
    .string({ required_error: "Message is required", invalid_type_error: "Invalid Message" })
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters long")
    .max(500, "Message must be at most 500 characters long"),
  agreeOnTerms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms and conditions" }),
  }),
});

export type ContactSchema = z.infer<typeof contactSchema>;
