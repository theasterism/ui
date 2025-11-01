import { Button } from "orphos/button";
import { Kbd, KbdGroup } from "orphos/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipPositioner,
  TooltipProvider,
  TooltipTrigger,
} from "orphos/tooltip";

export function KbdTooltip() {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-4">
        <Tooltip>
          <TooltipTrigger>
            <Button variant="secondary" size="sm">Save</Button>
          </TooltipTrigger>
          <TooltipPositioner>
            <TooltipContent>
              <div className="flex items-center gap-2">
                Save Changes <Kbd>S</Kbd>
              </div>
            </TooltipContent>
          </TooltipPositioner>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Button variant="secondary" size="sm">Print</Button>
          </TooltipTrigger>
          <TooltipPositioner>
            <TooltipContent>
              <div className="flex items-center gap-2">
                Print Document{" "}
                <KbdGroup>
                  <Kbd>Ctrl</Kbd>
                  <Kbd>P</Kbd>
                </KbdGroup>
              </div>
            </TooltipContent>
          </TooltipPositioner>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
