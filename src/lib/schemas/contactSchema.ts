import { z } from "zod";
import { INQUIRY_TYPES } from "@/constant/inquiryTypes";
import { HEAR_ABOUT_US } from "@/constant/hearAboutUs";

export const contactSchema = z.object({
  firstName: z.string().min(3).max(30),
  lastName: z.string().min(3).max(30),
  email: z.string().email(),
  phone: z.string().min(10).max(14),
  inquiryType: z.enum(INQUIRY_TYPES),
  hearAboutUs: z.enum(HEAR_ABOUT_US),
  message: z.string().min(10).max(500),
});

export type ContactSchema = z.infer<typeof contactSchema>;
