import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { cva, type VariantProps } from "cva";
import * as React from "react";
import { cn } from "./utils";

const inputVariants = cva({
  base: "no-drag flex h-8.5 w-full items-center rounded-md border border-border-element bg-white px-3 py-2 text-foreground text-sm outline-offset-[-1px] transition-[color,box-shadow] placeholder:text-sm hover:border-border-element-hover focus-visible:outline disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:outline aria-invalid:outline-danger",
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

export interface InputProps
  extends React.ComponentProps<"input">,
    VariantProps<typeof inputVariants> {
  icon?: React.ReactNode;
}

function Input({ className, type, icon, disabled, ...props }: InputProps) {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  if (type === "password") {
    const toggleVisibility = () => setIsVisible((prevState) => !prevState);

    return (
      <div className="relative">
        <input
          disabled={disabled}
          data-slot="input"
          className={cn(
            inputVariants({ variant: "password", className }),
            "peer-focus-visible:border-transparent",
            "pr-9! pl-3!"
          )}
          type={isVisible ? "text" : "password"}
          {...props}
        />
        <button
          disabled={disabled}
          className="peer before:-inset-[7px] absolute inset-y-0 end-0 mt-[7.5px] mr-3 flex size-5 items-center justify-center text-foreground-subtle ring-focus-ring ring-offset-1 ring-offset-transparent transition-colors before:absolute hover:text-foreground focus:z-10 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
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
            inputVariants({ variant: "default", className }),
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
      className={cn(inputVariants({ variant: "default", className }))}
      type={type}
      {...props}
    />
  );
}

export { Input };
