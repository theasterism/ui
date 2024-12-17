"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";
import { cn } from "./lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full border-1 border-element-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-info-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background-subtle dark:focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-transparent data-[state=unchecked]:bg-transparent data-[state=checked]:border-primary-element-border disabled:data-[state=unchecked]:bg-background-element disabled:data-[state=checked]:bg-primary-background-element",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-4.5 w-4.5 rounded-full bg-solid ring-0 transition-transform data-[state=checked]:bg-primary-solid data-[state=checked]:translate-x-4.5 data-[state=unchecked]:translate-x-0.5 disabled:data-[state=unchecked]:bg-background-element",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
