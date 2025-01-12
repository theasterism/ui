import * as React from "react";
import { cn } from "./lib/utils";

type DivElementProps = React.ComponentProps<"div">;

const Card = ({ className, ref, ...props }: DivElementProps) => (
  <div
    ref={ref}
    className={cn(
      "rounded-md text-foregroung shadow-[inset_0px_0.5px_0px_rgb(208_205_215),_inset_0px_0px_0px_0.5px_rgb(208_205_215)] dark:shadow-[inset_0px_1px_0px_rgb(255_255_255_/_0.04),_inset_0px_0px_0px_1px_rgb(255_255_255_/_0.02)]",
      className,
    )}
    {...props}
  />
);

Card.displayName = "Card";

const CardHeader = ({ className, ref, ...props }: DivElementProps) => (
  <div ref={ref} className={cn("flex flex-col p-3.5", className)} {...props} />
);
CardHeader.displayName = "CardHeader";

const CardTitle = ({ className, ref, ...props }: DivElementProps) => (
  <div
    ref={ref}
    className={cn("font-semibold text-[16px] leading-[24px] tracking-tight text-foreground", className)}
    {...props}
  />
);
CardTitle.displayName = "CardTitle";

const CardDescription = ({ className, ref, ...props }: DivElementProps) => (
  <div ref={ref} className={cn("text-sm leading-relaxed text-foreground-subtle", className)} {...props} />
);
CardDescription.displayName = "CardDescription";

const CardContent = ({ className, ref, ...props }: DivElementProps) => (
  <div ref={ref} className={cn("px-4", className)} {...props} />
);

CardContent.displayName = "CardContent";

const CardFooter = ({ className, ref, ...props }: DivElementProps) => (
  <div ref={ref} className={cn("flex items-center p-4 border-t-[0.5px] border-border-subtle", className)} {...props} />
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
