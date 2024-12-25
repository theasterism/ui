import { type VariantProps, cva } from "cva";
import * as React from "react";
import { cn } from "./lib/utils";

const badgeVariants = cva({
  base: "inline-flex min-w-fit items-center rounded-sm px-2.5 py-0.5 border-[0.5px] text-xs leading-relaxed font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-info-focus-ring focus:ring-offset-2 focus:ring-offset-background-subtle dark:focus:ring-offset-background",
  variants: {
    variant: {
      default: "bg-foreground text-background hover:bg-foreground-subtle",
      primary:
        "border-primary-element-border bg-primary-background-element text-primary-foreground-subtle hover:bg-primary-background-element-active",
      secondary: "border-element-border bg-background-element text-foreground hover:bg-background-element-active",
      info: "border-info-element-border bg-info-background-element text-info-foreground hover:bg-info-background-element-active",
      warning:
        "border-warning-element-border bg-warning-background-element text-warning-foreground hover:bg-warning-background-element-active",
      destructive:
        "border-danger-element-border bg-danger-background-element text-danger-foreground hover:bg-danger-background-element-active",
      success:
        "border-success-element-border bg-success-background-element text-success-foreground hover:bg-success-background-element-active",
    },
    noHover: {
      true: "pointer-events-none",
    },
  },
  defaultVariants: {
    variant: "default",
    noHover: false,
  },
});

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, noHover, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, noHover }), className)} {...props} />;
}

export { Badge, badgeVariants };
