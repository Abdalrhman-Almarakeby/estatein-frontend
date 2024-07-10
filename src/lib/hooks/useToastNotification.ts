import { useState } from "react";
import { toast } from "react-hot-toast";

type UseToastNotificationOptions = {
  loadingMessage?: string;
  successMessage?: string;
  errorMessage?: string;
};

export function useToastNotification(options: UseToastNotificationOptions = {}) {
  const [toastId, setToastId] = useState<string | null>(null);

  const showLoading = () => {
    setToastId(
      toast.loading(options.loadingMessage ?? "Sending Your Message...", { className: "toast" })
    );
  };

  const showSuccess = () => {
    toast.success(options.successMessage ?? "Your message is sent successfully!", {
      id: toastId || undefined,
      className: "toast",
    });
  };

  const showError = () => {
    toast.error(options.errorMessage || "Something went wrong, please try again later!", {
      id: toastId || undefined,
      className: "toast",
    });
  };

  return {
    showLoading,
    showSuccess,
    showError,
  };
}
