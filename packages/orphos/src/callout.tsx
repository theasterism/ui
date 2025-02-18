import { type VariantProps, cva } from "cva";
import * as React from "react";
import { cn } from "./utils";

const calloutVariants = cva({
  base: "relative w-full rounded-md p-3.5 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  variants: {
    variant: {
      default: "bg-primary-element border-primary-border text-primary-element-foreground",
      critical: "bg-danger-element border-danger-border text-danger-element-foreground",
      warning: "bg-warning-element border-warning-border text-warning-element-foreground",
      success: "bg-success-element border-success-border text-success-element-foreground",
    },
    transparent: {
      true: "bg-transparent border",
    },
    bordered: {
      true: "border",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Callout({
  className,
  variant,
  transparent,
  bordered,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof calloutVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(calloutVariants({ variant, transparent, bordered }), className)}
      {...props}
    />
  );
}

function CalloutTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className)}
      {...props}
    />
  );
}

function CalloutDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn("col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", className)}
      {...props}
    />
  );
}

export { Callout, CalloutTitle, CalloutDescription };
