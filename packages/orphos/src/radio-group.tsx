"use client";

import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";

import type * as React from "react";
import { cn } from "./utils";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive>) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn("grid w-full gap-2", className)}
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
        "relative flex size-4.5 items-center justify-center rounded-full border bg-background-element transition-[color,box-shadow] after:absolute after:-inset-x-1.5 after:-inset-y-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:outline-2 aria-invalid:outline-danger-border aria-invalid:outline-offset-2 data-checked:border-primary-border data-checked:bg-primary-subtle",
        className
      )}
      {...props}>
      <RadioPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex">
        <div className="h-full max-h-2.25 min-h-2.25 w-full min-w-2.25 max-w-2.25 rounded-full bg-primary" />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  );
}

export { RadioGroup, RadioGroupItem };
