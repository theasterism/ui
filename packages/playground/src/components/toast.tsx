import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@theanalog/orphos/button";
import { Toast, ToastAction, ToastDescription, ToastTitle, ToastViewport } from "@theanalog/orphos/toast";
import { useState } from "react";

export function ToastDemo() {
  const [open1, setOpen1] = useState(false);

  const [open2, setOpen2] = useState(false);
  return (
    <div className="flex gap-2">
      <div className="flex gap-2.5">
        <Button
          onClick={() => {
            setOpen1(true);
          }}
        >
          Normal Toast
        </Button>
        <Toast open={open1} onOpenChange={setOpen1}>
          <ToastTitle className="ToastTitle">Scheduled: Catch up</ToastTitle>
          <ToastDescription>This is a description.</ToastDescription>

          <ToastAction className="ToastAction" asChild altText="Goto schedule to undo">
            <Button>Undo</Button>
          </ToastAction>
        </Toast>
        <ToastViewport />
      </div>
      <div className="flex gap-2.5">
        <Button
          onClick={() => {
            setOpen2(true);
          }}
        >
          Destructive Toast
        </Button>
        <Toast variant="danger" open={open2} onOpenChange={setOpen2}>
          <ToastTitle className="ToastTitle">Scheduled: Catch up</ToastTitle>
          <ToastDescription>This is a description.</ToastDescription>

          <ToastAction className="ToastAction" asChild altText="Goto schedule to undo">
            <Button>Undo</Button>
          </ToastAction>
        </Toast>
        <ToastViewport />
      </div>
    </div>
  );
}
