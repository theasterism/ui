import { Button } from "@theanalog/orphos/button";
import { CursorPointer } from "iconoir-react";

export function IconButtonDemo() {
  return (
    <div className="flex flex-row flex-wrap gap-8">
      <div className="flex flex-col gap-4 w-auto">
        <Button size="icon">
          <CursorPointer />
        </Button>
        <Button size="icon" variant="primary">
          <CursorPointer />
        </Button>
        <Button size="icon" variant="secondary">
          <CursorPointer />
        </Button>
        <Button size="icon" variant="ghost">
          <CursorPointer />
        </Button>
        <Button size="icon" variant="danger">
          <CursorPointer />
        </Button>
      </div>
      <div className="flex flex-col gap-4 w-auto">
        <Button disabled size="icon">
          <CursorPointer />
        </Button>
        <Button disabled size="icon" variant="primary">
          <CursorPointer />
        </Button>
        <Button disabled size="icon" variant="secondary">
          <CursorPointer />
        </Button>
        <Button disabled size="icon" variant="ghost">
          <CursorPointer />
        </Button>
        <Button disabled size="icon" variant="danger">
          <CursorPointer />
        </Button>
      </div>
    </div>
  );
}
