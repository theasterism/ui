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
        "h-5 w-7.5 py-[0.075rem]",
        "cursor-default rounded-full border border-transparent",
        "outline-offset-2 focus-visible:outline",
        "transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        "before:-inset-[7px] relative before:absolute data-[state=checked]:bg-primary data-[state=unchecked]:bg-background-element data-[state=checked]:hover:bg-primary-hover data-[state=unchecked]:hover:bg-background-element-hover",
        className
      )}
      {...props}>
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-3.5 rounded-full bg-white",
          "transition-transform",
          "data-[state=checked]:translate-x-[calc(100%-1.5px)] data-[state=unchecked]:translate-x-[1.8px]"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
