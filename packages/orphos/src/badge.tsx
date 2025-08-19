import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "cva";
import type * as React from "react";
import { cn } from "./utils";

const badgeVariants = cva({
  base: "inset-ring-1 inline-flex min-w-fit items-center rounded-full px-2 py-0.5 font-semibold text-xs leading-relaxed outline-focus-ring transition-colors focus-visible:outline-2",
  variants: {
    variant: {
      default:
        "inset-ring-border-subtle bg-background-element-hover text-foreground-subtle",
      primary:
        "inset-ring-primary-border bg-primary-surface text-primary-surface-foreground",
      danger:
        "inset-ring-danger-border bg-danger-surface text-danger-surface-foreground",
      warning:
        "inset-ring-warning-border bg-warning-surface text-warning-surface-foreground",
      success:
        "inset-ring-success-border bg-success-surface text-success-surface-foreground",
      info: "inset-ring-info-border bg-info-surface text-info-surface-foreground",
    },
    soft: {
      true: "inset-ring-0",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    soft: false,
  },
});

function Badge({
  className,
  variant,
  soft,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, soft }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
