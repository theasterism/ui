import * as React from "react";
import { cn } from "./utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "scrollbar-hide inset-ring-1 inset-ring-border-element flex min-h-[74px] w-full resize-none overflow-y-auto rounded-md bg-transparent pt-2 pr-3 pb-6 pl-2 text-[14px] leading-loose transition-all placeholder:text-foreground-subtle placeholder:text-sm focus-visible:inset-ring-2 focus-visible:inset-ring-focus-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-background-element/50 disabled:text-foreground-subtle disabled:opacity-75 disabled:placeholder:text-foreground-subtle/50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
