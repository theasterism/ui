import { Button } from "@theanalog/orphos/button";
import { toast } from "@theanalog/orphos/toast";

export function ToastDemo() {
  return (
    <Button
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
          cancel: {
            label: "Cancel",
            onClick: () => console.log("Cancel!"),
          },
        })
      }
    >
      Show Toast
    </Button>
  );
}
