import { Button, buttonVariants } from "orphos/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
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
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
        </DialogHeader>
        <ProfileForm />
        <DialogFooter>
          <DialogClose className={cn(buttonVariants({
            variant: "secondary"
          }))}>Close</DialogClose>
          <Button type="submit">
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
