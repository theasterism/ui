import { Button } from "@theanalog/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@theanalog/ui/card";
import { Input } from "@theanalog/ui/input";
import { ColorPalette } from "./components/pallete";
import { Label } from "@theanalog/ui/label";
import { Textarea } from "@theanalog/ui/textarea";
import { Checkbox } from "@theanalog/ui/checkbox";

const textAreaDemoText = `Here's to the crazy ones.
The misfits.
The rebels.
The troublemakers.
The round pegs in the square holes.

The ones who see things differently.

They're not fond of rules.
And they have no respect for the status quo.

You can quote them, disagree with them,
glorify or vilify them.
About the only thing you can't do is ignore them.

Because they change things.

They push the human race forward.

While some may see them as the crazy ones,
we see genius.

Because the people who are crazy enough to think
they can change the world, are the ones who do.`;

function App() {
  return (
    <section className="flex flex-col gap-20 px-4 md:px-8 py-32 max-w-4xl w-full mx-auto">
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
      <div className="flex flex-col gap-4 items-start">
        <h2 className="">Form Components</h2>
        <div className="flex flex-row gap-4 w-full">
          <Input type="email" placeholder="tim@apple.com" />
          <Input type="email" placeholder="tim@apple.com" disabled />
        </div>
        <div className="flex flex-row gap-4 w-full">
          <div className="grid items-center w-full gap-2">
            <Label htmlFor="email">Input with label</Label>
            <Input id="email" type="email" placeholder="tim@apple.com" />
          </div>
          <div className="grid items-center w-full gap-2">
            <Label htmlFor="email">Input with label</Label>
            <Input id="email" type="email" placeholder="tim@apple.com" disabled />
          </div>
        </div>
        <div className="flex flex-row gap-4 w-full">
          <div className="grid items-center w-full gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <div className="grid items-center w-full gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" disabled />
          </div>
        </div>
        <div className="flex flex-row gap-4 w-full">
          <div className="grid items-center w-full gap-2">
            <Label htmlFor="picture">File Input</Label>
            <Input id="picture" type="file" />
          </div>
          <div className="grid items-center w-full gap-2">
            <Label htmlFor="picture">File Input</Label>
            <Input id="picture" type="file" disabled />
          </div>
        </div>
        <div className="flex flex-row gap-4 w-full">
          <div className="grid w-full gap-2">
            <Label htmlFor="text">Textarea</Label>
            <Textarea className="resize-none" id="text" />
          </div>
          <div className="grid w-full gap-2">
            <Label htmlFor="text">Textarea</Label>
            <Textarea value={textAreaDemoText} id="text" disabled />
          </div>
        </div>
        <div className="flex flex-row gap-4 w-full">
          <div className="flex items-center w-full gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Checkbox</Label>
          </div>
          <div className="flex items-center w-full gap-2">
            <Checkbox id="terms" disabled />
            <Label htmlFor="terms">Checkbox</Label>
          </div>
        </div>
        <div className="flex flex-row gap-4 w-full">
          <div className="flex items-center w-full gap-2">
            <Checkbox id="terms" checked />
            <Label htmlFor="terms">Checkbox</Label>
          </div>
          <div className="flex items-center w-full gap-2">
            <Checkbox id="terms" checked disabled />
            <Label htmlFor="terms">Checkbox</Label>
          </div>
        </div>
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
    </section>
  );
}

export { App };
