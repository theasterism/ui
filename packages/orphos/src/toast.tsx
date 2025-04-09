"use client";

import { Cross1Icon } from "@radix-ui/react-icons";
import * as ToastPrimitives from "@radix-ui/react-toast";
import React from "react";
import { cn } from "./utils";

const ToastProvider = ToastPrimitives.Provider;
ToastProvider.displayName = "ToastProvider";

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, forwardedRef) => (
  <ToastPrimitives.Viewport
    ref={forwardedRef}
    className={cn(
      "fixed right-0 bottom-0 z-[9999] m-0 flex w-full max-w-[100vw] list-none flex-col gap-2 p-[var(--viewport-padding)] [--viewport-padding:_24px] xs:max-w-sm sm:gap-4",
      className
    )}
    {...props}
  />
));

ToastViewport.displayName = "ToastViewport";

interface ActionProps {
  label: string;
  altText: string;
  onClick: () => void | Promise<void>;
}

interface ToastProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> {
  variant?: "default" | "success" | "warning" | "error";
  message?: string;
  action?: ActionProps;
}

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  ToastProps
>(
  (
    { className, variant, message, action, ...props }: ToastProps,
    forwardedRef
  ) => {
    return (
      <ToastPrimitives.Root
        ref={forwardedRef}
        className={cn(
          "flex items-center justify-bettween max-h-[63px] p-4 h-fit w-full overflow-hidden rounded-lg border bg-background-subtle border-border-element",
          // swipe
          "data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none",
          // transition
          "data-[state=open]:animate-slideLeftAndFade",
          "data-[state=closed]:animate-hide",
          className
        )}
        {...props}>
        <ToastPrimitives.Description className="w-full text-sm leading-7 text-foreground">
          {message}
        </ToastPrimitives.Description>
        <div className="flex flex-col w-fit">
          {action && (
            <>
              <ToastPrimitives.Action
                altText={action.altText}
                className={cn(
                  // base
                  "flex flex-1 items-center justify-center px-6 text-sm font-semibold transition-colors",
                  // hover
                  "hover:bg-gray-50 hover:dark:bg-gray-900/30",
                  // text color
                  "text-gray-800 dark:text-gray-100",
                  // active
                  "active:bg-gray-100 active:dark:bg-gray-800",
                  {
                    "text-red-600 dark:text-red-500": variant === "error",
                  }
                )}
                onClick={(event) => {
                  event.preventDefault();
                  action.onClick();
                }}
                type="button">
                {action.label}
              </ToastPrimitives.Action>
              <div className="h-px w-full bg-gray-200 dark:bg-gray-800" />
            </>
          )}
          <ToastPrimitives.Close
            className={cn(
              "flex items-center justify-center rounded-md p-2 text-sm size-8 transition-colors",
              "hover:bg-background-element-hover",
              "active:bg-background-element-active"
            )}
            aria-label="Close">
            <Cross1Icon className="stroke-2" />
          </ToastPrimitives.Close>
        </div>
      </ToastPrimitives.Root>
    );
  }
);
Toast.displayName = "Toast";

type ToastActionElement = ActionProps;

export {
  Toast,
  ToastProvider,
  ToastViewport,
  type ToastActionElement,
  type ToastProps,
};
