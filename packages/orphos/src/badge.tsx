import { mergeProps } from "@base-ui-components/react/merge-props";
import { useRender } from "@base-ui-components/react/use-render";
import { cva, type VariantProps } from "cva";
import { cn } from "./utils";

const badgeVariants = cva({
  base: "inline-flex min-w-fit items-center gap-1 rounded-md border px-1.5 py-px font-medium text-[11px] has-[svg]:gap-[3px] has-[svg]:pr-1.5 has-[svg]:pl-[5px] [&_svg]:size-3",
  variants: {
    variant: {
      default:
        "border-border-subtle bg-background text-foreground-subtle dark:bg-background-element [a&]:hover:bg-background-element-hover",
      primary:
        "border-primary-border bg-primary-subtle text-primary-surface-foreground",
      danger:
        "border-danger-border bg-danger-subtle text-danger-surface-foreground",
      success:
        "border-success-border bg-success-subtle text-success-surface-foreground",
      warning:
        "border-warning-border bg-warning-subtle text-warning-surface-foreground",
      info: "border-info-border bg-info-subtle text-info-surface-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface BadgeProps extends useRender.ComponentProps<"span"> {
  variant?: VariantProps<typeof badgeVariants>["variant"];
}

function Badge({ className, variant, render, ...props }: BadgeProps) {
  const defaultProps = {
    "data-slot": "badge",
    className: cn(badgeVariants({ variant, className })),
  };

  return useRender({
    defaultTagName: "span",
    render,
    props: mergeProps<"span">(defaultProps, props),
  });
}

export { Badge, badgeVariants };
