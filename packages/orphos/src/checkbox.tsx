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
        "peer group inset-ring-1 inset-ring-border-element size-5 shrink-0 rounded-sm ring-focus-ring ring-offset-2 ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:inset-ring-primary-border data-[state=checked]:bg-primary-surface disabled:data-[state=unchecked]:bg-background-element dark:ring-offset-background-subtle",
        className
      )}
      {...props}>
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className={cn(
          "flex items-center justify-center text-current transition-all"
        )}>
        <CheckIcon className="size-3.5 text-primary" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
