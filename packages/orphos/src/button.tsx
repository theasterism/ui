import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "cva";
import { cn } from "./utils";

const buttonVariants = cva({
  base: "group/button inline-flex shrink-0 select-none items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-clip-padding font-medium text-small transition-all focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default:
        "border-border-subtle bg-background-element text-foreground hover:bg-background-element-hover",
      primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
      ghost: "bg-transparent text-foreground hover:bg-background-element-hover",
      link: "bg-transparent text-info underline decoration-info-border underline-offset-[2.5px] hover:decoration-info active:scale-none",
      danger: "bg-danger text-danger-foreground hover:bg-danger-hover",
    },
    size: {
      sm: "h-7 px-2.5",
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

function Button({
  className,
  variant = "default",
  size = "md",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
