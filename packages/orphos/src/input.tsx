import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { type VariantProps, cva } from "cva";
import * as React from "react";
import type { FieldError } from "react-hook-form";
import { cn } from "./lib/utils";

const inputVariants = cva({
  base: "flex text-sm h-[32px] w-full rounded-md border border-border-element bg-background py-2 pl-2 pr-8 no-drag transition-all focus-visible:border-transparent focus-visible:ring-2 ring-focus-ring focus-visible:outline-none placeholder:text-foreground-subtle placeholder:text-sm disabled:opacity-75 disabled:cursor-not-allowed disabled:placeholder:text-foreground-subtle/50 disabled:text-foreground-subtle",
  variants: {
    variant: {
      default: "",
      file: "text-sm file:h-full file:bg-background-element file:px-3 overflow-hidden file:text-xs file:font-medium file:not-italic file:text-foreground p-0 pe-3 file:me-3 file:border-0 file:border-e file:border-e-border-element/60 disabled:file:text-foreground-subtle/50",
      password: "pe-9",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface InputProps extends React.ComponentProps<"input">, VariantProps<typeof inputVariants> {
  icon?: React.ReactNode;
  error?: FieldError | undefined;
}

const Input = ({ className, type, ref, icon, error, disabled, ...props }: InputProps) => {
  const variant = type === "file" ? "file" : "default";

  if (type === "password") {
    const [isVisible, setIsVisible] = React.useState<boolean>(false);
    const toggleVisibility = () => setIsVisible((prevState) => !prevState);

    return (
      <div className="relative">
        <input
          disabled={disabled}
          className={cn(
            inputVariants({ variant, className }),
            error && "border-danger-element-border",
            "peer-focus-visible:border-transparent",
          )}
          type={isVisible ? "text" : "password"}
          ref={ref}
          {...props}
        />
        <button
          disabled={disabled}
          className="absolute mr-2 mt-1.5 inset-y-0 end-0 flex size-5 items-center justify-center rounded-xs text-foreground-subtle transition-colors peer hover:text-foreground focus:z-10 focus-visible:ring-1 ring-offset-transparent ring-offset-1 ring-focus-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
          type="button"
          onClick={toggleVisibility}
          aria-label={isVisible ? "Hide password" : "Show password"}
          aria-pressed={isVisible}
          aria-controls="password"
        >
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
          type={type}
          className={cn(
            inputVariants({ variant, className }),
            error &&
              "border-danger-border ring-3 ring-danger-element focus-visible:ring-2 focus-visible:border-danger-border",
            "peer ps-9",
          )}
          ref={ref}
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
      type={type}
      className={cn(
        inputVariants({ variant, className }),
        error &&
          "border-danger-border ring-3 ring-danger-element focus-visible:ring-2 focus-visible:border-danger-border",
      )}
      ref={ref}
      {...props}
    />
  );
};

Input.displayName = "Input";

export { Input };
