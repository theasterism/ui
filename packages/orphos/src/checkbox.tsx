"use client";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { cn } from "./utils";

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer size-5 group shrink-0 transition-all rounded-sm border border-border-element/60 focus-visible:outline-none focus-visible:ring-2 ring-offset-background-subtle ring-offset-2 ring-focus-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-element data-[state=checked]:border-primary-border disabled:data-[state=unchecked]:bg-background-element",
      className
    )}
    {...props}>
    <CheckboxPrimitive.Indicator
      className={cn(
        "flex items-center justify-center text-current transition-all"
      )}>
      <CheckIcon className="size-4 text-primary-element-foreground" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
