"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { IconX } from "@tabler/icons-react";
import type * as React from "react";
import { Button } from "./button";
import type { DivElementProps } from "./types";
import { cn } from "./utils";

function Dialog({ ...props }: DialogPrimitive.Root.Props) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({ ...props }: DialogPrimitive.Trigger.Props) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({ ...props }: DialogPrimitive.Portal.Props) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({ ...props }: DialogPrimitive.Close.Props) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
  className,
  ...props
}: DialogPrimitive.Backdrop.Props) {
  return (
    <DialogPrimitive.Backdrop
      data-slot="dialog-overlay"
      className={cn(
        "data-closed:fade-out-0 data-open:fade-in-0 fixed inset-0 isolate z-50 bg-black/10 duration-100 data-closed:animate-out data-open:animate-in supports-backdrop-filter:backdrop-blur-xs",
        className
      )}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogPrimitive.Popup.Props & { showCloseButton?: boolean }) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Popup
        data-slot="dialog-content"
        className={cn(
          "fixed z-50 grid w-full max-w-[calc(100%-2rem)] bg-background-element text-popover-foreground",
          "gap-4 rounded-2xl p-4 outline-none ring ring-border-subtle duration-100 sm:max-w-xl",
          "fixed top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2",
          "data-closed:fade-out-0 data-closed:zoom-out-95 data-closed:animate-out",
          "data-open:fade-in-0 data-open:zoom-in-95 data-open:animate-in",
          className
        )}
        {...props}>
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                className="absolute top-2.5 right-2.5">
                <IconX />
                <span className="sr-only">Close</span>
              </Button>
            }
            data-slot="dialog-close"
          />
        )}
      </DialogPrimitive.Popup>
    </DialogPortal>
  );
}

function DialogHeader({ className, children, ...props }: DivElementProps) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-1", className)}
      {...props}>
      {children}
    </div>
  );
}

function DialogFooter({
  className,
  children,
  showCloseButton = false,
  ...props
}: DivElementProps & {
  showCloseButton?: boolean;
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}>
      {showCloseButton && (
        <DialogPrimitive.Close render={<Button>Close</Button>} />
      )}
      {children}
    </div>
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("font-medium text-regular leading-none", className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        "text-foreground-subtle text-small *:[a]:text-info *:[a]:underline *:[a]:decoration-info-border *:[a]:underline-offset-3 *:[a]:hover:decoration-info",
        className
      )}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
