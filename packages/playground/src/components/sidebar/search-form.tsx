import { MagnifyingGlassIcon } from "@theanalog/orphos/icons";
import { Label } from "@theanalog/orphos/label";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@theanalog/orphos/sidebar";

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form {...props}>
      <SidebarGroup className="px-0 py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder="Search the docs..."
            className="pl-8"
          />
          <MagnifyingGlassIcon className="-translate-y-1/2 pointer-events-none absolute top-1/2 left-2 size-4 select-none opacity-50" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}
