import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "orphos/sidebar";
import type * as React from "react";
import { docsNavSections } from "../../docs-nav";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} variant="inset">
      <SidebarHeader>
        <SidebarMenuButton size="lg">
          <div className="flex size-7 items-center justify-center rounded-full bg-primary" />
          <div className="flex flex-col">
            <span className="font-semibold">Orphos</span>
            <span className="text-foreground-subtle text-xs">
              Component Library
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        {docsNavSections.map((section) => (
          <SidebarGroup key={section.label} className="mt-2 first:mt-0">
            <SidebarGroupLabel>{section.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => {
                  return (
                    <SidebarMenuItem key={item.slug}>
                      <SidebarMenuButton size="sm">
                        {item.title}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
