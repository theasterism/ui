"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@theanalog/orphos/dropdown-menu";
import {
  CheckIcon,
  ChevronUpDownIcon,
  RectangleStackIcon,
} from "@theanalog/orphos/icons";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@theanalog/orphos/sidebar";
import * as React from "react";

export function VersionSwitcher({
  versions,
  defaultVersion,
}: {
  versions: string[];
  defaultVersion: string;
}) {
  const [selectedVersion, setSelectedVersion] = React.useState(defaultVersion);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              variant="outline"
              className="data-[state=open]:bg-background-element data-[state=open]:text-foreground">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-foreground text-background">
                <RectangleStackIcon className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold">Documentation</span>
                <span className="">v{selectedVersion}</span>
              </div>
              <ChevronUpDownIcon className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width)"
            align="start">
            {versions.map((version) => (
              <DropdownMenuItem
                key={version}
                onSelect={() => setSelectedVersion(version)}>
                v{version}{" "}
                {version === selectedVersion && (
                  <CheckIcon className="ml-auto" />
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
