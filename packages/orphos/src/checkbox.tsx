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
        "peer before:-inset-[7px] relative flex size-4 shrink-0 items-center justify-center rounded-xs border bg-background-element before:absolute focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:outline-2 aria-invalid:outline-danger aria-invalid:outline-offset-2 data-checked:border-transparent data-checked:bg-primary data-indeterminate:bg-primary",
        className
      )}
      {...props}>
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className={cn("group flex text-current")}>
        <IconMinus className="hidden size-3 text-primary-foreground group-data-indeterminate:inline" />
        <IconCheck className="hidden size-3 text-primary-foreground group-data-checked:inline" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
