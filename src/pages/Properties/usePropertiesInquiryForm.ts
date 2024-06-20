import { useDebugValue, useState, type BaseSyntheticEvent } from "react";
import { useForm, type UseFormRegister, type FieldErrors, Control } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { PropertiesInquiry, propertiesInquiryZodSchema } from "@/lib/schemas";
import { axios } from "@/lib/axios";
import { omit } from "@/lib/utils";

type PropertiesInquirySchema = Omit<PropertiesInquiry, "agreeOnTerms">;

export function usePropertiesInquiryForm(): {
  register: UseFormRegister<PropertiesInquiry>;
  onSubmit: (e?: BaseSyntheticEvent<object> | undefined) => Promise<void>;
  errors: FieldErrors<PropertiesInquiry>;
  control: Control<PropertiesInquiry>;
  isPending: boolean;
} {
  const [toastId, setToastId] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<PropertiesInquiry>({
    resolver: zodResolver(propertiesInquiryZodSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (propertyInquiryData: PropertiesInquirySchema) =>
      axios.post("/propertiesInquiries", propertyInquiryData),
    onMutate: () => setToastId(toast.loading("Sending Your Message...", { className: "toast" })),
    onSuccess: () =>
      toast.success("Your message is sent successfully!", {
        id: toastId || undefined,
        className: "toast",
      }),
    onError: () =>
      toast.error("Something went wrong, please try again later!", {
        id: toastId || undefined,
        className: "toast",
      }),
  });

  function onSubmit(data: PropertiesInquiry) {
    mutate(omit(data, "agreeOnTerms"));
    reset();
  }

  useDebugValue({
    formErrors: errors,
    isPending,
  });

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    errors,
    control,
    isPending,
  };
}
