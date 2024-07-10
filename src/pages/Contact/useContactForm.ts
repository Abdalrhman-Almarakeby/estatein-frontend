import { useFormHandler } from "@/lib/hooks/useFormHandler";
import { Inquiry, inquiryZodSchema } from "@/lib/schemas/inquirySchema";
import { axios } from "@/lib/axios";

export function useContactForm() {
  return useFormHandler<Inquiry>({
    schema: inquiryZodSchema,
    mutationFn: async (inquiryData) => axios.post("/inquiries", { inquiryData }),
  });
}
