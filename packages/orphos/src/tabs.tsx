"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import type * as React from "react";

import { cn } from "./utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn(
        "flex flex-col gap-2 data-[orientation=vertical]:flex-row",
        className
      )}
      {...props}
    />
  );
}

function TabsList({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "relative z-0 flex w-fit items-center justify-center gap-x-0.5 rounded-lg bg-background-element-hover p-0.5 data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}>
      {children}
      <TabsPrimitive.Indicator
        data-slot="tab-indicator"
        className={cn(
          "absolute bottom-0 left-0 h-(--active-tab-height) w-(--active-tab-width) translate-x-(--active-tab-left) -translate-y-(--active-tab-bottom) transition-[width,translate] duration-150 ease-in-out",
          "-z-1 rounded-md border-0 bg-background-element shadow-xs"
        )}
      />
    </TabsPrimitive.List>
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Tab>) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "flex flex-1 shrink-0 cursor-default items-center justify-center whitespace-nowrap rounded-md border border-transparent font-medium text-foreground-subtle text-small transition-[color,background-color,box-shadow] focus-visible:outline-2 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        "hover:text-foreground data-selected:text-foreground",
        "gap-1.5 px-[calc(--spacing(2.5)-1px)] py-[calc(--spacing(1.5)-1px)]",
        "data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Panel>) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
