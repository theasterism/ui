import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "cva";
import type * as React from "react";
import { cn } from "./utils";

const badgeVariants = cva({
  base: "inline-flex min-w-fit items-center gap-2 px-2 py-1 font-medium text-xs [&_svg]:size-4 [&_svg]:pr-2 [&_svg]:pl-[7px]",
  variants: {
    variant: {
      default: "bg-background-element text-foreground-subtle",
      primary: "bg-primary-surface text-primary-surface-foreground",
      danger: "bg-danger-surface text-danger-surface-foreground",
      warning: "bg-warning-surface text-warning-surface-foreground",
      success: "bg-success-surface text-success-surface-foreground",
      info: "bg-info-surface text-info-surface-foreground",
      outline:
        "inset-ring-1 inset-ring-border-subtle bg-transparent text-foreground-subtle",
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
