"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "iconoir-react";
import * as React from "react";
import { cn } from "./lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer size-6 group shrink-0 transition-all rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-background focus-visible:ring-offset-2 focus-visible:ring-info-focus-ring disabled:cursor-not-allowed disabled:opacity-50  data-[state=checked]:bg-primary-solid disabled:data-[state=unchecked]:bg-background-element disabled:data-[state=checked]:bg-primary-background-element disabled:data-[state=checked]:border-primary-element-border",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current transition-all")}>
      <Check className="size-4 stroke-3 stroke-none text-white group-disabled:group-data-[state=checked]:text-foreground/50 fill-none" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
