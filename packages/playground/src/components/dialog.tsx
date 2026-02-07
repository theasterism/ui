import { Button, buttonVariants } from "orphos/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "orphos/dialog";
import { Input } from "orphos/input";
import { Label } from "orphos/label";
import { cn } from "orphos/utils";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button>Edit Profile</Button>}></DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
        </DialogHeader>
        <div className="px-4">
          <ProfileForm />
        </div>
        <DialogFooter>
          <DialogClose className={cn(buttonVariants({}))}>Close</DialogClose>
          <Button variant="primary" type="submit">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="grid gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input id="name" value="Pedro Duarte" className="col-span-3" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="username">Username</Label>
        <Input id="username" value="@peduarte" className="col-span-3" />
      </div>
    </div>
  );
}
