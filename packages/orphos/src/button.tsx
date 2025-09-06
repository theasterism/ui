import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "cva";
import type * as React from "react";
import { cn } from "./utils";

const buttonVariants = cva({
  base: "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap font-medium text-base outline-offset-1 transition-all focus-visible:outline-2 focus-visible:outline-focus-ring active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 aria-invalid:outline-2 aria-invalid:outline-danger-border [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
  variants: {
    variant: {
      default:
        "inset-ring-1 inset-ring-border-subtle bg-background-element text-foreground-subtle hover:bg-background-element-hover",
      primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
      secondary:
        "bg-foreground text-background hover:brightness-[1.1] hover:contrast-[0.88] hover:saturate-[1.1] dark:hover:brightness-95",
      ghost: "bg-transparent text-foreground hover:bg-background-element-hover",
      link: "bg-transparent text-primary underline decoration-border-element underline-offset-[2.5px] hover:decoration-primary active:scale-none",
      danger:
        "active:button-active-filter bg-danger text-danger-foreground hover:bg-danger-hover",
    },
    size: {
      sm: "h-8 px-3 [&_svg]:pr-3 [&_svg]:pl-[11px]",
      md: "h-9 px-4 [&_svg]:pr-4 [&_svg]:pl-[15px]",
      lg: "h-10 px-4 [&_svg]:pr-4 [&_svg]:pl-[15px]",
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
