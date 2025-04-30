import type { DivElementProps } from "./types";
import { cn } from "./utils";

function Card({ className, ...props }: DivElementProps) {
  return (
    <div
      data-slot="card"
      className={cn(
        "flex flex-col gap-4 overflow-hidden rounded-lg border border-border-element/75 bg-white py-4 text-foreground",
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
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-0.5 border-border-element/75 px-4 [.border-b]:pb-4",
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
      className={cn("font-semibold text-foreground text-xl", className)}
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
        "flex items-center border-border-element/75 px-4 [.border-t]:pt-6",
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
