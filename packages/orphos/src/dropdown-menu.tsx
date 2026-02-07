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
        "relative flex h-8 cursor-default select-none items-center gap-2 rounded-xs py-2 pr-[3px] pl-3 text-foreground text-sm outline-hidden data-highlighted:bg-background-element-hover data-popup-open:bg-background-element-hover data-inset:pl-8 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-foreground-subtle [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}>
      {children}
      <IconChevronRight className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubmenuTrigger>
  );
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Popup>) {
  return (
    <DropdownMenuPrimitive.Popup
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[150px] origin-(--transform-origin) overflow-hidden rounded-md border bg-background-subtle p-1 text-foreground outline-hidden",
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuContent({
  className,
  align = "center",
  alignOffset = 0,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Popup> & {
  align?: DropdownMenuPrimitive.Positioner.Props["align"];
  alignOffset?: DropdownMenuPrimitive.Positioner.Props["alignOffset"];
  sideOffset?: DropdownMenuPrimitive.Positioner.Props["sideOffset"];
}) {
  return (
    <DropdownMenuPositioner
      className="z-50"
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}>
      <DropdownMenuPrimitive.Popup
        data-slot="dropdown-menu-content"
        className={cn(
          "data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--available-height) min-w-[150px] origin-(--transform-origin) overflow-y-auto overflow-x-hidden rounded-md border bg-background-subtle p-1 text-foreground outline-hidden data-closed:animate-out",
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
        "relative flex h-8 cursor-default select-none items-center gap-2 rounded-xs px-3 py-2 text-foreground text-sm outline-hidden data-[variant=danger]:data-highlighted:text-danger data-disabled:pointer-events-none data-highlighted:bg-background-element-hover data-inset:pl-9 data-[variant=danger]:text-danger data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-foreground-subtle [&_svg]:pointer-events-none [&_svg]:shrink-0 data-[variant=danger]:*:[svg]:text-danger!",
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
        "relative flex h-8 cursor-default select-none items-center gap-2 rounded-xs py-2 pr-3 pl-9 text-foreground text-sm outline-hidden data-disabled:pointer-events-none data-highlighted:bg-background-element-hover data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
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
        "relative flex h-8 cursor-default select-none items-center gap-2 rounded-xs py-2 pr-3 pl-9 text-foreground text-sm outline-hidden data-disabled:pointer-events-none data-highlighted:bg-background-element-hover data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}>
      <span className="pointer-events-none absolute left-[9px] flex size-3.5 items-center justify-center">
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
        "px-3 py-1.5 font-medium text-foreground-subtle text-xs data-inset:pl-9",
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
      className={cn("my-1 h-px bg-border-subtle", className)}
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
        "-mr-[3px] ml-auto text-foreground-subtle text-sm tracking-widest",
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
