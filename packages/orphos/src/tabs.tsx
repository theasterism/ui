"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";

import type { ReactNode } from "react";
import { cn } from "./utils";

export type TabsItem = {
  value: string;
  label: ReactNode;
  className?: string;
  render?: TabsPrimitive.Tab.Props["render"];
};

export type TabsProps = {
  variant?: "segmented" | "underline";
  tabs?: Array<TabsItem>;
  value?: string;
  selectedValue?: string;
  onValueChange?: (value: string) => void;
  activateOnFocus?: boolean;
  className?: string;
  listClassName?: string;
  indicatorClassName?: string;
};

export function Tabs({
  tabs,
  value,
  selectedValue,
  onValueChange,
  activateOnFocus,
  className,
  listClassName,
  indicatorClassName,
  variant = "segmented",
}: TabsProps) {
  const items: TabsItem[] = tabs ?? [];

  if (items.length === 0) {
    return null;
  }

  const fallbackValue = items[0]?.value;
  const isControlled = value !== undefined;
  const rootProps = {
    value: isControlled ? value : undefined,
    defaultValue: isControlled ? undefined : (selectedValue ?? fallbackValue),
  };

  const isSegmented = variant === "segmented";
  const isUnderline = variant === "underline";

  return (
    <TabsPrimitive.Root
      {...rootProps}
      className={cn("relative isolate w-fit min-w-0 font-medium", className)}
      onValueChange={(nextValue) => {
        const stringValue = String(nextValue);
        onValueChange?.(stringValue);
      }}>
      <TabsPrimitive.List
        activateOnFocus={activateOnFocus}
        className={cn(
          "scrollbar-hide relative flex w-fit min-w-0 shrink items-stretch",
          isSegmented &&
            "h-9 rounded-lg border border-border-subtle bg-background-element-hover p-0.5",
          isUnderline && "h-7 gap-4 border-border border-b pb-2",
          listClassName
        )}>
        {items.map((tab) => (
          <TabsPrimitive.Tab
            key={tab.value}
            value={tab.value}
            render={tab.render}
            className={cn(
              "relative z-2 flex cursor-pointer items-center whitespace-nowrap rounded-md bg-transparent text-small focus-visible:outline",
              isSegmented &&
                "px-2.5 text-foreground-subtle hover:text-foreground focus-visible:outline aria-selected:text-foreground-subtle aria-selected:hover:text-foreground",
              isUnderline &&
                "px-2 py-2.5 text-foreground-subtle hover:text-foreground aria-selected:hover:text-foreground",
              tab.className
            )}>
            {tab.label}
          </TabsPrimitive.Tab>
        ))}
        <TabsPrimitive.Indicator
          className={cn(
            "absolute left-0 z-1",
            "w-(--active-tab-width) translate-x-(--active-tab-left) transition-all duration-150",
            "data-[rendered=false]:scale-90 data-[rendered=false]:opacity-0",
            isSegmented &&
              "top-(--active-tab-top) h-(--active-tab-height) rounded-md bg-background-element shadow-sm",
            isUnderline && "-bottom-px h-0.5 bg-primary",
            indicatorClassName
          )}
        />
      </TabsPrimitive.List>
    </TabsPrimitive.Root>
  );
}
