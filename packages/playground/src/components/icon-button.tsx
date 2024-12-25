import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { Button } from "@theanalog/orphos/button";

export function IconButtonDemo() {
  return (
    <div className="flex flex-row flex-wrap gap-8">
      <div className="flex flex-col gap-4 w-auto">
        <Button size="icon">
          <RocketLaunchIcon />
        </Button>
        <Button size="icon" variant="primary">
          <RocketLaunchIcon />
        </Button>
        <Button size="icon" variant="secondary">
          <RocketLaunchIcon />
        </Button>
        <Button size="icon" variant="ghost">
          <RocketLaunchIcon />
        </Button>
        <Button size="icon" variant="danger">
          <RocketLaunchIcon />
        </Button>
      </div>
      <div className="flex flex-col gap-4 w-auto">
        <Button disabled size="icon">
          <RocketLaunchIcon />
        </Button>
        <Button disabled size="icon" variant="primary">
          <RocketLaunchIcon />
        </Button>
        <Button disabled size="icon" variant="secondary">
          <RocketLaunchIcon />
        </Button>
        <Button disabled size="icon" variant="ghost">
          <RocketLaunchIcon />
        </Button>
        <Button disabled size="icon" variant="danger">
          <RocketLaunchIcon />
        </Button>
      </div>
    </div>
  );
}
