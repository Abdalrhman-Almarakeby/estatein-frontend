import { forwardRef, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] sm:min-h-[100px] 3xl:py-6 lg:py-5 lg:min-h-[120px] 3xl:min-h-[140px] bg-gray-10 px-5 py-4 w-full rounded-md ring-offset-white  border   text-sm  focus-visible:outline-none focus-visible:ring-2  placeholder:text-gray-40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50    focus-visible:ring-slate-300",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
