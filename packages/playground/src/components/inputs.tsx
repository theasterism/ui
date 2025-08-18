import { FileUpload } from "orphos/file-upload";
import { Input } from "orphos/input";
import { Label } from "orphos/label";
import { Textarea } from "orphos/textarea";

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
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full xs:flex-row flex-col gap-4">
        <Input type="email" placeholder="tim@apple.com" />
        <Input type="email-disabled" placeholder="tim@apple.com" disabled />
      </div>
      <div className="flex w-full xs:flex-row flex-col gap-4">
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="email-label">Input with label</Label>
          <Input id="email-label" type="email" placeholder="tim@apple.com" />
        </div>
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="email-label-disabled">Input with label</Label>
          <Input
            id="email-label-disabled"
            type="email"
            placeholder="tim@apple.com"
            disabled
          />
        </div>
      </div>
      <div className="flex w-full xs:flex-row flex-col gap-4">
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="password-disabled">Password</Label>
          <Input id="password-disabled" type="password" disabled />
        </div>
      </div>
      <div className="flex w-full xs:flex-row flex-col gap-4">
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="file">File Input</Label>
          <FileUpload id="file" />
        </div>
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="file-disabled">File Input</Label>
          <FileUpload id="file-disabled" disabled />
        </div>
      </div>
      <div className="flex w-full xs:flex-row flex-col gap-4">
        <div className="grid w-full gap-2">
          <Label htmlFor="text">Textarea</Label>
          <Textarea className="h-32 resize-none" id="text" />
        </div>
        <div className="grid w-full gap-2">
          <Label htmlFor="text-disabled">Textarea</Label>
          <Textarea
            value={textAreaDemoText}
            id="text-disabled"
            className="h-32"
            disabled
          />
        </div>
      </div>
    </div>
  );
}
