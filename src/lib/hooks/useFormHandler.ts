import { useDebugValue } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { ZodSchema } from "zod";
import { omit } from "@/lib/utils/object";
import { useToastNotification } from "./useToastNotification";

type UseFormHandlerOptions<T, S> = {
  schema: ZodSchema<T>;
  mutationFn: (data: S) => Promise<unknown>;
  successMessage?: string;
  errorMessage?: string;
};

export function useFormHandler<T extends Record<string, unknown>>(
  options: UseFormHandlerOptions<T, Omit<T, "agreeOnTerms">>
) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<T>({
    resolver: zodResolver(options.schema),
  });

  const toastNotification = useToastNotification({
    successMessage: options.successMessage,
    errorMessage: options.errorMessage,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: options.mutationFn,
    onMutate: toastNotification.showLoading,
    onSuccess: () => {
      toastNotification.showSuccess();
      reset();
    },
    onError: toastNotification.showError,
  });

  function onSubmit(data: T) {
    mutate(omit(data, "agreeOnTerms") as Omit<T, "agreeOnTerms">);
  }

  useDebugValue({
    formErrors: errors,
    isPending: isPending,
  });

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    errors,
    control,
    isPending,
  };
}
