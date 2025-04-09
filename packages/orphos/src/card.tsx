import type { DivElementProps } from "./types";
import { cn } from "./utils";

function Card({ className, ...props }: DivElementProps) {
  return (
    <div
      data-slot="card"
      className={cn(
        "rounded-lg py-4 text-foregroung bg-background-subtle flex flex-col gap-4 border border-border/60 overflow-hidden",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: DivElementProps) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-4 [.border-b]:pb-4 border-border/60",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: DivElementProps) {
  return (
    <div
      data-slot="card-title"
      className={cn("font-semibold text-xl text-foreground", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: DivElementProps) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm leading-5 text-foreground-subtle", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: DivElementProps) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-4", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: DivElementProps) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center px-4 [.border-t]:pt-6 border-border/60",
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
