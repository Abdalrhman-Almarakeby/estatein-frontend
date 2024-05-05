import { useState, type BaseSyntheticEvent } from "react";
import { useForm, type UseFormRegister, type FieldErrors, Control } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast";
import { inquiryZodSchema, type Inquiry } from "@/lib/schemas/inquirySchema";
import { omit } from "@/lib/utils/object";

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
      axios.post("https://estatein-zgvy.onrender.com/inquiries", {
        inquiryData,
      }),
    onMutate: () => setToastId(toast.loading("Sending Your Message...")),
    onSuccess: () =>
      toast.success("Your message is sent successfully!", {
        id: toastId || undefined,
      }),
    onError: () =>
      toast.error("something went wrong, please try again later!", {
        id: toastId || undefined,
      }),
  });

  function onSubmit(data: Inquiry) {
    mutate(omit(data, "agreeOnTerms"));
    reset();
  }

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    errors,
    control,
    isPending,
  };
}
