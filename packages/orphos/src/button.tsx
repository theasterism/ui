import { mergeProps } from "@base-ui-components/react/merge-props";
import { useRender } from "@base-ui-components/react/use-render";
import { cva, type VariantProps } from "cva";
import type * as React from "react";
import { cn } from "./utils";

const buttonVariants = cva({
  base: "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent font-medium text-sm transition-[transform,color,scale] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.97] disabled:pointer-events-none disabled:select-none disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
  variants: {
    variant: {
      default:
        "border-border-subtle bg-background-element text-foreground hover:bg-background-element-hover",
      primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
      link: "bg-transparent text-info underline decoration-info-border underline-offset-[2.5px] hover:decoration-info active:scale-none",
      danger: "bg-danger text-danger-foreground hover:bg-danger-hover",
    },
    size: {
      sm: "h-7 px-2.5 text-[13px]",
      md: "h-8.5 px-3",
      lg: "h-10 px-4",
      icon: "size-8.5",
      "icon-sm": "size-7 [&_svg:not([class*='size-'])]:size-3.5",
      "icon-lg": "size-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

interface ButtonProps extends useRender.ComponentProps<"button"> {
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
}

function Button({ className, variant, size, render, ...props }: ButtonProps) {
  const typeValue: React.ButtonHTMLAttributes<HTMLButtonElement>["type"] =
    render ? undefined : "button";
  const defaultProps = {
    "data-slot": "button",
    className: cn(buttonVariants({ variant, size, className })),
    type: typeValue,
  };
  return useRender({
    defaultTagName: "button",
    render,
    props: mergeProps<"button">(defaultProps, props),
  });
}

export { Button, buttonVariants, type ButtonProps };
