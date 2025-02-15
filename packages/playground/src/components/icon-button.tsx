import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "@theanalog/orphos/button";

export function IconButtonDemo() {
  return (
    <div className="flex flex-row flex-wrap gap-8">
      <div className="flex flex-col gap-4 w-auto">
        <Button size="icon">
          <MagnifyingGlassIcon />
        </Button>
        <Button size="icon" variant="primary">
          <MagnifyingGlassIcon />
        </Button>
        <Button size="icon" variant="ghost">
          <MagnifyingGlassIcon />
        </Button>
        <Button size="icon" variant="danger">
          <MagnifyingGlassIcon />
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <Button disabled size="icon">
          <MagnifyingGlassIcon />
        </Button>
        <Button disabled size="icon" variant="primary">
          <MagnifyingGlassIcon />
        </Button>
        <Button disabled size="icon" variant="ghost">
          <MagnifyingGlassIcon />
        </Button>
        <Button disabled size="icon" variant="danger">
          <MagnifyingGlassIcon />
        </Button>
      </div>
    </div>
  );
}
