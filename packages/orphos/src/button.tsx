import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "cva";
import type * as React from "react";
import { cn } from "./utils";

const buttonVariants = cva({
  base: "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent font-medium text-sm transition-colors focus-visible:outline focus-visible:outline-offset-2 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 aria-invalid:outline aria-invalid:outline-danger aria-invalid:outline-offset-2 [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
  variants: {
    variant: {
      default:
        "border-border-subtle bg-white text-foreground hover:bg-background-element focus-visible:outline-offset-0",
      primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
      secondary:
        "bg-foreground text-background hover:brightness-[1.1] hover:contrast-[0.88] hover:saturate-[1.1]",
      ghost:
        "bg-transparent text-foreground-subtle hover:bg-background-element-hover hover:text-foreground",
      link: "bg-transparent text-info-surface-foreground underline decoration-border-element underline-offset-[2.5px] hover:decoration-info-surface-foreground active:scale-none",
      danger:
        "active:button-active-filter border-danger-border text-danger-surface-foreground hover:bg-danger-surface",
    },
    size: {
      sm: "h-7 px-3 text-[13px] has-[>svg]:pr-3 has-[>svg]:pl-[11px]",
      md: "h-8.5 px-3.5 has-[>svg]:pr-3.5 has-[>svg]:pl-[13px]",
      lg: "h-10 px-4 has-[>svg]:pr-4 has-[>svg]:pl-[15px]",
      icon: "size-8.5",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants, type ButtonProps };
