import type * as React from "react";
import { cn } from "./utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "scrollbar-hide field-sizing-content inset-ring-1 inset-ring-border-element flex min-h-16 w-full overflow-y-auto rounded-md bg-background-element px-3 pt-2 pb-6 text-lg leading-normal transition-[color,box-shadow] placeholder:text-base placeholder:text-foreground-subtle focus-visible:inset-ring-2 focus-visible:inset-ring-focus-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:resize-none disabled:opacity-50 aria-invalid:inset-ring-2 aria-invalid:inset-ring-danger-border sm:text-base",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
