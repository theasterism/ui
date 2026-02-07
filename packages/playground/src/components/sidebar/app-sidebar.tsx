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
import { AppLink } from "../../router";
import { slugify } from "../../utils/slug";

const navSections = [
  {
    label: "Getting Started",
    items: ["Installation", "Setup", "Usage", "Platform Notes"],
  },
  {
    label: "Foundations",
    items: ["Colors", "Typography"],
  },
  {
    label: "Form Controls",
    items: [
      "Button",
      "Input Group",
      "Select",
      "Checkbox",
      "Radio",
      "Switch",
      "Slider",
      "Textarea",
      "Field",
    ],
  },
  {
    label: "Data Display",
    items: ["Avatar", "Badge", "Card", "Skeleton", "Empty"],
  },
  {
    label: "Feedback",
    items: ["Toast", "Spinner"],
  },
  {
    label: "Overlays",
    items: [
      "Dialog",
      "Sheet",
      "Popover",
      "Tooltip",
      "Dropdown Menu",
      "Context Menu",
    ],
  },
  {
    label: "Navigation",
    items: ["Tabs"],
  },
  {
    label: "Utilities",
    items: ["Toggle", "Kbd", "Separator"],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} collapsible="offcanvas" variant="sidebar">
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          render={
            <AppLink href="/">
              <div className="flex size-7 items-center justify-center rounded-full bg-primary" />
              <div className="flex flex-col">
                <span className="font-semibold">Orphos</span>
                <span className="text-xs text-foreground-subtle">
                  Component Library
                </span>
              </div>
            </AppLink>
          }
        />
      </SidebarHeader>
      <SidebarContent>
        {navSections.map((section) => (
          <SidebarGroup key={section.label} className="mt-2 first:mt-0">
            <SidebarGroupLabel>{section.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item}>
                    <SidebarMenuButton
                      size="sm"
                      render={
                        <AppLink href={`#${slugify(item)}`}>{item}</AppLink>
                      }
                    />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
