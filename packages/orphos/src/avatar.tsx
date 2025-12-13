"use client";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import Avvvatars from "avvvatars-react";

import type * as React from "react";
import { cn } from "./utils";

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8.5 shrink-0 select-none overflow-hidden rounded-full align-middle text-sm",
        className
      )}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full object-cover", className)}
      {...props}
    />
  );
}

type AvatarFallbackProps = React.ComponentProps<
  typeof AvatarPrimitive.Fallback
> & {
  value: string;
};

function AvatarFallback({ className, value, ...props }: AvatarFallbackProps) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "inline-flex size-full items-center justify-center rounded-full font-medium",
        className
      )}
      {...props}>
      <Avvvatars value={value} style="character" size={34} />
    </AvatarPrimitive.Fallback>
  );
}

export { Avatar, AvatarImage, AvatarFallback };
