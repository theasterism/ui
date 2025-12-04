"use client";

import { Radio as RadioPrimitive } from "@base-ui-components/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui-components/react/radio-group";

import type * as React from "react";
import { cn } from "./utils";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive>) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn("grid gap-2", className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioPrimitive.Root>) {
  return (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      className={cn(
        "size-4.5 rounded-full border bg-background-element transition-[color,box-shadow] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:outline-2 aria-invalid:outline-danger-border aria-invalid:outline-offset-2 data-checked:border-primary-border data-checked:bg-primary-subtle",
        className
      )}
      {...props}>
      <RadioPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex items-center justify-center">
        <div className="h-full max-h-2.5 min-h-2.5 w-full min-w-2.5 max-w-2.5 rounded-full bg-primary" />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  );
}

export { RadioGroup, RadioGroupItem };
