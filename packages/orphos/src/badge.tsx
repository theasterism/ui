import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "cva";
import { cn } from "./utils";

const badgeVariants = cva({
  base: "inline-flex h-5 w-fit items-center gap-1 rounded-md border px-1.5 py-px font-medium text-[11px] transition-all has-data-[icon=inline-start]:pl-1.25 has-data-[icon=inline-end]:pr-1.25 [&_svg]:size-3! group/badge shrink-0 overflow-hidden whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 [&>svg]:pointer-events-none",
  variants: {
    variant: {
      default:
        "border-border-subtle bg-background-element text-foreground-subtle [a]:hover:bg-background-element-hover",
      primary:
        "border-primary-border bg-primary-subtle text-(--lime-11) [a]:hover:border-(--lime-11)/70",
      danger:
        "border-danger-border bg-danger-subtle text-danger-hover [a]:hover:border-danger",
      success:
        "border-success-border bg-success-subtle text-success-hover [a]:hover:border-success",
      warning:
        "border-warning-border bg-warning-subtle text-warning-hover [a]:hover:border-warning",
      info: "border-info-border bg-info-subtle text-info-hover [a]:hover:border-info/70",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  });
}

export { Badge, badgeVariants };
