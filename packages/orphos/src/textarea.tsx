import * as React from "react";
import { cn } from "./lib/utils";
import type { FieldError } from "react-hook-form";

export interface TextAreaProps extends React.ComponentProps<"textarea"> {
  error: FieldError | undefined;
}

const Textarea = ({ className, ref, error, ...props }: TextAreaProps) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[128px] w-full bg-background-subtle dark:bg-background rounded-md border border-element-border px-3 py-2 focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-offset-background-subtle dark:focus-visible:ring-offset-background focus-visible:ring-info-focus-ring focus-visible:outline-none text-base shadow-sm transition-all placeholder:text-foreground-subtle placeholder:text-sm disabled:cursor-not-allowed disabled:placeholder:text-foreground-subtle/50 disabled:text-foreground-subtle disabled:bg-background-element md:text-sm disabled:resize-none",
        className,
        error && "border-danger-element-border",
      )}
      ref={ref}
      {...props}
    />
  );
};

Textarea.displayName = "Textarea";

export { Textarea };
