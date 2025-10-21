"use client";

import { RadioGroup as RadioGroupPrimitive } from "radix-ui";
import type * as React from "react";
import { cn } from "./utils";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-2", className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "size-3.5 rounded-full border border-border-element bg-background-element text-primary outline-offset-2 transition-[color,box-shadow] hover:border-border-element-hover focus-visible:outline disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:outline aria-invalid:outline-danger data-[state=checked]:border-primary-border data-[state=checked]:bg-primary-surface",
        className
      )}
      {...props}>
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex items-center justify-center">
        <div className="h-full max-h-[8px] min-h-[8px] w-full min-w-[8px] max-w-[8px] rounded-full bg-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
