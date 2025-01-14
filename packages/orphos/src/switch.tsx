"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";
import { cn } from "./lib/utils";

const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-5 w-8 shrink-0 cursor-pointer items-center rounded-full border-[0.5px] border-element-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-info-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background-subtle dark:focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-transparent data-[state=checked]:border-primary-element-border data-[state=checked]:bg-primary-background-element disabled:data-[state=unchecked]:bg-background-element",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block size-3.5 rounded-full bg-solid ring-0 transition-transform data-[state=checked]:bg-primary-solid data-[state=checked]:translate-x-3.5 data-[state=unchecked]:translate-x-[3px] disabled:data-[state=unchecked]:bg-background-element",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
