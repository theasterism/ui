import type * as React from "react";
import { cn } from "./utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "scrollbar-hide field-sizing-content flex min-h-16 w-full overflow-y-auto rounded-md border border-border-subtle bg-background-element px-2.5 pt-2 pb-6 text-small leading-normal transition-[color,box-shadow] placeholder:text-foreground-subtle placeholder:text-small focus-visible:outline-2 focus-visible:-outline-offset-1 disabled:cursor-not-allowed disabled:resize-none disabled:opacity-50 aria-invalid:outline aria-invalid:outline-danger",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
