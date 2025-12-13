import { Input as InputPrimitive } from "@base-ui/react/input";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { cva } from "cva";
import * as React from "react";
import { cn } from "./utils";

const inputVariants = cva({
  base: "no-drag -outline-offset-1 flex h-8.5 w-full items-center rounded-md border bg-background-element px-2.5 py-2 text-foreground text-sm transition-colors placeholder:text-foreground-subtle placeholder:text-sm focus-visible:outline-2 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:outline-2 aria-invalid:outline-danger",
  variants: {
    variant: {
      default: "",
      password: "pe-9",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface InputProps extends React.ComponentProps<"input"> {}

function Input({ className, type, disabled, ...props }: InputProps) {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const inputId = React.useId();

  if (type === "password") {
    const toggleVisibility = () => setIsVisible((prevState) => !prevState);

    return (
      <div className="relative">
        <InputPrimitive
          id={inputId}
          disabled={disabled}
          data-slot="input"
          className={cn(
            inputVariants({ variant: "password", className }),
            "peer-focus-visible:border-transparent",
            "pr-8.5! pl-2.5!"
          )}
          type={isVisible ? "text" : "password"}
          {...props}
        />
        <button
          disabled={disabled}
          className="peer before:-inset-[7px] absolute inset-y-0 end-0 mt-[7.5px] mr-2 flex size-5 items-center justify-center rounded-xs text-foreground-subtle outline-offset-1 transition-colors before:absolute hover:text-foreground focus:z-10 focus-visible:outline-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
          type="button"
          onClick={toggleVisibility}
          aria-label={isVisible ? "Hide password" : "Show password"}
          aria-pressed={isVisible}
          aria-controls={inputId}>
          {isVisible ? (
            <IconEyeOff className="size-4 stroke-2" aria-hidden="true" />
          ) : (
            <IconEye className="size-4 stroke-2" aria-hidden="true" />
          )}
        </button>
      </div>
    );
  }

  return (
    <InputPrimitive
      disabled={disabled}
      data-slot="input"
      className={cn(inputVariants({ variant: "default", className }))}
      type={type}
      {...props}
    />
  );
}

export { Input };
