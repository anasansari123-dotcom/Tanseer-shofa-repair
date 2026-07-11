import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-xl border border-gold/20 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm transition-all duration-300 placeholder:text-muted focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 dark:bg-navy/40",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
