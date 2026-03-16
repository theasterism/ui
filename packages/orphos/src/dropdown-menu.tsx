"use client";

import { Menu as DropdownMenuPrimitive } from "@base-ui/react/menu";
import {
  IconCheck,
  IconChevronRight,
  IconCircleFilled,
} from "@tabler/icons-react";
import type * as React from "react";
import { cn } from "./utils";

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  );
}

function DropdownMenuTrigger({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      className={cn("data-pressed:bg-background-element-hover", className)}
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  );
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  );
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  );
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubmenuRoot>) {
  return (
    <DropdownMenuPrimitive.SubmenuRoot
      data-slot="dropdown-menu-sub"
      {...props}
    />
  );
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubmenuTrigger> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.SubmenuTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "relative flex h-7.5 cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-0.75 pl-2.5 text-foreground text-sm outline-hidden data-highlighted:bg-background-element-hover data-popup-open:bg-background-element-hover data-inset:pl-8.5 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-foreground-subtle [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}>
      {children}
      <IconChevronRight className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubmenuTrigger>
  );
}

function DropdownMenuSubContent({
  align = "start",
  alignOffset = -3,
  side = "right",
  sideOffset = 0,
  ...props
}: React.ComponentProps<typeof DropdownMenuContent>) {
  return (
    <DropdownMenuContent
      data-slot="dropdown-menu-sub-content"
      align={align}
      alignOffset={alignOffset}
      side={side}
      sideOffset={sideOffset}
      {...props}
    />
  );
}

function DropdownMenuContent({
  className,
  align = "start",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  ...props
}: DropdownMenuPrimitive.Popup.Props &
  Pick<
    DropdownMenuPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <DropdownMenuPositioner
      className="isolate z-50 outline-none"
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}>
      <DropdownMenuPrimitive.Popup
        data-slot="dropdown-menu-content"
        className={cn(
          "data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--available-height) min-w-37.5 origin-(--transform-origin) overflow-y-auto overflow-x-hidden rounded-lg bg-background-element p-1 text-foreground outline-hidden ring-1 ring-border-subtle duration-100 data-closed:animate-out data-closed:overflow-hidden",
          className
        )}
        {...props}
      />
    </DropdownMenuPositioner>
  );
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "danger";
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "relative flex h-7.5 cursor-default select-none items-center gap-2 rounded-sm px-2.5 py-1.5 text-foreground text-sm outline-hidden data-[variant=danger]:data-highlighted:bg-danger-subtle data-[variant=danger]:data-highlighted:text-danger data-disabled:pointer-events-none data-highlighted:bg-background-element-hover data-inset:pl-8.5 data-[variant=danger]:text-danger data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-foreground-subtle [&_svg]:pointer-events-none [&_svg]:shrink-0 data-[variant=danger]:*:[svg]:text-danger!",
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "relative flex h-7.5 cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2.5 pl-8.5 text-foreground text-sm outline-hidden data-disabled:pointer-events-none data-highlighted:bg-background-element-hover data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      checked={checked}
      {...props}>
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.CheckboxItemIndicator>
          <IconCheck className="size-4 text-primary" />
        </DropdownMenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "relative flex h-7.5 cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2.5 pl-8 text-foreground text-sm outline-hidden data-disabled:pointer-events-none data-highlighted:bg-background-element-hover data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}>
      <span className="pointer-events-none absolute left-2.25 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.RadioItemIndicator>
          <IconCircleFilled className="size-2 text-primary" />
        </DropdownMenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.GroupLabel> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.GroupLabel
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 font-medium text-foreground-subtle text-xs data-inset:pl-8",
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("-mx-1 my-1 h-px bg-border-subtle", className)}
      {...props}
    />
  );
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "-mr-0.75 ml-auto text-foreground-subtle text-xs tracking-widest",
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuPositioner({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Positioner>) {
  return (
    <DropdownMenuPortal>
      <DropdownMenuPrimitive.Positioner
        className="z-50 outline-hidden"
        data-slot="dropdown-menu-positioner"
        {...props}
      />
    </DropdownMenuPortal>
  );
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPositioner,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuCheckboxItem,
};
