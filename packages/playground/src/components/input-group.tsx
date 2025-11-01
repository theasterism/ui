import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "orphos/dropdown-menu"
import { ArrowUpIcon, CheckIcon, InformationCircleIcon, MagnifyingGlassIcon, PlusIcon } from "orphos/icons"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "orphos/input-group"
import { Separator } from "orphos/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from "orphos/tooltip"

export function InputGroupDemo() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <MagnifyingGlassIcon />
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
                <InformationCircleIcon />
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
          <InputGroupButton
            variant="secondary"
            className="rounded-full"
            size="icon-xs"
          >
            <PlusIcon />
          </InputGroupButton>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton variant="secondary">Auto</InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              align="start"
              className="[--radius:0.95rem]"
            >
              <DropdownMenuItem>Auto</DropdownMenuItem>
              <DropdownMenuItem>Agent</DropdownMenuItem>
              <DropdownMenuItem>Manual</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <InputGroupText className="ml-auto">52% used</InputGroupText>
          <Separator orientation="vertical" className="h-4!" />
          <InputGroupButton
            className="rounded-full"
            size="icon-xs"
            disabled
          >
            <ArrowUpIcon />
            <span className="sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="@shadcn" />
        <InputGroupAddon align="inline-end">
          <div className="bg-primary text-primary-foreground flex size-4 items-center justify-center rounded-full">
            <CheckIcon className="size-3" />
          </div>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
