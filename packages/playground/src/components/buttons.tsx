import { Button } from "@theanalog/orphos/button";

export function ButtonsDemo() {
  return (
    <div className="flex flex-row flex-wrap gap-8">
      <div className="flex flex-col gap-4 w-auto">
        <Button size="sm">Button text</Button>
        <Button size="sm" variant="primary">
          Button text
        </Button>
        <Button size="sm" variant="secondary">
          Button text
        </Button>
        <Button size="sm" variant="ghost">
          Button text
        </Button>
        <Button size="sm" variant="danger">
          Button text
        </Button>
        <Button size="sm" variant="link">
          Button text
        </Button>
      </div>
      <div className="flex flex-col gap-4 w-auto">
        <Button>Button text</Button>
        <Button variant="primary">Button text</Button>
        <Button variant="secondary">Button text</Button>
        <Button variant="ghost">Button text</Button>
        <Button variant="danger">Button text</Button>
        <Button variant="link">Button text</Button>
      </div>
      <div className="flex flex-col gap-4 w-auto">
        <Button size="lg">Button text</Button>
        <Button size="lg" variant="primary">
          Button text
        </Button>
        <Button size="lg" variant="secondary">
          Button text
        </Button>
        <Button size="lg" variant="ghost">
          Button text
        </Button>
        <Button size="lg" variant="danger">
          Button text
        </Button>
        <Button size="lg" variant="link">
          Button text
        </Button>
      </div>
    </div>
  );
}

export function ButtonDisabledDemo() {
  return (
    <div className="flex flex-row flex-wrap gap-8">
      <div className="flex flex-col gap-4 w-auto">
        <Button disabled size="sm">
          Button text
        </Button>
        <Button disabled size="sm" variant="primary">
          Button text
        </Button>
        <Button disabled size="sm" variant="secondary">
          Button text
        </Button>
        <Button disabled size="sm" variant="ghost">
          Button text
        </Button>
        <Button disabled size="sm" variant="danger">
          Button text
        </Button>
        <Button disabled size="sm" variant="link">
          Button text
        </Button>
      </div>
      <div className="flex flex-col gap-4 w-auto">
        <Button disabled>Button text</Button>
        <Button disabled variant="primary">
          Button text
        </Button>
        <Button disabled variant="secondary">
          Button text
        </Button>
        <Button disabled variant="ghost">
          Button text
        </Button>
        <Button disabled variant="danger">
          Button text
        </Button>
        <Button disabled variant="link">
          Button text
        </Button>
      </div>
      <div className="flex flex-col gap-4 w-auto">
        <Button disabled size="lg">
          Button text
        </Button>
        <Button disabled size="lg" variant="primary">
          Button text
        </Button>
        <Button disabled size="lg" variant="secondary">
          Button text
        </Button>
        <Button disabled size="lg" variant="ghost">
          Button text
        </Button>
        <Button disabled size="lg" variant="danger">
          Button text
        </Button>
        <Button disabled size="lg" variant="link">
          Button text
        </Button>
      </div>
    </div>
  );
}
