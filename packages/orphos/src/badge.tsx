import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "cva";
import type * as React from "react";
import { cn } from "./utils";

const badgeVariants = cva({
  base: "inline-flex min-w-fit items-center gap-3 border rounded-md px-1.5 py-px font-medium text-[11px] has-[svg]:pr-1.5 has-[svg]:pl-[5px] [&_svg]:size-2.5",
  variants: {
    variant: {
      default:
        "border-border-subtle bg-background-element text-foreground-subtle [a&]:hover:bg-background-element-hover",
      primary: "border-primary-border bg-primary-subtle text-primary-surface-foreground",
      danger: "border-danger-border bg-danger-subtle text-danger-surface-foreground",
      success: "border-success-border bg-success-subtle text-success-surface-foreground",
      warning: "border-warning-border bg-warning-subtle text-warning-surface-foreground",
      info: "border-info-border bg-info-subtle text-info-surface-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
