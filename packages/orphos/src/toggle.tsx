"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { cva, type VariantProps } from "cva";
import type * as React from "react";
import { cn } from "./utils";

const toggleVariants = cva({
  base: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent font-medium text-foreground text-small transition-[color,box-shadow] hover:bg-background-element-hover focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 aria-invalid:outline-2 aria-invalid:outline-danger aria-invalid:outline-offset-2 data-pressed:bg-background-element-active data-pressed:text-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default:
        "border-border-subtle bg-background-element hover:bg-background-element-hover",
      soft: "bg-transparent",
    },
    size: {
      sm: "h-7 min-w-7 px-1.5",
      md: "h-8.5 min-w-8.5 px-2",
      lg: "h-10 min-w-10 px-2.5",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
