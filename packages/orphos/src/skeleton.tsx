import type { DivElementProps } from "./types";
import { cn } from "./utils";

function Skeleton({ className, ...props }: DivElementProps) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "animate-pulse rounded-sm bg-background-element-hover",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
