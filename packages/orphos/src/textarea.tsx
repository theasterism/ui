import type * as React from "react";
import { cn } from "./utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "scrollbar-hide field-sizing-content flex min-h-16 w-full overflow-y-auto rounded-md border border-border-element bg-background-element px-3 pt-2 pb-6 text-sm leading-normal outline-offset-[-1px] transition-[color,box-shadow] hover:border-border-element-hover focus-visible:outline disabled:cursor-not-allowed disabled:resize-none disabled:opacity-50 aria-invalid:outline aria-invalid:outline-danger",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
