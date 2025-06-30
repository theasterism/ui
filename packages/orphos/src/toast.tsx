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
      toastOptions={{
        style: {
          boxShadow: "none",
        },
        classNames: {
          toast:
            "border-0! inset-ring-1! inset-ring-border-element! bg-background-element! text-foreground! rounded-md!",
          description: "text-foreground-subtle!",
          actionButton:
            "bg-primary! hover:bg-primary-hover! text-primary-foreground!",
          cancelButton:
            "bg-transparent! hover:bg-background-element-hover! inset-ring-1 inset-ring-border-element! hover:inset-ring-border-element-hover! text-foreground-subtle!",
        },
      }}
      {...props}
      icons={{
        success: <CheckCircleIcon className="size-5! text-success!" />,
        info: <InformationCircleIcon className="size-5! text-info!" />,
        warning: (
          <ExclamationTriangleIcon className="size-5! text-warning-hover!" />
        ),
        error: <ExclamationCircleIcon className="size-5! text-danger!" />,
        loading: <Spinner className="size-5! text-foreground-subtle!" />,
      }}
    />
  );
};

export { Toaster, toast };
