import { Button } from "@theanalog/orphos/button";

export function ButtonsDemo() {
  return (
    <div className="z-auto flex w-auto flex-row flex-wrap gap-4">
      <Button>Button text</Button>
      <Button variant="primary">Button text</Button>
      <Button variant="secondary">Button text</Button>
      <Button variant="ghost">Button text</Button>
      <Button variant="danger">Button text</Button>
      <Button variant="link">Button text</Button>
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
  );
}
