"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        duration: Infinity,
        unstyled: true,
        classNames: {
          toast: "bg-background p-3.5 rounded-md border-[0.5px] border-border-element",
          title: "text-base font-medium! text-foreground!",
          description: "text-[12px]! text-foreground-subtle!",
          actionButton: "px-3 h-7 text-sm bg-primary-solid rounded-sm",
          cancelButton: "px-3 h-7 text-sm bg-background-element! rounded-sm",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
