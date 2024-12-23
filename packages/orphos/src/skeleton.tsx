import { cn } from "./lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-xs bg-background-element-active/50", className)} {...props} />;
}

export { Skeleton };
