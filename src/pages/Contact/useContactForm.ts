import { useState, type BaseSyntheticEvent } from "react";
import { useForm, type UseFormRegister, type FieldErrors, Control } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast";
import { contactSchema, type ContactSchema } from "@/lib/schemas/contactSchema";
import { omit } from "@/lib/utils/object";

type InquirySchema = Omit<ContactSchema, "agreeOnTerms">;

export function useContactForm(): {
  register: UseFormRegister<ContactSchema>;
  onSubmit: (e?: BaseSyntheticEvent<object> | undefined) => Promise<void>;
  errors: FieldErrors<ContactSchema>;
  control: Control<ContactSchema>;
  isPending: boolean;
} {
  const [toastId, setToastId] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
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

  function onSubmit(data: ContactSchema) {
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
