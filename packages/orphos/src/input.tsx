import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { type VariantProps, cva } from "cva";
import * as React from "react";
import { cn } from "./utils";

const inputVariants = cva({
  base: "no-drag flex h-[32px] w-full rounded-md border border-border-element/75 bg-transparent py-2 pr-8 pl-2 text-foreground text-sm ring-focus-ring transition-all placeholder:text-foreground-subtle placeholder:text-sm focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:text-foreground-subtle disabled:opacity-75 disabled:placeholder:text-foreground-subtle/50 disabled:bg-background-element/50",
  variants: {
    variant: {
      default: "",
      file: "overflow-hidden p-0 pe-3 text-sm file:me-3 file:h-full file:border-e file:border-e-border-element/60 file:bg-background-element file:px-3 file:font-medium file:text-foreground file:text-xs file:not-italic disabled:file:text-foreground-subtle/70",
      password: "pe-9",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface InputProps
  extends React.ComponentProps<"input">,
    VariantProps<typeof inputVariants> {
  icon?: React.ReactNode;
  error?: string | undefined;
}

function Input({
  className,
  type,
  icon,
  error,
  disabled,
  ...props
}: InputProps) {
  const variant = type === "file" ? "file" : "default";

  if (type === "password") {
    const [isVisible, setIsVisible] = React.useState<boolean>(false);
    const toggleVisibility = () => setIsVisible((prevState) => !prevState);

    return (
      <div className="relative">
        <input
          disabled={disabled}
          data-slot="input"
          className={cn(
            inputVariants({ variant, className }),
            error &&
              "border-danger-border ring-3 ring-danger-surface/35 focus-visible:border-danger-border focus-visible:ring-3",
            "peer-focus-visible:border-transparent"
          )}
          type={isVisible ? "text" : "password"}
          {...props}
        />
        <button
          disabled={disabled}
          className="peer absolute inset-y-0 end-0 mt-1.5 mr-2 flex size-5 items-center justify-center rounded-sm text-foreground-subtle ring-focus-ring ring-offset-1 ring-offset-transparent transition-colors hover:text-foreground focus:z-10 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
          type="button"
          onClick={toggleVisibility}
          aria-label={isVisible ? "Hide password" : "Show password"}
          aria-pressed={isVisible}
          aria-controls="password">
          {isVisible ? (
            <EyeSlashIcon className="size-4 stroke-2" aria-hidden="true" />
          ) : (
            <EyeIcon className="size-4 stroke-2" aria-hidden="true" />
          )}
        </button>
      </div>
    );
  }

  if (icon)
    return (
      <div className="relative">
        <input
          disabled={disabled}
          data-slot="input"
          className={cn(
            inputVariants({ variant, className }),
            error &&
              "border-danger-border ring-3 ring-danger-surface/35 focus-visible:border-danger-border focus-visible:ring-3",
            "peer ps-9"
          )}
          type={type}
          {...props}
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-foreground-subtle/80 peer-disabled:opacity-50">
          {icon}
        </div>
      </div>
    );

  return (
    <input
      disabled={disabled}
      data-slot="input"
      className={cn(
        inputVariants({ variant, className }),
        error &&
          "border-danger-border ring-3 ring-danger-surface/35 focus-visible:border-danger-border focus-visible:ring-3"
      )}
      type={type}
      {...props}
    />
  );
}

export { Input };
