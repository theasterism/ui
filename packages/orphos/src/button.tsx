import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "cva";
import * as React from "react";
import { cn } from "./utils";

const buttonVariants = cva({
  base: "inline-flex shrink-0 items-center justify-center gap-x-2 whitespace-nowrap border font-semibold text-sm leading-relaxed ring-focus-ring ring-offset-2 ring-offset-background-subtle transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-background [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  variants: {
    variant: {
      default:
        "border border-border-element/60 bg-background-element text-foreground-subtle hover:bg-background-element-hover",
      primary:
        "border-transparent bg-primary/95 text-primary-foreground hover:bg-primary-hover",
      ghost:
        "border-transparent bg-transparent text-foreground-subtle hover:bg-background-element-hover",
      link: "border-transparent bg-transparent text-primary-surface-foreground underline-offset-4 hover:underline",
      danger:
        "border-transparent bg-danger/90 text-danger-foreground hover:bg-danger-hover",
    },
    size: {
      xs: "h-[28px] rounded-md px-3 text-[0.8125rem]",
      sm: "h-[30px] rounded-md px-3 text-sm",
      md: "h-[32px] rounded-md px-4",
      lg: "h-[38px] rounded-lg px-6",
      icon: "size-8 rounded-md",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
