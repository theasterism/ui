"use client";

import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { Toaster as Sonner, type ToasterProps, toast } from "sonner";
import { Spinner } from "./spinner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      style={{
        // @ts-expect-error shut up!
        "--border-radius": "var(--radius)",
      }}
      toastOptions={{
        style: {
          boxShadow: "none",
        },
        classNames: {
          toast:
            "border! border-border-subtle! bg-background-subtle! text-foreground! rounded-md! p-3!",
          description: "text-foreground-subtle!",
          actionButton:
            "bg-primary! hover:bg-primary-hover! text-primary-foreground! rounded-sm!",
          cancelButton:
            "bg-white! hover:bg-background-element-hover! rounded-sm! border! border-border-subtle! hover:border-border-element-hover! text-foreground-subtle!",
        },
      }}
      {...props}
      icons={{
        success: <CheckCircleIcon className="size-4.5! text-success!" />,
        info: <InformationCircleIcon className="size-4.5! text-info!" />,
        warning: (
          <ExclamationTriangleIcon className="size-4.5! text-warning-hover!" />
        ),
        error: <ExclamationCircleIcon className="size-4.5! text-danger!" />,
        loading: <Spinner className="size-4! text-foreground-subtle!" />,
      }}
    />
  );
};

export { Toaster, toast };
