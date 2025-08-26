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
        "relative h-[25px] w-[45px] cursor-default rounded-md bg-background-element ring-focus-ring ring-offset-1 ring-offset-background focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary",
        className
      )}
      {...props}>
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-[21px] translate-x-0.5 rounded-md bg-white ring-0 transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[22.5px]"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
