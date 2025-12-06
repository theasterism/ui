"use client";

import { Switch as SwitchPrimitive } from "@base-ui-components/react/switch";
import type * as React from "react";
import { cn } from "./utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "group inline-flex shrink-0 items-center align-middle",
        "h-5 w-7.5 py-[0.075rem]",
        "cursor-default rounded-full border border-transparent",
        "focus-visible:outline-2 focus-visible:outline-offset-2",
        "transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        "before:-inset-[7px] relative duration-100 before:absolute data-checked:bg-primary data-unchecked:bg-background-element-hover data-checked:hover:bg-primary-hover data-unchecked:hover:bg-background-element-active",
        className
      )}
      {...props}>
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-3.5 rounded-full bg-white",
          "transition-transform duration-100",
          "data-checked:translate-x-[calc(100%-1.5px)] data-unchecked:translate-x-[1.8px]"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
