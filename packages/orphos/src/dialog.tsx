"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { IconX } from "@tabler/icons-react";
import type * as React from "react";
import type { DivElementProps } from "./types";
import { typographyVariants } from "./typography";
import { cn } from "./utils";
import { Button } from "./button";

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Backdrop>) {
  return (
    <DialogPrimitive.Backdrop
      data-slot="dialog-overlay"
      className={cn(
        "data-closed:fade-out-0 data-open:fade-in-0 fixed inset-0 z-50 bg-background/60 data-closed:animate-out data-open:animate-in",
        className
      )}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Popup>) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />

      <DialogPrimitive.Popup
        data-slot="dialog-content"
        className={cn(
          "fixed z-50 grid w-full bg-background text-popover-foreground sm:max-w-[calc(100%-2rem)]",
          "gap-4 rounded-2xl border-t outline-none duration-150 sm:max-w-lg sm:scale-[calc(1-0.1*var(--nested-dialogs))] sm:border",
          "fixed bottom-0 w-full sm:top-[50%] sm:bottom-auto sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%]",
          "duration-150",
          "data-closed:fade-out-0 data-closed:zoom-out-95 data-closed:animate-out",
          "data-open:fade-in-0 data-open:zoom-in-95 data-open:animate-in",
          className
        )}
        {...props}>
        {children}
      </DialogPrimitive.Popup>
    </DialogPortal>
  );
}

function DialogHeader({
  className,
  showCloseButton = true,
  children,
  ...props
}: DivElementProps & {
  showCloseButton?: boolean;
}) {
  return (
    <div
      data-slot="dialog-header"
      className={cn(
        "flex flex-col gap-1.5 border-b border-b-border-subtle p-4 text-left",
        className
      )}
      {...props}>
      {showCloseButton && (
        <DialogPrimitive.Close
          render={<Button variant="ghost" size="icon-sm" />}
          data-slot="dialog-close"
          className="absolute end-3 top-2.5">
          <IconX />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      )}
      {children}
    </div>
  );
}

function DialogFooter({ className, ...props }: DivElementProps) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex xs:flex-row flex-col-reverse xs:justify-end gap-1.5 border-t border-t-border-subtle p-4",
        className
      )}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        typographyVariants({
          variant: "strong",
          className: "mt-0 leading-none",
        }),
        className
      )}
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
      className={cn("text-foreground-subtle text-sm", className)}
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
