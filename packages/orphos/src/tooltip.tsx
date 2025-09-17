"use client";
import { Tooltip as TooltipPrimitive } from "@base-ui-components/react/tooltip";

import type * as React from "react";
import { cn } from "./utils";

function TooltipProvider({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return <TooltipPrimitive.Provider data-slot="tooltip-provider" {...props} />;
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />;
}

function TooltipTrigger({
  children,
  render,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return (
    <TooltipPrimitive.Trigger
      data-slot="tooltip-trigger"
      // biome-ignore lint/suspicious/noExplicitAny: shut up!
      render={children ? (children as any) : render}
      {...props}
    />
  );
}

function TooltipPositioner({
  className,
  sideOffset = 10,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Positioner>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner
        data-slot="tooltip-positioner"
        sideOffset={sideOffset}
        className={cn("z-50", className)}
        {...props}
      />
    </TooltipPrimitive.Portal>
  );
}

function TooltipContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Popup>) {
  return (
    <TooltipPrimitive.Popup
      data-slot="tooltip-content"
      className={cn(
        "z-100 w-fit origin-(--transform-origin) text-balance rounded-md bg-foreground px-2 py-1 text-background text-xs transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[starting-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 data-[instant]:duration-0",
        className
      )}
      {...props}>
      {children}
      <TooltipPrimitive.Arrow
        className={cn(
          "z-50 size-2 rotate-45 bg-foreground fill-foreground",
          "data-[side=bottom]:-translate-y-1/2 data-[side=bottom]:top-[0.2px]",
          "data-[side=top]:bottom-[0.2px] data-[side=top]:translate-y-1/2",
          "data-[side=left]:right-0 data-[side=left]:translate-x-1/2",
          "data-[side=right]:-translate-x-1/2 data-[side=right]:left-[0.2px]",
          className
        )}
      />
    </TooltipPrimitive.Popup>
  );
}

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  TooltipPositioner,
};
