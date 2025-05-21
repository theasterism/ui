import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@theanalog/orphos/dropdown-menu";
import {
  Cog6ToothIcon,
  EllipsisHorizontalIcon,
  HomeIcon,
  PlusIcon,
  Square2StackIcon,
  TicketIcon,
} from "@theanalog/orphos/icons";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@theanalog/orphos/sidebar";
import * as React from "react";
import { SearchForm } from "./search-form";

const data: {
  teamSwitcher: Array<{
    name: string;
    href: string;
  }>;
  mainNav: Array<{
    label: string;
    href: string;
    alerts?: number;
    icon: any;
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
    <Sidebar {...props} collapsible="offcanvas" variant="inset">
      <SidebarHeader>
        <SidebarMenuButton>
          <div className="size-5 rounded-full bg-primary" /> The Analog Co.
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.mainNav.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
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
          <SidebarGroupAction title="Add Project">
            <PlusIcon /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.eventsGroup.events.map((event) => (
                <SidebarMenuItem key={event.label}>
                  <SidebarMenuButton asChild>
                    <a href={event.href}>
                      <span>{event.label}</span>
                    </a>
                  </SidebarMenuButton>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuAction>
                        <EllipsisHorizontalIcon />
                      </SidebarMenuAction>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="right" align="start">
                      <DropdownMenuItem>
                        <span>Edit Project</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Delete Project</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
