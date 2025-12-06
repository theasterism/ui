"use client";

import { Select as SelectPrimitive } from "@base-ui-components/react/select";
import {
  IconCheck,
  IconChevronDown,
  IconChevronUp,
  IconSelector,
} from "@tabler/icons-react";
import type * as React from "react";
import { cn } from "./utils";

const Select = SelectPrimitive.Root;

function SelectTrigger({
  className,
  children,
  ...props
}: SelectPrimitive.Trigger.Props) {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        "-outline-offset-1 flex h-8.5 w-fit items-center justify-between gap-2 whitespace-nowrap rounded-md border bg-background-element px-2.5 py-2 text-sm transition-[color,box-shadow] hover:bg-background-element-hover focus-visible:outline-2 aria-invalid:outline-2 aria-invalid:outline-danger data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-popup-open:bg-background-element-hover data-placeholder:text-foreground-subtle! data-disabled:opacity-50",
        className
      )}
      data-slot="select-trigger"
      {...props}>
      {children}
      <SelectPrimitive.Icon>
        <IconSelector className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectValue({ className, ...props }: SelectPrimitive.Value.Props) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn("pointer-events-none cursor-default truncate", className)}
      {...props}
    />
  );
}

function SelectContent({
  className,
  children,
  sideOffset = 4,
  ...props
}: SelectPrimitive.Popup.Props & {
  sideOffset?: SelectPrimitive.Positioner.Props["sideOffset"];
}) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        data-slot="select-positioner"
        className="z-50 select-none"
        sideOffset={sideOffset}
        alignItemWithTrigger={false}>
        <SelectPrimitive.Popup
          className={cn(
            "data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--transform-origin) data-closed:animate-out"
          )}
          {...props}>
          <SelectScrollUpButton />
          <SelectPrimitive.List
            className={cn(
              "relative z-50 block max-h-(--available-height) min-w-(--anchor-width) origin-(--transform-origin) overflow-y-auto overflow-x-hidden rounded-md border bg-background-subtle p-1 text-foreground outline-hidden",
              className
            )}>
            {children}
          </SelectPrimitive.List>

          <SelectScrollDownButton />
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  ...props
}: SelectPrimitive.GroupLabel.Props) {
  return (
    <SelectPrimitive.GroupLabel
      className={cn("px-2 py-1.5 font-medium text-sm", className)}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      className={cn(
        "relative flex h-8 w-full cursor-default select-none items-center gap-2 rounded-xs p-2 text-foreground text-sm outline-none data-disabled:pointer-events-none data-highlighted:bg-background-element-hover data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-foreground-subtle [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <IconCheck className="size-4 text-primary" />
        </SelectPrimitive.ItemIndicator>
      </span>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      className={cn("mx-2 my-1 h-px bg-border-subtle", className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: SelectPrimitive.ScrollUpArrow.Props) {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-button"
      className={cn(
        "top-px left-px z-100 flex w-[calc(100%-2px)] cursor-default items-center justify-center rounded-t-md bg-background-element py-1",
        className
      )}
      {...props}>
      <IconChevronUp className="size-4" />
    </SelectPrimitive.ScrollUpArrow>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: SelectPrimitive.ScrollDownArrow.Props) {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-button"
      className={cn(
        "bottom-px left-px z-100 flex w-[calc(100%-2px)] cursor-default items-center justify-center rounded-b-md bg-background-element py-1",
        className
      )}
      {...props}>
      <IconChevronDown className="size-4" />
    </SelectPrimitive.ScrollDownArrow>
  );
}

function SelectGroup({ ...props }: SelectPrimitive.Group.Props) {
  return <SelectPrimitive.Group {...props} />;
}

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
