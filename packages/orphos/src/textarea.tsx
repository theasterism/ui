import * as React from "react";
import { cn } from "./utils";

function Textarea({
  className,
  error,
  ...props
}: React.ComponentProps<"textarea"> & {
  error?: string | undefined;
}) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "scrollbar-hide flex min-h-[74px] w-full resize-none overflow-y-auto rounded-md border border-border-element/60 bg-transparent pt-2 pr-2 pb-6 pl-2 text-[14px] leading-loose ring-focus-ring transition-all placeholder:text-foreground-subtle placeholder:text-sm focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:text-foreground-subtle disabled:opacity-75 disabled:placeholder:text-foreground-subtle/50",
        className,
        error &&
          "border-danger-border ring-3 ring-danger-surface/35 focus-visible:border-danger-border focus-visible:ring-3"
      )}
      {...props}
    />
  );
}

export { Textarea };
