import { cva, type VariantProps } from "cva";
import type { DivElementProps } from "./types";
import { cn } from "./utils";

const calloutVariants = cva({
  base: "relative inset-ring-1 grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-md p-4 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4.5 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  variants: {
    variant: {
      default:
        "inset-ring-border-element-hover bg-background-element text-foreground-subtle",
      primary: "inset-ring-primary-border text-primary-surface-foreground",
      warning: "inset-ring-warning-border text-warning-surface-foreground",
      danger: "inset-ring-danger-border text-danger-surface-foreground",
      success: "inset-ring-success-border text-success-surface-foreground",
      info: "inset-ring-info-border text-info-surface-foreground",
    },
  },
  compoundVariants: [
    {
      variant: "default",
      className: "bg-background-subtle",
    },
    {
      variant: "primary",
      className: "bg-primary-subtle",
    },
    {
      variant: "warning",
      className: "bg-warning-subtle",
    },
    {
      variant: "danger",
      className: "bg-danger-subtle",
    },
    {
      variant: "success",
      className: "bg-success-subtle",
    },
    {
      variant: "info",
      className: "bg-info-subtle",
    },
  ],
  defaultVariants: {
    variant: "default",
  },
});

function Callout({
  className,
  variant,
  ...props
}: DivElementProps & VariantProps<typeof calloutVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(calloutVariants({ variant }), className)}
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
