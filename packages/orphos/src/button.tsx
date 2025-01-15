import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "cva";
import * as React from "react";
import { cn } from "./lib/utils";

const buttonVariants = cva({
  base: "inline-flex items-center justify-center gap-x-2 shrink-0 leading-relaxed whitespace-nowrap text-[14px] font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-offset-background-subtle dark:focus-visible:ring-offset-background focus-visible:ring-offset-2 focus-visible:ring-info-focus-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  variants: {
    variant: {
      default:
        "shadow-[inset_0px_0.5px_0px_rgb(208_205_215),_inset_0px_0px_0px_0.5px_rgb(208_205_215)] dark:shadow-[inset_0px_0.5px_0px_var(--gray-7),_inset_0px_0px_0px_0.5px_var(--gray-7)] dark:border-0 bg-background-element hover:bg-background-element-hover text-black dark:text-white active:bg-background-element-active",
      primary: "bg-primary-solid hover:bg-primary-solid-hover active:bg-primary-solid-hover text-white",
      secondary: "bg-foreground hover:bg-foreground/90 active:bg-foreground/75 text-background dark:text-background",
      ghost:
        "bg-transparent hover:bg-background-element-hover active:bg-background-element-active text-foreground dark:text-white",
      link: "underline-offset-4 text-primary-solid bg-transparent hover:underline",
      danger: "bg-danger-solid hover:bg-danger-solid-hover active:bg-danger-solid-hover text-white",
    },
    size: {
      sm: "h-[26px] text-sm px-3 rounded-xs",
      md: "h-[32px] px-4 rounded-sm",
      lg: "h-[40px] px-6 rounded-md",
      icon: "w-[32px] h-[32px] px-4 rounded-sm",
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
