import * as React from "react";
import { cn } from "./lib/utils";

type DivElementProps = React.ComponentProps<"div">;

const Card = ({ className, ref, ...props }: DivElementProps) => (
  <div
    ref={ref}
    className={cn(
      "rounded-3xl border border-border-subtle bg-background dark:bg-background-subtle text-foreground shadow",
      className,
    )}
    {...props}
  />
);

Card.displayName = "Card";

const CardHeader = ({ className, ref, ...props }: DivElementProps) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
);
CardHeader.displayName = "CardHeader";

const CardTitle = ({ className, ref, ...props }: DivElementProps) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight text-black dark:text-white", className)}
    {...props}
  />
);
CardTitle.displayName = "CardTitle";

const CardDescription = ({ className, ref, ...props }: DivElementProps) => (
  <div ref={ref} className={cn("text-sm text-foreground-subtle", className)} {...props} />
);
CardDescription.displayName = "CardDescription";

const CardContent = ({ className, ref, ...props }: DivElementProps) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
);

CardContent.displayName = "CardContent";

const CardFooter = ({ className, ref, ...props }: DivElementProps) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
