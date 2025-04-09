import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "cva";
import * as React from "react";
import { cn } from "./utils";

const buttonVariants = cva({
  base: "inline-flex items-center justify-center gap-x-2 shrink-0 leading-relaxed whitespace-nowrap text-sm font-semibold transition-colors focus-visible:ring-2 ring-offset-background-subtle ring-offset-2 ring-focus-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  variants: {
    variant: {
      default:
        "border border-border-element bg-background-element hover:bg-background-element-hover text-foreground active:bg-background-element-active active:border-border-element-active",
      primary:
        "bg-primary hover:bg-primary active:bg-primary-hover text-primary-foreground",
      ghost:
        "bg-transparent hover:bg-background-element-hover active:bg-background-element-active text-foreground",
      link: "underline-offset-4 text-primary-element-foreground bg-transparent hover:underline",
      danger:
        "bg-danger/80 hover:bg-danger active:bg-danger-hover text-danger-foreground",
    },
    size: {
      xs: "h-[28px] text-[0.8125rem] px-3 rounded-md",
      sm: "h-[30px] text-sm px-3 rounded-md",
      md: "h-[32px] px-4 rounded-md",
      lg: "h-[38px] px-6 rounded-lg",
      icon: "size-8 rounded-md",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

Button.displayName = "Button";

export { Button, buttonVariants };
