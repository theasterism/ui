import { cva, type VariantProps } from "cva";
import type * as React from "react";
import { cn } from "./utils";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva({
  base: "inline-flex shrink-0 items-center justify-center gap-x-2 whitespace-nowrap font-semibold text-sm leading-relaxed outline-focus-ring outline-offset-2 transition-colors focus-visible:outline-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  variants: {
    variant: {
      default:
        "inset-ring-1 inset-ring-border-element bg-background-element text-foreground-subtle hover:bg-background-element-hover active:bg-background-element-active",
      primary:
        "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-hover active:brightness-[1.08]",
      ghost:
        "bg-transparent text-foreground hover:bg-background-element-hover active:bg-background-element-active",
      link: "bg-transparent text-primary underline decoration-border-element underline-offset-[2.5px] hover:decoration-primary",
      danger:
        "inset-ring-1 inset-ring-danger-border bg-danger-surface text-danger-surface-foreground hover:bg-danger hover:text-danger-foreground active:bg-danger-hover active:text-danger-foreground dark:text-danger-foreground",
    },
    size: {
      sm: "h-8 rounded-md px-2.5 text-sm",
      md: "h-9 rounded-md px-3.5",
      lg: "h-10 rounded-md px-4",
      icon: "size-9 rounded-md",
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
