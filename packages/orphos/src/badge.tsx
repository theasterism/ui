import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "cva";
import * as React from "react";
import { cn } from "./utils";

const badgeVariants = cva({
  base: "inline-flex min-w-fit items-center rounded-sm border px-1.5 py-[0.5px] font-semibold text-xs leading-relaxed ring-focus-ring ring-offset-2 ring-offset-background dark:ring-offset-background transition-colors focus:outline-none focus-visible:outline-none focus-visible:ring-2",
  variants: {
    variant: {
      default:
        "border-border-element/60 bg-background-element text-foreground-subtle",
      primary:
        "border-primary-border/60 bg-primary-surface text-primary-surface-foreground",
      warning:
        "border-warning-border/60 bg-warning-surface text-warning-surface-foreground",
      danger:
        "border-danger-border/60 bg-danger-surface text-danger-surface-foreground",
      success:
        "border-success-border/60 bg-success-surface text-success-surface-foreground",
      info: "border-info-border/60 bg-info-surface text-info-surface-foreground",
      upsell:
        "border-upsell-border/60 bg-upsell-surface text-upsell-surface-foreground",
    },
    soft: {
      true: "border-transparent",
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
