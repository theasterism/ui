import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "orphos/dropdown-menu";
import {
  IconCheck,
  IconInfoCircle,
  IconPlug,
  IconSearch,
  IconSend,
} from "@tabler/icons-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "orphos/input-group";
import { Separator } from "orphos/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from "orphos/tooltip";

export function InputGroupDemo() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <IconSearch />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="example.com" className="pl-1!" />
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger>
              <InputGroupButton className="rounded-full" size="icon-xs">
                <IconInfoCircle className="size-3.5" />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipPositioner>
              <TooltipContent>This is content in a tooltip.</TooltipContent>
            </TooltipPositioner>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Ask, Search or Chat..." />
        <InputGroupAddon align="block-end">
          <InputGroupButton className="rounded-full" size="icon-xs">
            <IconPlug className="size-3.5" />
          </InputGroupButton>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<InputGroupButton size="xs">Auto</InputGroupButton>}
            />
            <DropdownMenuContent
              side="top"
              align="start"
              className="[--radius:0.95rem]">
              <DropdownMenuItem>Auto</DropdownMenuItem>
              <DropdownMenuItem>Agent</DropdownMenuItem>
              <DropdownMenuItem>Manual</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <InputGroupText className="ml-auto">52% used</InputGroupText>
          <Separator orientation="vertical" className="h-4!" />
          <InputGroupButton className="rounded-full" size="icon-xs" disabled>
            <IconSend className="mt-px mr-px size-3" />
            <span className="sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="@shadcn" />
        <InputGroupAddon align="inline-end">
          <div className="flex size-4 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <IconCheck className="size-2.5" />
          </div>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
