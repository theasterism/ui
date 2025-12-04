"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui-components/react/checkbox";
import type * as React from "react";
import { IconCheck, IconMinus } from "./icons";
import { cn } from "./utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer size-4.5 shrink-0 rounded-sm border bg-background-element focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:outline-2 aria-invalid:outline-danger aria-invalid:outline-offset-2 data-checked:border-primary-border data-checked:bg-primary-subtle",
        className
      )}
      {...props}>
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className={cn("group flex items-center justify-center text-current")}>
        <IconMinus className="hidden size-3.5 text-primary group-data-indeterminate:inline" />
        <IconCheck className="hidden size-3.5 text-primary group-data-checked:inline" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
