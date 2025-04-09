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
        "flex text-[14px] leading-loose min-h-[74px] w-full bg-background-element/60 rounded-md border border-border-element/60 pl-2 pr-2 pt-2 pb-6 resize-none scrollbar-hide overflow-y-auto transition-all focus-visible:border-transparent focus-visible:ring-2 ring-focus-ring focus-visible:outline-none placeholder:text-foreground-subtle placeholder:text-sm disabled:cursor-not-allowed disabled:opacity-75 disabled:placeholder:text-foreground-subtle/50 disabled:text-foreground-subtle",
        className,
        error &&
          "border-danger-border ring-3 ring-danger-element focus-visible:ring-3 focus-visible:border-danger-border"
      )}
      {...props}
    />
  );
}

export { Textarea };
