import { type VariantProps, cva } from "cva";
import type { DivElementProps } from "./types";
import { cn } from "./utils";

const calloutVariants = cva({
  base: "relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-md p-4 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4.5 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  variants: {
    variant: {
      default: "border-border-element/75 text-foreground-subtle",
      primary: "border-primary-border/60 text-primary-surface-foreground",
      warning: "border-warning-border/60 text-warning-surface-foreground",
      danger: "border-danger-border/60 text-danger-surface-foreground",
      success: "border-success-border/60 text-success-surface-foreground",
      info: "border-info-border/60 text-info-surface-foreground",
      upsell: "border-upsell-border/60 text-upsell-surface-foreground",
    },
    bordered: {
      true: "border",
      false: "border border-transparent",
    },
  },
  compoundVariants: [
    {
      variant: "default",
      className: "bg-background-element",
    },
    {
      variant: "primary",
      className: "bg-primary-surface/65",
    },
    {
      variant: "warning",
      className: "bg-warning-surface/60",
    },
    {
      variant: "danger",
      className: "bg-danger-surface/85",
    },
    {
      variant: "success",
      className: "bg-success-surface/55",
    },
    {
      variant: "info",
      className: "bg-info-surface/75",
    },
    {
      variant: "upsell",
      className: "bg-upsell-surface/85",
    },
  ],
  defaultVariants: {
    variant: "default",
    bordered: false,
  },
});

function Callout({
  className,
  variant,
  bordered,
  ...props
}: DivElementProps & VariantProps<typeof calloutVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(calloutVariants({ variant, bordered }), className)}
      {...props}
    />
  );
}

function CalloutTitle({ className, ...props }: DivElementProps) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )}
      {...props}
    />
  );
}

function CalloutDescription({ className, ...props }: DivElementProps) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  );
}

export { Callout, CalloutTitle, CalloutDescription };
