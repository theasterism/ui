import { Label } from "@theanalog/orphos/label";
import { RadioGroup, RadioGroupItem } from "@theanalog/orphos/radio-group";
import { Fragment } from "react";

export default function RadioDemo() {
  return (
    <Fragment>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-row gap-4 w-full">
          <RadioGroup defaultValue="option-2" className="w-full">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-1" id="r1" />
              <Label htmlFor="r1">Option 1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-2" id="r2" />
              <Label htmlFor="r2">Option 2</Label>
            </div>
          </RadioGroup>
          <RadioGroup defaultValue="option-3" className="w-full" disabled>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-3" id="r3" />
              <Label htmlFor="r3">Option 3</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-4" id="r4" />
              <Label htmlFor="r4">Option 4</Label>
            </div>
          </RadioGroup>
        </div>
        <RadioGroup defaultValue="option-6" className="flex flex-row w-full">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-5" id="r5" />
            <Label htmlFor="r5">Option 5</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-6" id="r6" />
            <Label htmlFor="r6">Option 6</Label>
          </div>
        </RadioGroup>
      </div>
    </Fragment>
  );
}
