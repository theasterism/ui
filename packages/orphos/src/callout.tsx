import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { type VariantProps, cva } from "cva";
import { CheckCircle, InfoCircle, WarningCircle, WarningTriangle, Xmark } from "iconoir-react";
import * as React from "react";
import { Button } from "./button";
import { cn } from "./lib/utils";

const calloutVariants = cva({
  base: "relative flex flex-col gap-3 w-full rounded-md p-4 text-sm",
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
  default: (
    <span
      className={cn(
        "flex-none flex items-center justify-center rounded-full size-10 bg-white dark:bg-background-subtle [&>svg]:size-[20px] [&>svg]:stroke-2",
      )}
    >
      <InfoCircle className="text-primary-solid" />
    </span>
  ),
  success: (
    <span
      className={cn(
        "flex-none flex items-center justify-center rounded-full size-10 bg-white dark:bg-background-subtle [&>svg]:size-[20px] [&>svg]:stroke-2",
      )}
    >
      <CheckCircle className="text-success-solid" />
    </span>
  ),
  warning: (
    <span
      className={cn(
        "flex-none flex items-center justify-center rounded-full size-10 bg-white dark:bg-background-subtle [&>svg]:size-[20px] [&>svg]:stroke-2",
      )}
    >
      <WarningCircle className="text-warning-solid" />
    </span>
  ),
  info: (
    <span
      className={cn(
        "flex-none flex items-center justify-center rounded-full size-10 bg-white dark:bg-background-subtle [&>svg]:size-[20px] [&>svg]:stroke-2",
      )}
    >
      <InfoCircle className="text-info-solid" />
    </span>
  ),
  critical: (
    <span
      className={cn(
        "flex-none flex items-center justify-center rounded-full size-10 bg-white dark:bg-background-subtle [&>svg]:size-[20px] [&>svg]:stroke-2",
      )}
    >
      <WarningTriangle className="text-danger-solid" />
    </span>
  ),
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
    }
>(({ className, variant, bordered, title, hideTitle, description, icon, onDismiss, ...props }, ref) => {
  const dismissible = variant !== "critical" && onDismiss;
  const supportsCustomIcon = variant === "info" || variant === "default";

  return (
    <section
      ref={ref}
      role="alert"
      data-title-hidden={hideTitle ? "" : undefined}
      tabIndex={-1}
      className={cn(calloutVariants({ variant }), bordered ? "border-[0.5px]" : "", className)}
      {...props}
    >
      <div className={cn("flex gap-2", title && !hideTitle ? "" : "items-center")}>
        <div className="flex flex-row gap-2 items-center">
          {icon && supportsCustomIcon ? icon : iconForVariant[variant!]}
          <div className="flex flex-col">
            {title ? (
              hideTitle ? (
                <VisuallyHidden.Root>{title}</VisuallyHidden.Root>
              ) : (
                <h2 className="mt-0 pb-0 text-base font-medium leading-snug">{title}</h2>
              )
            ) : null}
            {description ? (
              <div className={cn("text-sm [&_p]:leading-relaxed w-full leading-loose")}>{description}</div>
            ) : null}
          </div>
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
