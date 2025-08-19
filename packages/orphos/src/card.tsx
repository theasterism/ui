import type { DivElementProps } from "./types";
import { cn } from "./utils";

function Card({ className, ...props }: DivElementProps) {
  return (
    <div
      data-slot="card"
      className={cn(
        "inset-ring-1 inset-ring-border-subtle flex flex-col gap-6 overflow-hidden rounded-md bg-background/10 py-6 text-foreground",
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
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6",
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
      className={cn(
        "font-semibold text-foreground text-xl leading-none",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: DivElementProps) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-foreground-subtle text-sm leading-5", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: DivElementProps) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: DivElementProps) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6", className)}
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
