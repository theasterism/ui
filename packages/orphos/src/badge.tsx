import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "cva";
import * as React from "react";
import { cn } from "./utils";

const badgeVariants = cva({
  base: "inline-flex min-w-fit items-center rounded-full px-2 py-[1px] text-xs leading-relaxed font-semibold transition-colors focus:outline-none focus:ring-2 ring-info-focus-ring ring-offset-2 ring-offset-background-subtle",
  variants: {
    variant: {
      default:
        "bg-background-element text-foreground-subtle border-border-element/60",
      primary:
        "bg-primary-element text-primary-element-foreground border-primary-border/60",
      warning:
        "bg-warning-element text-warning-element-foreground border-warning-border/60",
      destructive:
        "bg-danger-element text-danger-element-foreground border-danger-border/60",
      success:
        "bg-success-element text-success-element-foreground border-success-border/60",
    },
    bordered: {
      true: "border",
    },
  },
  defaultVariants: {
    variant: "default",
    bordered: false,
  },
});

function Badge({
  className,
  variant,
  bordered,
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
