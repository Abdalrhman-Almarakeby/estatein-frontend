import { forwardRef, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md ring-offset-white  border  px-3 py-2 text-sm border-gray-15 bg-gray-08 focus-visible:outline-none focus-visible:ring-2  placeholder:text-gray-40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50    focus-visible:ring-slate-300",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
