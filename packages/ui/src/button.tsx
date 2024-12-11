import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-x-2 whitespace-nowrap text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-offset-background focus-visible:ring-offset-2 focus-visible:ring-info-focus-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border border-element-border bg-background-element hover:bg-background-element-hover text-white active:bg-background-element-active",
        primary: "bg-primary-solid hover:bg-primary-solid-hover active:bg-primary-solid-hover text-white",
        secondary:
          "bg-background-element hover:bg-background-element-hover active:bg-background-element-active text-white",
        ghost: "bg-transparent hover:bg-background-element-hover active:bg-background-element-active text-white",
        link: "underline-offset-4 text-primary-solid bg-transparent hover:underline p-0! h-auto!",
        danger: "bg-danger-solid hover:bg-danger-solid-hover active:bg-danger-solid-hover text-white",
      },
      size: {
        sm: "h-8 text-xs px-3 rounded-sm",
        md: "h-9 px-4 py-2 rounded-md",
        lg: "h-10 px-8 rounded-md",
        icon: "h-9 w-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = ({ className, variant, size, ref, asChild = false, ...props }: ButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
};

Button.displayName = "Button";

export { Button, buttonVariants };
