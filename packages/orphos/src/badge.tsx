import { type VariantProps, cva } from "cva";
import * as React from "react";
import { cn } from "./lib/utils";

const badgeVariants = cva({
  base: "inline-flex min-w-fit items-center border rounded-full px-2 py-[1px] text-xs leading-relaxed font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-info-focus-ring focus:ring-offset-2 focus:ring-offset-background-subtle dark:focus:ring-offset-background",
  variants: {
    variant: {
      default: "bg-background-element text-foreground border-border-element",
      primary: "bg-primary-element text-primary-element-foreground border-primary-border",
      info: "bg-info-element text-info-element-foreground border-info-border",
      warning: "bg-warning-element text-warning-element-foreground border-warning-border",
      destructive: "bg-danger-element text-danger-element-foreground border-danger-border",
      success: "bg-success-element text-success-element-foreground border-success-border",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
