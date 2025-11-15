import { Button } from "orphos/button";
import { toast } from "orphos/toast";

export function ToastDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button
        onClick={() =>
          toast.add({
            title: "Here is your toast.",
          })
        }>
        Default
      </Button>
      <Button
        onClick={() => {
          toast.add({
            title: "Default toast",
            description: "With a description and an icon",
          });
        }}>
        With description
      </Button>
      <Button
        onClick={() => {
          toast.add({
            title: "Event has been created.",
            type: "success",
          });
        }}>
        Success
      </Button>
      <Button
        onClick={() => {
          toast.add({
            title: "Be at the area 10 minutes before the event time.",
            type: "info",
          });
        }}>
        Info
      </Button>
      <Button
        onClick={() => {
          toast.add({
            title: "Event start time cannot be earlier than 8am.",
            type: "warning",
          });
        }}>
        Warning
      </Button>
      <Button
        onClick={() => {
          toast.add({
            title: "Event has not been created.",
            type: "error",
          });
        }}>
        Error
      </Button>
      <Button
        onClick={() => {
          const id = toast.add({
            title: "Event hav been created.",
            actionProps: {
              children: "Undo",
              onClick: () => {
                toast.close(id);
                toast.add({
                  title: "Action undone",
                  description: "The action has been reverted.",
                  type: "info",
                });
              },
            },
          });
        }}>
        Action
      </Button>
      <Button
        onClick={() => {
          toast.promise(
            new Promise<string>((resolve, reject) => {
              const shouldSucceed = Math.random() > 0.3;
              setTimeout(() => {
                if (shouldSucceed) {
                  resolve("Data loaded successfully");
                } else {
                  reject(new Error("Failed to load data"));
                }
              }, 2000);
            }),
            {
              loading: {
                title: "Loading…",
                description: "The promise is loading.",
              },
              success: (data: string) => ({
                title: "This is a success toast!",
                description: `Success: ${data}`,
              }),
              error: () => ({
                title: "Something went wrong",
                description: "Please try again.",
              }),
            }
          );
        }}>
        Promise
      </Button>
    </div>
  );
}
