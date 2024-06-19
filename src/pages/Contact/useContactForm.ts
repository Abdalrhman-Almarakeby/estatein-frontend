import { useDebugValue, useState, type BaseSyntheticEvent } from "react";
import { useForm, type UseFormRegister, type FieldErrors, Control } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { inquiryZodSchema, type Inquiry } from "@/lib/schemas";
import { axios } from "@/lib/axios";
import { omit } from "@/lib/utils";

type InquirySchema = Omit<Inquiry, "agreeOnTerms">;

export function useContactForm(): {
  register: UseFormRegister<Inquiry>;
  onSubmit: (e?: BaseSyntheticEvent<object> | undefined) => Promise<void>;
  errors: FieldErrors<Inquiry>;
  control: Control<Inquiry>;
  isPending: boolean;
} {
  const [toastId, setToastId] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<Inquiry>({
    resolver: zodResolver(inquiryZodSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (inquiryData: InquirySchema) =>
      axios.post("/inquiries", {
        inquiryData,
      }),
    onMutate: () => setToastId(toast.loading("Sending Your Message...", { className: "toast" })),
    onSuccess: () =>
      toast.success("Your message is sent successfully!", {
        id: toastId || undefined,
        className: "toast",
      }),
    onError: () =>
      toast.error("something went wrong, please try again later!", {
        id: toastId || undefined,
        className: "toast",
      }),
  });

  function onSubmit(data: Inquiry) {
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
