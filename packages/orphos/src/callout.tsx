import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { type VariantProps, cva } from "cva";
import { CheckCircle, InfoCircle, WarningCircle, WarningTriangle, Xmark } from "iconoir-react";
import * as React from "react";
import { Button } from "./button";
import { cn } from "./lib/utils";

const calloutVariants = cva({
  base: "relative flex flex-col gap-3 w-full rounded-lg p-4 text-sm",
  variants: {
    variant: {
      default: "bg-primary-background-element border-primary-border-subtle text-primary-foreground-subtle",
      success: "bg-success-background-element border-success-border-subtle text-foreground",
      warning: "bg-warning-background-element border-warning-border-subtle text-foreground",
      info: "bg-info-background-element border-info-border-subtle text-foreground",
      critical: "bg-danger-background-element border-danger-border-subtle text-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

// @ts-expect-error shut up!
const iconForVariant: Record<VariantProps<typeof calloutVariants>["variant"], React.ReactNode> = {
  default: <InfoCircle className="text-primary-solid" />,
  success: <CheckCircle className="text-success-solid" />,
  warning: <WarningTriangle className="text-warning-solid" />,
  info: <InfoCircle className="text-info-solid" />,
  critical: <WarningCircle className="text-danger-solid" />,
};

const Callout = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof calloutVariants> & {
      title?: React.ReactNode;
      hideTitle?: boolean;
      description: React.ReactNode;
      icon?: React.ReactNode;
      onDismiss?: () => void;
      bordered?: boolean;
      transparent?: boolean;
    }
>(({ className, variant, bordered, transparent, title, hideTitle, description, icon, onDismiss, ...props }, ref) => {
  const dismissible = variant !== "critical" && onDismiss;
  const supportsCustomIcon = variant === "info" || variant === "default";

  return (
    <section
      ref={ref}
      role="alert"
      data-title-hidden={hideTitle ? "" : undefined}
      tabIndex={-1}
      className={cn(
        calloutVariants({ variant }),
        bordered ? (transparent ? "border bg-transparent" : "border") : null,
        className,
      )}
      {...props}
    >
      <div className={cn("flex gap-2", title && !hideTitle ? "" : "items-center")}>
        <span className={cn("flex-none [&>svg]:size-[18px] [&>svg]:stroke-2", title && !hideTitle ? "mt-0.5" : "")}>
          {icon && supportsCustomIcon ? icon : iconForVariant[variant!]}
        </span>
        <div className="flex flex-col gap-1">
          {title ? (
            hideTitle ? (
              <VisuallyHidden.Root>{title}</VisuallyHidden.Root>
            ) : (
              <h2 className="mt-0 pb-0 text-base">{title}</h2>
            )
          ) : null}
          {description ? <div className={cn("text-sm [&_p]:leading-relaxed w-full")}>{description}</div> : null}
        </div>
        {dismissible ? (
          <Button
            className="flex-none ml-auto px-2.5 overflow-hidden! w-[20px]! h-[20px]! rounded-sm bg-transparent border-none"
            variant="default"
            aria-label="Dismiss callout"
            onClick={onDismiss}
            size="icon"
          >
            <Xmark />
          </Button>
        ) : null}
      </div>
      {props.children}
    </section>
  );
});
Callout.displayName = "Callout";

export { Callout };
