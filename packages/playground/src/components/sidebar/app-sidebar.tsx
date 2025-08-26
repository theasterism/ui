import {
  Cog6ToothIcon,
  HomeIcon,
  Square2StackIcon,
  TicketIcon,
} from "orphos/icons";
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
      icon: HomeIcon,
      isActive: true,
    },
    {
      label: "Events",
      href: "#",
      icon: Square2StackIcon,
      alerts: 2,
    },
    {
      label: "Orders",
      href: "#",
      icon: TicketIcon,
    },
    {
      label: "Settings",
      href: "#",
      icon: Cog6ToothIcon,
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
        <SidebarMenuButton variant="outline" size="lg">
          <div className="size-5 rounded-full bg-primary" /> The Analog Co.
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.mainNav.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild isActive={item.isActive}>
                    <a href={item.href}>
                      <item.icon />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
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
                  <SidebarMenuButton asChild>
                    <a href={event.href}>
                      <span>{event.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
