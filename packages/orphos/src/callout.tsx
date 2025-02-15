import { type VariantProps, cva } from "cva";
import * as React from "react";
import { cn } from "./utils";
import { InfoCircledIcon, CheckCircledIcon, ExclamationTriangleIcon } from "@radix-ui/react-icons";

const calloutVariants = cva({
  base: "relative flex flex-col justify-center gap-1 w-full rounded-md p-3.5 text-sm",
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

// @ts-expect-error shut up!
const iconForVariant: Record<VariantProps<typeof calloutVariants>["variant"], React.ReactNode> = {
  default: (
    <span className={cn("flex-none flex items-center justify-center [&>svg]:size-4.5 [&>svg]:stroke-2")}>
      <InfoCircledIcon className="text-primary-element-foreground" />
    </span>
  ),
  success: (
    <span className={cn("flex-none flex items-center justify-center [&>svg]:size-4.5 [&>svg]:stroke-2")}>
      <CheckCircledIcon className="text-success-element-foreground" />
    </span>
  ),
  warning: (
    <span className={cn("flex-none flex items-center justify-center [&>svg]:size-4.5 [&>svg]:stroke-2")}>
      <ExclamationTriangleIcon className="text-warning-element-foreground" />
    </span>
  ),
  critical: (
    <span className={cn("flex-none flex items-center justify-center [&>svg]:size-4.5 [&>svg]:stroke-2")}>
      <ExclamationTriangleIcon className="text-danger-element-foreground" />
    </span>
  ),
};

const Callout = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof calloutVariants> & {
      description: React.ReactNode;
      icon?: React.ReactNode;
      bordered?: boolean;
    }
>(({ className, variant, bordered, transparent, description, icon, ...props }, ref) => {
  const supportsCustomIcon = variant === "success" || variant === "default";

  return (
    <section
      ref={ref}
      role="alert"
      tabIndex={-1}
      className={cn(calloutVariants({ variant, transparent, bordered }), className)}
      {...props}
    >
      <div className={cn("flex gap-2 items-center")}>
        <div className="flex flex-row gap-2 items-center">
          {icon && supportsCustomIcon ? (
            <span className={cn("flex-none flex items-center justify-center [&>svg]:size-4.5 [&>svg]:stroke-2")}>
              {icon}
            </span>
          ) : (
            iconForVariant[variant!]
          )}
          <div className="flex flex-col">
            {description ? <div className={cn("text-sm w-full leading-6 font-medium")}>{description}</div> : null}
          </div>
        </div>
      </div>
      {props.children}
    </section>
  );
});
Callout.displayName = "Callout";

export { Callout };
