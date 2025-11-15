import { Checkbox } from "orphos/checkbox";
import { Label } from "orphos/label";

export function CheckboxDemo() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full flex-row gap-4">
        <div className="flex w-full items-center gap-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Checkbox</Label>
        </div>
        <div className="flex w-full items-center gap-2">
          <Checkbox id="terms-disabled" disabled />
          <Label htmlFor="terms-disabled">Checkbox</Label>
        </div>
      </div>
      <div className="flex w-full flex-row gap-4">
        <div className="flex w-full items-center gap-2">
          <Checkbox indeterminate id="terms-indeterminate" />
          <Label htmlFor="terms-indeterminate">Checkbox</Label>
        </div>
        <div className="flex w-full items-center gap-2">
          <Checkbox indeterminate id="terms-indeterminate-disabled" disabled />
          <Label htmlFor="terms-indeterminate-disabled">Checkbox</Label>
        </div>
      </div>
      <div className="flex w-full flex-row gap-4">
        <div className="flex w-full items-center gap-2">
          <Checkbox id="terms-checked" defaultChecked />
          <Label htmlFor="terms-checked">Checkbox</Label>
        </div>
        <div className="flex w-full items-center gap-2">
          <Checkbox id="terms-checked-disabled" defaultChecked disabled />
          <Label htmlFor="terms-checked-disabled">Checkbox</Label>
        </div>
      </div>
    </div>
  );
}
