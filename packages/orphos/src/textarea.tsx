import * as React from "react";
import { cn } from "./lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[128px] w-full bg-background rounded-md border border-element-border px-3 py-2 focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-offset-background focus-visible:ring-info-focus-ring focus-visible:outline-none text-base shadow-sm transition-all placeholder:text-foreground-subtle placeholder:text-sm disabled:cursor-not-allowed disabled:placeholder:text-foreground-subtle/50 disabled:text-foreground-subtle disabled:bg-background-subtle md:text-sm disabled:resize-none",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
