import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/utils";

const badgeVariants = cva(
  "inline-flex min-w-fit items-center rounded-lg border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-info-focus-ring focus:ring-offset-2 focus:ring-offset-background-subtle dark:focus:ring-offset-background",
  {
    variants: {
      variant: {
        default: "border border-border-subtle bg-transparent text-foreground shadow hover:bg-background-element-hover",
        primary:
          "border border-primary-border-subtle bg-transparent text-primary-foreground-subtle shadow hover:bg-primary-background-element-hover",
        secondary: "border-transparent bg-background-element text-foreground hover:bg-background-element-hover",
        info: "border border-info-border-subtle bg-transparent text-info-foreground shadow hover:bg-info-background-element-hover",
        warning:
          "border border-warning-border-subtle bg-transparent text-warning-foreground shadow hover:bg-warning-background-element-hover",
        destructive:
          "border border-danger-border-subtle bg-transparent text-danger-foreground shadow hover:bg-danger-background-element-hover",
        success:
          "border border-success-border-subtle bg-transparent text-success-foreground shadow hover:bg-success-background-element-hover",
      },
      noHover: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "default",
      noHover: false,
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, noHover, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, noHover }), className)} {...props} />;
}

export { Badge, badgeVariants };
