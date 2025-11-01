import type * as React from "react";
import { ChevronDownIcon } from "./icons";
import { cn } from "./utils";

function Select({ className, ...props }: React.ComponentProps<"select">) {
  return (
    <div
      className="group/native-select relative w-fit has-[select:disabled]:opacity-50"
      data-slot="native-select-wrapper">
      <select
        data-slot="native-select"
        className={cn(
          "h-8.5 w-full min-w-0 appearance-none rounded-md border border-border-element bg-white px-3 pr-8.5 text-sm -outline-offset-1 transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed",
          "focus-visible:outline-2",
          "aria-invalid:outline-2 aria-invalid:outline-danger",
          className
        )}
        {...props}
      />
      <ChevronDownIcon
        className="-translate-y-1/2 pointer-events-none absolute top-1/2 right-2.5 size-4 select-none text-foreground-subtle opacity-50"
        aria-hidden="true"
        data-slot="native-select-icon"
      />
    </div>
  );
}

function SelectOption({ ...props }: React.ComponentProps<"option">) {
  return <option data-slot="native-select-option" {...props} />;
}

function SelectOptGroup({
  className,
  ...props
}: React.ComponentProps<"optgroup">) {
  return (
    <optgroup
      data-slot="native-select-optgroup"
      className={cn(className)}
      {...props}
    />
  );
}

export { Select, SelectOptGroup, SelectOption };
