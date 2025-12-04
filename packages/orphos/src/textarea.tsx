import type * as React from "react";
import { cn } from "./utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "scrollbar-hide field-sizing-content focus-visible:-outline-offset-1 flex min-h-16 w-full overflow-y-auto rounded-md border bg-background-element px-2.5 pt-2 pb-6 text-sm leading-normal transition-[color,box-shadow] placeholder:text-foreground-subtle placeholder:text-sm focus-visible:outline-2 disabled:cursor-not-allowed disabled:resize-none disabled:opacity-50 aria-invalid:outline aria-invalid:outline-danger",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
