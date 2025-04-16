"use client";

import { CheckIcon } from "@heroicons/react/24/solid";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";
import { cn } from "./utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer group size-5 shrink-0 rounded-sm border border-border-element/60 ring-focus-ring ring-offset-2 ring-offset-background-subtle transition-all focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary-border data-[state=checked]:bg-primary-surface disabled:data-[state=unchecked]:bg-background-element dark:ring-offset-background",
        className
      )}
      {...props}>
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className={cn(
          "flex items-center justify-center text-current transition-all"
        )}>
        <CheckIcon className="size-4 text-primary-surface-foreground" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
