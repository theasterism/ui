"use client";

import {
  CheckCircledIcon,
  Cross2Icon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import { Toaster as Sonner, type ToasterProps, toast } from "sonner";
import { SpinnerIcon } from "./icons";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--color-background-element)",
          "--normal-text": "var(--color-foreground)",
          "--": "",
        } as React.CSSProperties
      }
      toastOptions={{
        style: {
          boxShadow: "none",
        },
        classNames: {
          toast: "border-border-element/60!",
          description: "text-foreground-subtle!",
          actionButton:
            "border! border-border-element/60! bg-background-subtle! text-foreground!",
          cancelButton: "bg-solid! text-foreground!",
          closeButton: "bg-solid! text-foreground! border-0!",
        },
      }}
      {...props}
      icons={{
        success: <CheckCircledIcon className="text-success! size-4!" />,
        info: <InfoCircledIcon className="text-foreground-subtle! size-4!" />,
        warning: (
          <ExclamationTriangleIcon className="text-warning-element-foreground! size-4!" />
        ),
        error: <ExclamationTriangleIcon className="text-danger! size-4!" />,
        close: <Cross2Icon className="text-foreground-subtle!" />,
        loading: <SpinnerIcon className="text-foreground! size-4!" />,
      }}
    />
  );
};

export { Toaster, toast };
