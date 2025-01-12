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
          toast:
            "bg-background dark:bg-background-subtle shadow-[inset_0px_0.5px_0px_rgb(208_205_215),_inset_0px_0px_0px_0.5px_rgb(208_205_215)] dark:shadow-[inset_0px_1px_0px_rgb(255_255_255_/_0.04),_inset_0px_0px_0px_1px_rgb(255_255_255_/_0.02)] p-3.5 rounded-md grid grid-cols-3 gap-2",
          content: "col-span-3",
          title: "text-base font-medium! text-foreground!",
          description: "text-[12px]! text-foreground-subtle!",
          actionButton: "px-3 h-7 text-sm bg-primary-solid rounded-sm text-white w-full",
          cancelButton: "px-3 h-7 text-sm bg-background-element! rounded-sm w-full",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
