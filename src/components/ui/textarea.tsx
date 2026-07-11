import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-xl border border-gold/20 bg-white/5 px-4 py-3 text-sm backdrop-blur-sm transition-all duration-300 placeholder:text-muted focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 dark:bg-navy/40",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
