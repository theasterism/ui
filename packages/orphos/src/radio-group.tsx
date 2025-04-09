"use client";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as React from "react";
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
        "size-5 group rounded-full bg-background text-primary border border-border-element/60 disabled:data-[state=unchecked]:bg-background-element focus:outline-none focus-visible:ring-2 ring-focus-ring ring-offset-2 ring-offset-background-subtle disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary-border data-[state=checked]:bg-primary-element",
        className
      )}
      {...props}>
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex items-center justify-center">
        <div className="min-w-[9px] min-h-[9px] max-w-[9px] max-h-[9px] w-full h-full rounded-full bg-primary-element-foreground" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
