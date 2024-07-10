import { useFormHandler } from "@/lib/hooks/useFormHandler";
import {
  PropertiesInquiry,
  propertiesInquiryZodSchema,
} from "@/lib/schemas/PropertiesInquiryFormSchema";
import { axios } from "@/lib/axios";

export function usePropertiesInquiryForm() {
  return useFormHandler<PropertiesInquiry>({
    schema: propertiesInquiryZodSchema,
    mutationFn: async (propertyInquiryData) => {
      axios.post("/propertiesInquiries", propertyInquiryData);
    },
  });
}
