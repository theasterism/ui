import { Button } from "orphos/button";
import { IconArrowUpRight, IconCloudDownload } from "@tabler/icons-react";
import { Spinner } from "orphos/spinner";

export function ButtonDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="z-auto flex w-auto flex-row flex-wrap gap-4">
        <div className="flex items-start gap-2">
          <Button size="sm">Small</Button>
          <Button size="icon-sm" aria-label="Submit">
            <IconArrowUpRight />
          </Button>
        </div>
        <div className="flex items-start gap-2">
          <Button>Default</Button>
          <Button size="icon" aria-label="Submit">
            <IconArrowUpRight />
          </Button>
        </div>
        <div className="flex items-start gap-2">
          <Button size="lg">Large</Button>
          <Button size="icon-lg" aria-label="Submit">
            <IconArrowUpRight />
          </Button>
        </div>
      </div>
      <div className="z-auto flex w-auto flex-row flex-wrap gap-4">
        <Button>Button text</Button>
        <Button variant="primary">Button text</Button>
        <Button variant="danger">Button text</Button>
        <Button variant="link">Button text</Button>
      </div>
      <div className="z-auto flex w-auto flex-row flex-wrap gap-4">
        <Button>
          <IconCloudDownload /> Download
        </Button>
        <Button disabled>
          <Spinner /> Loading
        </Button>
      </div>
    </div>
  );
}

export function ButtonDisabledDemo() {
  return (
    <div className="z-auto flex w-auto flex-row flex-wrap gap-4">
      <Button disabled>Button text</Button>
      <Button disabled variant="primary">
        Button text
      </Button>
      <Button disabled variant="danger">
        Button text
      </Button>
      <Button disabled variant="link">
        Button text
      </Button>
    </div>
  );
}
