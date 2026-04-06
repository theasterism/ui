"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { IconCheck, IconMinus } from "@tabler/icons-react";
import type * as React from "react";
import { cn } from "./utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "group relative flex size-4 shrink-0 items-center justify-center rounded-sm border border-border-subtle bg-background-element transition-colors before:absolute before:-inset-1.75 focus-visible:outline-2 focus-visible:outline-offset-2 group-has-disabled/field:opacity-50 aria-invalid:outline-2 aria-invalid:outline-danger aria-invalid:outline-offset-2 data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-checked:border-primary-border data-indeterminate:border-primary-border data-checked:bg-primary data-indeterminate:bg-primary data-disabled:opacity-50",
        className
      )}
      {...props}>
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className={cn(
          "flex items-center justify-center text-current transition-none [&>svg]:size-3"
        )}>
        <IconMinus className="hidden text-primary-foreground group-data-indeterminate:inline" />
        <IconCheck className="hidden text-primary-foreground group-data-checked:inline" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
