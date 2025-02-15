import { HomeIcon, ShadowIcon } from "@radix-ui/react-icons";
import { Button } from "@theanalog/orphos/button";

export function IconButtonDemo() {
  return (
    <div className="flex flex-row flex-wrap gap-8">
      <div className="flex flex-col gap-4 w-auto">
        <Button size="icon">
          <HomeIcon />
        </Button>
        <Button size="icon" variant="primary">
          <HomeIcon />
        </Button>
        <Button size="icon" variant="ghost">
          <HomeIcon />
        </Button>
        <Button size="icon" variant="danger">
          <HomeIcon />
        </Button>
      </div>
      <div className="flex flex-col gap-4 w-auto">
        <Button disabled size="icon">
          <HomeIcon />
        </Button>
        <Button disabled size="icon" variant="primary">
          <HomeIcon />
        </Button>
        <Button disabled size="icon" variant="ghost">
          <HomeIcon />
        </Button>
        <Button disabled size="icon" variant="danger">
          <HomeIcon />
        </Button>
      </div>
    </div>
  );
}
