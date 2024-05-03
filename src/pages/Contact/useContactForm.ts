import { type BaseSyntheticEvent } from "react";
import { useForm, type UseFormRegister, type FieldErrors, Control } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactSchema } from "@/lib/schemas/contactSchema";

export function useContactForm(): {
  register: UseFormRegister<ContactSchema>;
  onSubmit: (e?: BaseSyntheticEvent<object> | undefined) => Promise<void>;
  errors: FieldErrors<ContactSchema>;
  control: Control<ContactSchema>;
} {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  function onSubmit(data: ContactSchema) {
    data;
    reset();
  }

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    errors,
    control,
  };
}
