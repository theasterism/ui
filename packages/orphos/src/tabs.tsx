"use client";

import { Tabs as TabsPrimitive } from "radix-ui";
import type * as React from "react";
import { cn } from "./utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "inset-ring-1 inset-ring-border-element inline-flex h-10 w-fit items-center gap-2 rounded-md bg-transparent p-1 text-foreground",
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "inset-ring-border-element inline-flex h-full w-fit items-center justify-center whitespace-nowrap rounded-xs px-3 py-1 font-medium text-foreground-subtle text-sm outline-focus-ring outline-offset-1 transition-all hover:bg-background-element-hover focus-visible:outline-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background-element-active",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        "rounded-lg ring-focus-ring ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0",
        className
      )}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
