"use client";

import { useToast } from "./hooks/use-toast";
import { Toast, ToastProvider, ToastViewport } from "./toast";

function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider swipeDirection="right">
      {toasts.map(({ id, ...props }) => {
        return <Toast key={id} {...props} />;
      })}
      <ToastViewport />
    </ToastProvider>
  );
}

export { Toaster };
