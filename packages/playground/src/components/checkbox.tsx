import { Checkbox } from "@theanalog/orphos/checkbox";
import { Label } from "@theanalog/orphos/label";
import { Switch } from "@theanalog/orphos/switch";
import { Fragment } from "react";
import RadioDemo from "./radio-group";

export function CheckboxDemo() {
  return (
    <Fragment>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-row gap-4 w-full">
          <div className="flex items-center w-full gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Checkbox</Label>
          </div>
          <div className="flex items-center w-full gap-2">
            <Checkbox id="terms-disabled" disabled />
            <Label htmlFor="terms-disabled">Checkbox</Label>
          </div>
        </div>
        <div className="flex flex-row gap-4 w-full">
          <div className="flex items-center w-full gap-2">
            <Checkbox id="terms-checked" defaultChecked />
            <Label htmlFor="terms-checked">Checkbox</Label>
          </div>
          <div className="flex items-center w-full gap-2">
            <Checkbox id="terms-checked-disabled" defaultChecked disabled />
            <Label htmlFor="terms-checked-disabled">Checkbox</Label>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-row gap-4 w-full">
          <div className="flex items-center w-full gap-2">
            <Switch id="switch" />
            <Label htmlFor="switch">Switch</Label>
          </div>
          <div className="flex items-center w-full gap-2">
            <Switch id="switch-disabled" disabled />
            <Label htmlFor="switch-disabled">Switch</Label>
          </div>
        </div>
        <div className="flex flex-row gap-4 w-full">
          <div className="flex items-center w-full gap-2">
            <Switch id="switch-checked" defaultChecked />
            <Label htmlFor="switch-checked">Switch</Label>
          </div>
          <div className="flex items-center w-full gap-2">
            <Switch id="switch-checked-disabled" defaultChecked disabled />
            <Label htmlFor="switch-checked-disabled">Switch</Label>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full gap-4">
        <RadioDemo />
      </div>
    </Fragment>
  );
}
