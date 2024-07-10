import { useFormHandler } from "@/lib/hooks/useFormHandler";
import { Email, emailZodSchema } from "@/lib/schemas/emailSchema";
import { axios } from "@/lib/axios";

export function useNewsletter() {
  return useFormHandler<Email>({
    schema: emailZodSchema,
    mutationFn: async ({ email }) => axios.post("/newsletter", { email }),
  });
}
