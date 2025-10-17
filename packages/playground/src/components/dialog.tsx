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
      <DialogTrigger asChild>
        <Button>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="gap-6 sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Edit profile</DialogTitle>
          </div>
        </DialogHeader>
        <ProfileForm />
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
    <div className={cn("flex flex-col gap-4 px-4", className)}>
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
