"use client";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import {
  IconCheck,
  IconChevronRight,
  IconCircleFilled,
} from "@tabler/icons-react";
import type * as React from "react";
import { cn } from "./utils";

function ContextMenu({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
}

function ContextMenuTrigger({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
  return (
    <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
  );
}

function ContextMenuGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  );
}

function ContextMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  );
}

function ContextMenuPortal({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  );
}

function ContextMenuSub({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubmenuRoot>) {
  return (
    <ContextMenuPrimitive.SubmenuRoot data-slot="context-menu-sub" {...props} />
  );
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubmenuTrigger> & {
  inset?: boolean;
}) {
  return (
    <ContextMenuPrimitive.SubmenuTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "relative flex h-7.5 cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-0.75 pl-2.5 text-foreground text-small outline-hidden data-highlighted:bg-background-element-hover data-popup-open:bg-background-element-hover data-inset:pl-8.5 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-foreground-subtle [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}>
      {children}
      <IconChevronRight className="ml-auto size-4" />
    </ContextMenuPrimitive.SubmenuTrigger>
  );
}

function ContextMenuSubContent({
  align = "start",
  alignOffset = -3,
  side = "right",
  sideOffset = 0,
  ...props
}: React.ComponentProps<typeof ContextMenuContent>) {
  return (
    <ContextMenuContent
      data-slot="context-menu-sub-content"
      align={align}
      alignOffset={alignOffset}
      side={side}
      sideOffset={sideOffset}
      {...props}
    />
  );
}

function ContextMenuContent({
  className,
  align = "start",
  alignOffset = 0,
  side = "right",
  sideOffset = 4,
  ...props
}: ContextMenuPrimitive.Popup.Props &
  Pick<
    ContextMenuPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <ContextMenuPositioner
      className="isolate z-50 outline-none"
      align={align}
      alignOffset={alignOffset}
      side={side}
      sideOffset={sideOffset}>
      <ContextMenuPrimitive.Popup
        data-slot="context-menu-content"
        className={cn(
          "data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--available-height) min-w-37.5 origin-(--transform-origin) overflow-y-auto overflow-x-hidden rounded-lg bg-background-element p-1 text-foreground outline-hidden ring-1 ring-border-subtle duration-100 data-closed:animate-out data-closed:overflow-hidden",
          className
        )}
        {...props}
      />
    </ContextMenuPositioner>
  );
}

function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "danger";
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "relative flex h-7.5 cursor-default select-none items-center gap-2 rounded-sm px-2.5 py-1.5 text-foreground text-small outline-hidden data-[variant=danger]:data-highlighted:bg-danger-subtle data-[variant=danger]:data-highlighted:text-danger data-disabled:pointer-events-none data-highlighted:bg-background-element-hover data-inset:pl-8.5 data-[variant=danger]:text-danger data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-foreground-subtle [&_svg]:pointer-events-none [&_svg]:shrink-0 data-[variant=danger]:*:[svg]:text-danger!",
        className
      )}
      {...props}
    />
  );
}

function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cn(
        "relative flex h-7.5 cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2.5 pl-8.5 text-foreground text-small outline-hidden data-disabled:pointer-events-none data-highlighted:bg-background-element-hover data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      checked={checked}
      {...props}>
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <ContextMenuPrimitive.CheckboxItemIndicator>
          <IconCheck className="size-4 text-primary" />
        </ContextMenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
}

function ContextMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={cn(
        "relative flex h-7.5 cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2.5 pl-8 text-foreground text-small outline-hidden data-disabled:pointer-events-none data-highlighted:bg-background-element-hover data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}>
      <span className="pointer-events-none absolute left-2.25 flex size-3.5 items-center justify-center">
        <ContextMenuPrimitive.RadioItemIndicator>
          <IconCircleFilled className="size-2 text-primary" />
        </ContextMenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
}

function ContextMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.GroupLabel> & {
  inset?: boolean;
}) {
  return (
    <ContextMenuPrimitive.GroupLabel
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 font-medium text-foreground-subtle text-micro data-inset:pl-8",
        className
      )}
      {...props}
    />
  );
}

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn("-mx-1 my-1 h-px bg-border-subtle", className)}
      {...props}
    />
  );
}

function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        "-mr-0.75 ml-auto text-foreground-subtle text-micro tracking-widest",
        className
      )}
      {...props}
    />
  );
}

function ContextMenuPositioner({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Positioner>) {
  return (
    <ContextMenuPortal>
      <ContextMenuPrimitive.Positioner
        className="z-50 outline-hidden"
        data-slot="context-menu-positioner"
        {...props}
      />
    </ContextMenuPortal>
  );
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuPositioner,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuCheckboxItem,
};
