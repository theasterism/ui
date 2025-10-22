import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "cva";
import type * as React from "react";
import { cn } from "./utils";

const badgeVariants = cva({
  base: "inline-flex min-w-fit items-center gap-3 rounded-full px-2 py-0.5 font-medium text-xs has-[svg]:pr-2 has-[svg]:pl-[7px] [&_svg]:size-3",
  variants: {
    variant: {
      default:
        "border border-border-subtle bg-transparent text-foreground-subtle [a&]:hover:bg-background-element-hover",
      primary: "bg-primary-surface text-primary-surface-foreground",
      danger: "bg-danger-surface text-danger-surface-foreground",
      warning: "bg-warning-surface text-warning-surface-foreground",
      success: "bg-success-surface text-success-surface-foreground",
      info: "bg-info-surface text-info-surface-foreground",
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
