import { Button } from "@theanalog/orphos/button";
import { toast } from "@theanalog/orphos/hooks/use-toast";

export function ToastDemo() {
  return (
    <div className="flex gap-2">
      <div className="flex gap-2.5">
        <Button
          className="mx-auto flex"
          onClick={() =>
            toast({
              message: "Here is your toast.",
            })
          }>
          Make me a toast
        </Button>
      </div>
    </div>
  );
}
