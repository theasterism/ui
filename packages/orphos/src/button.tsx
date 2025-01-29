import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "cva";
import * as React from "react";
import { cn } from "./lib/utils";

const buttonVariants = cva({
  base: "inline-flex items-center justify-center gap-x-2 shrink-0 leading-relaxed whitespace-nowrap text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-offset-background-subtle focus-visible:ring-offset-1 focus-visible:ring-focus-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  variants: {
    variant: {
      default:
        "border border-border-element/60 bg-background hover:bg-background-element-hover text-foreground active:bg-background-element-active",
      primary: "bg-primary hover:bg-primary-hover active:bg-primary-hover text-primary-foreground",
      secondary: "bg-foreground hover:bg-foreground/90 active:bg-foreground/75 text-background",
      ghost: "bg-transparent hover:bg-background-element-hover active:bg-background-element-active text-foreground",
      link: "underline-offset-4 text-primary bg-transparent hover:underline",
      danger: "bg-danger hover:bg-danger-hover active:bg-danger-hover text-danger-foreground",
    },
    size: {
      sm: "h-[28px] text-sm px-3 rounded-sm",
      md: "h-[32px] px-4 rounded-md",
      lg: "h-[38px] px-6 rounded-lg",
      icon: "w-[32px] h-[32px] px-4 rounded-md",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = ({ className, variant, size, ref, asChild = false, ...props }: ButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
};

Button.displayName = "Button";

export { Button, buttonVariants };
