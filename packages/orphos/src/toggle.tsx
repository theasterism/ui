"use client";

import * as React from "react";
import { Toggle as TogglePrimitive } from "radix-ui";
import { cva, type VariantProps } from "cva";
import { cn } from "./utils";

const toggleVariants = cva({
  base: "inline-flex items-center justify-center gap-2 rounded-md text-base font-medium text-foreground-subtle hover:bg-background-element-hover disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-background-element-active data-[state=on]:text-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:outline-focus-ring focus-visible:outline-2 transition-[color,box-shadow] aria-invalid:outline-2 aria-invalid:outline-danger-border whitespace-nowrap",
  variants: {
    variant: {
      default:
        "inset-ring-1 inset-ring-border-subtle bg-transparent hover:bg-background-element-hover hover:text-foreground-subtle",
      soft: "bg-transparent",
    },
    size: {
      sm: "h-8 px-1.5 min-w-8",
      md: "h-9 px-2 min-w-9",
      lg: "h-10 px-2.5 min-w-10",
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
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
