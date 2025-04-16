"use client";

import {
  ArrowPathIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { Toaster as Sonner, type ToasterProps, toast } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--color-background-element)",
          "--normal-text": "var(--color-foreground)",
          "": "",
        } as React.CSSProperties
      }
      toastOptions={{
        style: {
          boxShadow: "none",
        },
        classNames: {
          toast: "border-border-element/60! rounded-md!",
          description: "text-foreground-subtle!",
          actionButton:
            "border! border-border-element/60! bg-background-subtle! text-foreground!",
          cancelButton: "bg-background! text-foreground!",
        },
        duration: Infinity,
      }}
      {...props}
      icons={{
        success: <CheckCircleIcon className="size-5! text-success!" />,
        info: <InformationCircleIcon className="size-5! text-info!" />,
        warning: (
          <ExclamationTriangleIcon className="size-5! text-warning-hover!" />
        ),
        error: <ExclamationCircleIcon className="size-5! text-danger!" />,
        loading: (
          <ArrowPathIcon className="size-5! animate-spin text-foreground-subtle!" />
        ),
      }}
    />
  );
};

export { Toaster, toast };
