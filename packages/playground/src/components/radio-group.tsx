import { Label } from "orphos/label";
import { RadioGroup, RadioGroupItem } from "orphos/radio-group";

export default function RadioDemo() {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex w-full flex-row gap-4">
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
      <RadioGroup defaultValue="option-6" className="flex w-full flex-row">
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
  );
}
