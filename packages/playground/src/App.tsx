import { Button } from "@theanalog/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@theanalog/ui/card";
import { ColorPalette } from "./components/pallete";
import { InputsDemo } from "./components/inputs";
import { CheckboxDemo } from "./components/checkbox";
import { Tooltip, TooltipTrigger, TooltipContent } from "@theanalog/ui/tooltip";
import { Badge } from "@theanalog/ui/badge";

function App() {
  return (
    <section className="flex flex-col gap-32 px-4 md:px-8 py-32 max-w-4xl w-full mx-auto">
      <div>
        <h1 className="font-bold">The Analog Co. Design System</h1>
        <hr className="my-4" />
        <span>Work In Progress.</span>
      </div>
      <ColorPalette />
      <div className="flex flex-col gap-4 w-auto items-start">
        <h2 className="">Button</h2>
        <div className="flex flex-col gap-4 w-auto">
          <Button>Button text</Button>
          <Button variant="primary">Button text</Button>
          <Button variant="secondary">Button text</Button>
          <Button variant="ghost">Button text</Button>
          <Button variant="danger">Button text</Button>
          <Button variant="link">Button text</Button>
        </div>
      </div>
      <div className="flex flex-col gap-10 items-start">
        <h2 className="">Form Components</h2>
        <InputsDemo />
        <CheckboxDemo />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="">Card</h2>
        <div className="flex flex-row gap-4 w-auto">
          <Card className={"w-[380px]"}>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>You have 3 unread messages.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4"></CardContent>
            <CardFooter>
              <Button className="w-full">Mark all as read</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="">Tooltip</h2>
        <div className="flex flex-row gap-4 w-auto">
          <Tooltip delayDuration={250}>
            <TooltipTrigger asChild>
              <Button size="sm" variant="secondary">
                Hover
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" sideOffset={8} align="start">
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="">Badge</h2>
        <div className="flex flex-row flex-wrap gap-4 w-auto">
          <Badge>Badge</Badge>
          <Badge variant="primary">Badge</Badge>
          <Badge variant="secondary">Badge</Badge>
          <Badge variant="info">Badge</Badge>
          <Badge variant="warning">Badge</Badge>
          <Badge variant="destructive">Badge</Badge>
          <Badge variant="success">Badge</Badge>
        </div>
      </div>
    </section>
  );
}

export { App };
