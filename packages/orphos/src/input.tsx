import { type VariantProps, cva } from "class-variance-authority";
import { Eye, EyeClosed } from "iconoir-react";
import * as React from "react";
import type { FieldError } from "react-hook-form";
import { cn } from "./lib/utils";

const inputVariants = cva(
  "flex h-9 w-full bg-background-subtle dark:bg-background rounded-md border border-element-border focus-visible:border-transparent focus-visible:ring-2 dark:focus-visible:ring-offset-background focus-visible:ring-info-focus-ring focus-visible:outline-none px-3 py-1 text-base transition-all placeholder:text-foreground-subtle placeholder:text-sm disabled:cursor-not-allowed disabled:placeholder:text-foreground-subtle/50 disabled:text-foreground-subtle disabled:bg-background-element md:text-sm",
  {
    variants: {
      variant: {
        default: "",
        file: "file:h-full file:border-solid file:border-element-border file:bg-background-element file:px-3 overflow-hidden file:text-sm file:font-medium file:not-italic file:text-foreground p-0 pe-3 file:me-3 file:border-0 file:border-e file:border-e-border-subtle disabled:cursor-not-allowed disabled:placeholder:text-foreground-subtle/50 disabled:bg-background-subtle disabled:file:text-foreground-subtle/50 disabled:text-foreground-subtle/50",
        password: "pe-9",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface InputProps extends React.ComponentProps<"input">, VariantProps<typeof inputVariants> {
  icon?: React.ReactNode;
  error: FieldError | undefined;
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
          className="absolute mr-1.5 mt-1.5 inset-y-0 end-0 flex size-6 items-center justify-center rounded-[3.5px] text-foreground-subtle transition-colors peer hover:text-foreground focus:z-10 focus-visible:ring-2 focus-visible:ring-offset-transparent focus-visible:ring-offset-1 focus-visible:ring-info-focus-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
          type="button"
          onClick={toggleVisibility}
          aria-label={isVisible ? "Hide password" : "Show password"}
          aria-pressed={isVisible}
          aria-controls="password"
        >
          {isVisible ? (
            <EyeClosed className="size-4 stroke-2" aria-hidden="true" />
          ) : (
            <Eye className="size-4 stroke-2" aria-hidden="true" />
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
          className={cn(inputVariants({ variant, className }), error && "border-danger-element-border", "peer ps-9")}
          ref={ref}
          {...props}
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          {icon}
        </div>
      </div>
    );

  return (
    <input
      disabled={disabled}
      type={type}
      className={cn(inputVariants({ variant, className }), error && "border-danger-element-border")}
      ref={ref}
      {...props}
    />
  );
};

Input.displayName = "Input";

export { Input };
