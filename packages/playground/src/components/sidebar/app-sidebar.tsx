import { IconHome, IconSettings, IconStack2, IconTicket } from "@tabler/icons-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "orphos/sidebar";
import type * as React from "react";

const data: {
  teamSwitcher: Array<{
    name: string;
    href: string;
  }>;
  mainNav: Array<{
    label: string;
    href: string;
    alerts?: number;
    // biome-ignore lint/suspicious/noExplicitAny: shut up!
    icon: any;
    isActive?: boolean;
  }>;
  eventsGroup: {
    label: string;
    events: Array<{ label: string; href: string }>;
  };
} = {
  teamSwitcher: [
    { name: "Tailwind Labs", href: "/" },
    { name: "Workaction", href: "/" },
  ],
  mainNav: [
    {
      label: "Home",
      href: "#",
      icon: IconHome,
      isActive: true,
    },
    {
      label: "Events",
      href: "#",
      icon: IconStack2,
      alerts: 2,
    },
    {
      label: "Orders",
      href: "#",
      icon: IconTicket,
    },
    {
      label: "Settings",
      href: "#",
      icon: IconSettings,
    },
  ],
  eventsGroup: {
    label: "Upcoming Events",
    events: [
      { label: "Bear Hug", href: "#" },
      { label: "Viking People", href: "#" },
      { label: "Six Finger", href: "#" },
    ],
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} collapsible="offcanvas" variant="sidebar">
      <SidebarHeader>
        <SidebarMenuButton size="lg">
          <div className="size-6 rounded-full bg-primary" />
          <span className="font-semibold">Orhos</span>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.mainNav.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    render={
                      <a href={item.href}>
                        <item.icon />
                        <span>{item.label}</span>
                      </a>
                    }
                    isActive={item.isActive}
                  />

                  {item.alerts ? (
                    <SidebarMenuBadge>{item.alerts}</SidebarMenuBadge>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="mt-2">
          <SidebarGroupLabel>{data.eventsGroup.label}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.eventsGroup.events.map((event) => (
                <SidebarMenuItem key={event.label}>
                  <SidebarMenuButton
                    render={
                      <a href={event.href}>
                        <span>{event.label}</span>
                      </a>
                    }
                    size="sm"
                  />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
