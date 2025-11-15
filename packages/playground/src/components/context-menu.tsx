import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
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
        <ContextMenuItem>Add to Library</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>Add to Playlist</ContextMenuSubTrigger>
          <ContextMenuPositioner alignOffset={-5} sideOffset={2}>
            <ContextMenuSubContent>
              <ContextMenuItem>Get up!</ContextMenuItem>
              <ContextMenuItem>Inside Out</ContextMenuItem>
              <ContextMenuItem>Night Beats</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>New Playlist...</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuPositioner>
        </ContextMenuSub>
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
