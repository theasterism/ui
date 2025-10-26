import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "orphos/empty";
import { MagnifyingGlassIcon } from "orphos/icons";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "orphos/input-group";
import { Kbd } from "orphos/kbd";

export function EmptyInputGroup() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>404 - Not Found</EmptyTitle>
        <EmptyDescription>
          The page you&apos;re looking for doesn&apos;t exist. Try searching for
          what you need below.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <InputGroup className="sm:w-3/4">
          <InputGroupInput placeholder="Try searching for pages..." />
          <InputGroupAddon>
            <MagnifyingGlassIcon />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>/</Kbd>
          </InputGroupAddon>
        </InputGroup>
        <EmptyDescription>
          Need help? <a href="#">Contact support</a>
        </EmptyDescription>
      </EmptyContent>
    </Empty>
  );
}
