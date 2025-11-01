import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "cva";
import type * as React from "react";
import { cn } from "./utils";

const buttonVariants = cva({
  base: "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent font-medium text-sm transition-[color,transform] focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
      secondary:
        "border-border-subtle bg-white text-foreground-subtle hover:bg-background-element-hover",
      ghost:
        "bg-transparent text-foreground hover:bg-background-element-hover",
      link: "bg-transparent text-info-surface-foreground underline decoration-info-border underline-offset-[2.5px] hover:decoration-info-surface-foreground active:scale-none",
      danger:
        "bg-danger text-danger-foreground hover:bg-danger-hover",
    },
    size: {
      sm: "h-7 text-[13px] px-2.5 has-[>svg]:pr-2.5 has-[>svg]:pl-[9px]",
      md: "h-8.5 px-3 has-[>svg]:pr-3 has-[>svg]:pl-[11px]",
      lg: "h-10 px-4 has-[>svg]:pr-4 has-[>svg]:pl-[15px]",
      icon: "size-8.5",
      "icon-sm": "size-7",
      "icon-lg": "size-10",
    },
  },
  defaultVariants: {
    variant: "primary",
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
