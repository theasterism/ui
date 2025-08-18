"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "orphos/dropdown-menu";
import { ChevronUpDownIcon, RectangleStackIcon } from "orphos/icons";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "orphos/sidebar";

export function VersionSwitcher(
  team: Array<{
    name: string;
    href: string;
  }>
) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              variant="default"
              className="data-[state=open]:bg-background-element data-[state=open]:text-foreground">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-foreground text-background">
                <RectangleStackIcon className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none"></div>
              <ChevronUpDownIcon className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width)"
            align="start"></DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
