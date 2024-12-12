import * as LabelPrimitive from "@radix-ui/react-label";
import { type VariantProps, cva } from "class-variance-authority";
import type { Ref } from "react";
import { cn } from "./lib/utils";

const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");

export interface LabelProps extends LabelPrimitive.LabelProps, VariantProps<typeof labelVariants> {
  ref: Ref<HTMLLabelElement> | undefined;
}

const Label = ({ className, ref, ...props }: LabelProps) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
