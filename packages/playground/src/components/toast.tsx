import { Button } from "orphos/button";
import { toast } from "orphos/toast";

export function ToastDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button onClick={() => toast("Here is your toast.")}>Default</Button>
      <Button
        variant="secondary"
        onClick={() => {
          toast("Default toast", {
            description: "With a description and an icon",
          });
        }}>
        With description
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          toast.success("Event has been created.");
        }}>
        Success
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          toast.info("Be at the area 10 minutes before the event time.");
        }}>
        Info
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          toast.warning("Event start time cannot be earlier than 8am.");
        }}>
        Warning
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          toast.error("Event has not been created.");
        }}>
        Error
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          toast("Event has been created.", {
            action: {
              label: "Undo",
              onClick: () => console.log("Action!"),
            },
          });
        }}>
        Action
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          toast("Event has been created.", {
            cancel: {
              label: "Cancel",
              onClick: () => console.log("Cancel!"),
            },
          });
        }}>
        Cancel
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          const myPromise = new Promise<{ name: string }>((resolve) => {
            setTimeout(() => {
              resolve({ name: "Promise" });
            }, 3000);
          });

          toast.promise(myPromise, {
            loading: "Loading...",
            success: (data: { name: string }) => {
              return `${data.name} toast has been added`;
            },
            error: "Error",
          });
        }}>
        Promise
      </Button>
    </div>
  );
}
