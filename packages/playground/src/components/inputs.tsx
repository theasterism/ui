import { Input } from "@theanalog/orphos/input";
import { Label } from "@theanalog/orphos/label";
import { Textarea } from "@theanalog/orphos/textarea";
import { Fragment } from "react";

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

export function InputsDemo() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-row gap-4 w-full">
        <Input error={undefined} type="email" placeholder="tim@apple.com" />
        <Input
          error={undefined}
          type="email-disabled"
          placeholder="tim@apple.com"
          disabled
        />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <div className="grid items-center w-full gap-2">
          <Label htmlFor="email-label">Input with label</Label>
          <Input
            error={undefined}
            id="email-label"
            type="email"
            placeholder="tim@apple.com"
          />
        </div>
        <div className="grid items-center w-full gap-2">
          <Label htmlFor="email-label-disabled">Input with label</Label>
          <Input
            error={undefined}
            id="email-label-disabled"
            type="email"
            placeholder="tim@apple.com"
            disabled
          />
        </div>
      </div>
      <div className="flex flex-row gap-4 w-full">
        <div className="grid items-center w-full gap-2">
          <Label htmlFor="password">Password</Label>
          <Input error={undefined} id="password" type="password" />
        </div>
        <div className="grid items-center w-full gap-2">
          <Label htmlFor="password-disabled">Password</Label>
          <Input
            error={undefined}
            id="password-disabled"
            type="password"
            disabled
          />
        </div>
      </div>
      <div className="flex flex-row gap-4 w-full">
        <div className="grid items-center w-full gap-2">
          <Label htmlFor="file">File Input</Label>
          <Input error={undefined} id="file" type="file" />
        </div>
        <div className="grid items-center w-full gap-2">
          <Label htmlFor="file-disabled">File Input</Label>
          <Input error={undefined} id="file-disabled" type="file" disabled />
        </div>
      </div>
      <div className="flex flex-row gap-4 w-full">
        <div className="grid w-full gap-2">
          <Label htmlFor="text">Textarea</Label>
          <Textarea error={undefined} className="resize-none" id="text" />
        </div>
        <div className="grid w-full gap-2">
          <Label htmlFor="text-disabled">Textarea</Label>
          <Textarea
            error={undefined}
            value={textAreaDemoText}
            id="text-disabled"
            disabled
          />
        </div>
      </div>
    </div>
  );
}
