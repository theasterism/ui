import {
  CheckBadgeIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";
import { type VariantProps, cva } from "cva";
import * as React from "react";
import { cn } from "./lib/utils";

const calloutVariants = cva({
  base: "relative flex flex-col items-center justify-center gap-3 w-full rounded-lg p-3 text-sm",
  variants: {
    variant: {
      default: "bg-primary-element border-primary-border text-primary-element-foreground",
      success: "bg-success-element border-success-border text-success-element-foreground",
      warning: "bg-warning-element border-warning-border text-warning-element-foreground",
      info: "bg-info-element border-info-border text-info-element-foreground",
      critical: "bg-danger-element border-danger-border text-danger-element-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

// @ts-expect-error shut up!
const iconForVariant: Record<VariantProps<typeof calloutVariants>["variant"], React.ReactNode> = {
  default: (
    <span className={cn("flex-none flex items-center justify-center [&>svg]:size-[20px] [&>svg]:stroke-2")}>
      <MegaphoneIcon className="text-primary" />
    </span>
  ),
  success: (
    <span className={cn("flex-none flex items-center justify-center [&>svg]:size-[20px] [&>svg]:stroke-2")}>
      <CheckBadgeIcon className="text-success" />
    </span>
  ),
  warning: (
    <span className={cn("flex-none flex items-center justify-center [&>svg]:size-[20px] [&>svg]:stroke-2")}>
      <ExclamationCircleIcon className="text-warning" />
    </span>
  ),
  info: (
    <span className={cn("flex-none flex items-center justify-center [&>svg]:size-[20px] [&>svg]:stroke-2")}>
      <InformationCircleIcon className="text-info" />
    </span>
  ),
  critical: (
    <span className={cn("flex-none flex items-center justify-center [&>svg]:size-[20px] [&>svg]:stroke-2")}>
      <ExclamationTriangleIcon className="text-danger" />
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
>(({ className, variant, bordered, description, icon, ...props }, ref) => {
  const supportsCustomIcon = variant === "info" || variant === "default";

  return (
    <section
      ref={ref}
      role="alert"
      tabIndex={-1}
      className={cn(calloutVariants({ variant }), bordered ? "border" : "", className)}
      {...props}
    >
      <div className={cn("flex gap-2 items-center")}>
        <div className="flex flex-row gap-2 items-center">
          {icon && supportsCustomIcon ? (
            <span className={cn("flex-none flex items-center justify-center [&>svg]:size-[20px] [&>svg]:stroke-2")}>
              {icon}
            </span>
          ) : (
            iconForVariant[variant!]
          )}
          <div className="flex flex-col">
            {description ? (
              <div className={cn("text-sm [&_p]:leading-relaxed w-full leading-5")}>{description}</div>
            ) : null}
          </div>
        </div>
      </div>
      {props.children}
    </section>
  );
});
Callout.displayName = "Callout";

export { Callout };
