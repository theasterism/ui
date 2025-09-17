import { cva, type VariantProps } from "cva";
import { createContext, type ReactNode, useContext } from "react";
import { Button, type ButtonProps } from "./button";
import type { DivElementProps } from "./types";
import { cn } from "./utils";

// 1) create a context for your callout's variant (and outline if needed)
type CalloutContextValue = {
  variant: Exclude<VariantProps<typeof calloutVariants>["variant"], undefined>;
  outline: boolean;
};
const CalloutContext = createContext<CalloutContextValue>({
  variant: "default",
  outline: false,
});

const calloutVariants = cva({
  base: "flex w-full flex-col gap-x-3 gap-y-2 rounded-xl p-4 text-base sm:flex-row sm:items-center sm:justify-between [&_svg]:size-4.5 [&_svg]:text-current",
  variants: {
    variant: {
      default:
        "inset-ring-border-subtle bg-background-element text-foreground-subtle",
      primary:
        "inset-ring-primary-border bg-primary-surface text-primary-surface-foreground",
      warning:
        "inset-ring-warning-border bg-warning-surface text-warning-surface-foreground",
      danger:
        "inset-ring-danger-border bg-danger-surface text-danger-surface-foreground",
      success:
        "inset-ring-success-border bg-success-surface text-success-surface-foreground",
      info: "inset-ring-info-border bg-info-surface text-info-surface-foreground",
    },
    outline: {
      true: "inset-ring-1 bg-transparent!",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    outline: false,
  },
});

function Callout({
  className,
  variant = "default",
  outline = false,
  children,
  ...props
}: {
  children?: ReactNode;
} & DivElementProps &
  VariantProps<typeof calloutVariants>) {
  // 2) wrap your callout in a provider
  return (
    <CalloutContext.Provider value={{ variant, outline }}>
      <div
        data-slot="alert"
        role="alert"
        data-variant={variant}
        className={cn(calloutVariants({ variant, outline }), className)}
        {...props}>
        {children}
      </div>
    </CalloutContext.Provider>
  );
}

function CalloutMessage({ className, ...props }: DivElementProps) {
  return (
    <div
      data-slot="alert-message"
      className={cn("flex items-center gap-x-2", className)}
      {...props}
    />
  );
}

function CalloutAction({ className, variant: _ignore, ...props }: ButtonProps) {
  const { variant: callOutVariant, outline } = useContext(CalloutContext);

  return (
    <Button
      variant={
        callOutVariant === "default" && outline
          ? "default"
          : callOutVariant === "primary"
            ? "primary"
            : callOutVariant === "danger"
              ? "danger"
              : "secondary"
      }
      data-slot="alert-action"
      className={cn("w-fit", className)}
      {...props}
    />
  );
}

export { Callout, CalloutMessage, CalloutAction };
