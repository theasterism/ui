"use client";

import { Switch as SwitchPrimitive } from "radix-ui";
import type * as React from "react";
import { cn } from "./utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "inline-flex shrink-0 items-center align-middle",
        "h-[1.35rem] w-[2.4rem] py-[0.075rem]",
        "cursor-default rounded-full border border-transparent outline-none",
        "ring-focus-ring ring-offset-1 ring-offset-background focus-visible:ring-2",
        "transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-primary data-[state=unchecked]:bg-background-element",
        className
      )}
      {...props}>
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-[1.2rem] rounded-full bg-white",
          "transition-transform",
          "data-[state=checked]:translate-x-[calc(100%-2.4px)] data-[state=unchecked]:translate-x-[0.6px]"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
