import * as React from "react";
import { cn } from "./utils";

type DivElementProps = React.ComponentProps<"div">;

const Card = ({ className, ref, ...props }: DivElementProps) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg text-foregroung bg-background dark:bg-background-subtle border border-border/60 overflow-hidden",
      className,
    )}
    {...props}
  />
);

Card.displayName = "Card";

const CardHeader = ({ className, ref, ...props }: DivElementProps) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-3.5", className)} {...props} />
);
CardHeader.displayName = "CardHeader";

const CardTitle = ({ className, ref, ...props }: DivElementProps) => (
  <div ref={ref} className={cn("font-semibold text-xl text-foreground", className)} {...props} />
);
CardTitle.displayName = "CardTitle";

const CardDescription = ({ className, ref, ...props }: DivElementProps) => (
  <div ref={ref} className={cn("text-sm leading-5 text-foreground-subtle", className)} {...props} />
);
CardDescription.displayName = "CardDescription";

const CardContent = ({ className, ref, ...props }: DivElementProps) => (
  <div ref={ref} className={cn("px-3.5", className)} {...props} />
);

CardContent.displayName = "CardContent";

const CardFooter = ({ className, ref, ...props }: DivElementProps) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center p-4 border-t border-border/60 bg-background-subtle dark:bg-background-subtle",
      className,
    )}
    {...props}
  />
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
