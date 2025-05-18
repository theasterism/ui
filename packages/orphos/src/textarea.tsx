import * as React from "react";
import { cn } from "./utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "scrollbar-hide flex min-h-[74px] w-full resize-none overflow-y-auto rounded-md inset-ring-1 inset-ring-border-element bg-transparent pt-2 pr-3 pb-6 pl-2 text-[14px] leading-loose ring-focus-ring/35 transition-all placeholder:text-foreground-subtle placeholder:text-sm focus-visible:inset-ring-focus-ring focus-visible:outline-none focus-visible:ring-3 disabled:cursor-not-allowed disabled:bg-background-element/50 disabled:text-foreground-subtle disabled:opacity-75 disabled:placeholder:text-foreground-subtle/50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
