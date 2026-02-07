import { IconPlus } from "@tabler/icons-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPositioner,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "orphos/context-menu";

export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[100px] w-[200px] select-none items-center justify-center rounded-xl border border-dashed text-base">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuLabel>TITLE</ContextMenuLabel>
          <ContextMenuItem>Add to Library</ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Add to Playlist</ContextMenuSubTrigger>
            <ContextMenuPositioner alignOffset={-4} sideOffset={2}>
              <ContextMenuSubContent>
                <ContextMenuItem inset>Get up!</ContextMenuItem>
                <ContextMenuItem inset>Inside Out</ContextMenuItem>
                <ContextMenuItem inset> Night Beats</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  <IconPlus /> New Playlist...
                </ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuPositioner>
          </ContextMenuSub>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuItem>Play Next</ContextMenuItem>
        <ContextMenuItem>Play Last</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Favorite</ContextMenuItem>
        <ContextMenuItem variant="danger">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
