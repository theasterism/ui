"use client";
import { CheckIcon } from "@heroicons/react/24/outline";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";
import { cn } from "./lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer size-5 group shrink-0 transition-all rounded-xs border-[0.5px] border-element-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-background-subtle dark:focus-visible:ring-offset-background focus-visible:ring-offset-2 focus-visible:ring-info-focus-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-background-element data-[state=checked]:border-primary-element-border disabled:data-[state=unchecked]:bg-background-element",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current transition-all")}>
      <CheckIcon className="size-3.5 stroke-3 stroke-primary-solid group-disabled:group-data-[state=checked]:stroke-primary-solid" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
