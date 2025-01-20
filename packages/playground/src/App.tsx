import { Badge } from "@theanalog/orphos/badge";
import { Button } from "@theanalog/orphos/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@theanalog/orphos/card";
import { Separator } from "@theanalog/orphos/separator";
import { SidebarProvider, SidebarTrigger } from "@theanalog/orphos/sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@theanalog/orphos/tooltip";
import { AlertDialogDemo } from "./components/alert-dialog";
import { AvatarDemo } from "./components/avatar";
import { ButtonDisabledDemo, ButtonsDemo } from "./components/buttons";
import { CalloutDemo } from "./components/callout";
import { CheckboxDemo } from "./components/checkbox";
import { DialogDemo } from "./components/dialog";
import { DropdownDemo } from "./components/dropdown";
import { FormDemo } from "./components/form";
import { IconButtonDemo } from "./components/icon-button";
import { InputsDemo } from "./components/inputs";
import { ColorPalette } from "./components/pallete";
import { SheetSide } from "./components/sheet";
import { AppSidebar } from "./components/sidebar";
import { SkeletonDemo } from "./components/skeleton";
import { TabsDemo } from "./components/tabs";
import { ToastDemo } from "./components/toast";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <section className="flex flex-col mx-auto grow w-full shrink basis-[0] gap-20 px-6 md:px-8 pt-0 pb-8 h-full overflow-y-auto">
        <div>
          <h1 className="text-3xl leading-none text-balance tracking-tight font-bold mt-8">Orphos Design System</h1>
          <hr className="my-4" />
          <div className="flex gap-2">
            <Badge variant="warning" noHover>
              Work In Progress.
            </Badge>
            <Badge variant="info" noHover>
              v0
            </Badge>
          </div>
        </div>
        <ColorPalette />
        <div className="flex flex-col gap-6 items-start w-full">
          <h2 className="text-2xl font-bold leading-tight tracking-tight">Alert Dialog</h2>
          <div className="flex flex-col gap-10 items-start w-full">
            <AlertDialogDemo />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold leading-tight tracking-tight">Avatar</h2>
          <div className="flex flex-row flex-wrap gap-4 w-auto">
            <AvatarDemo />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold leading-tight tracking-tight">Badge</h2>
          <div className="flex flex-row flex-wrap gap-4 w-auto">
            <Badge noHover>Badge</Badge>
            <Badge noHover variant="primary">
              Badge
            </Badge>
            <Badge noHover variant="secondary">
              Badge
            </Badge>
            <Badge noHover variant="info">
              Badge
            </Badge>
            <Badge noHover variant="warning">
              Badge
            </Badge>
            <Badge noHover variant="destructive">
              Badge
            </Badge>
            <Badge noHover variant="success">
              Badge
            </Badge>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-auto items-start">
          <h2 className="text-2xl font-bold leading-tight tracking-tight">Button</h2>
          <ButtonsDemo />
          <ButtonDisabledDemo />
        </div>
        <div className="flex flex-col gap-6 w-auto items-start">
          <h2 className="text-2xl font-bold leading-tight tracking-tight">Callout</h2>
          <div className="flex flex-col gap-4 w-full max-w-xl">
            <CalloutDemo />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold leading-tight tracking-tight">Card</h2>
          <div className="flex flex-row gap-4 w-auto">
            <Card className={"w-[380px]"}>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>You have 3 unread messages.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full">Mark all as read</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start w-full">
          <h2 className="text-2xl font-bold leading-tight tracking-tight">Dialog</h2>
          <div className="flex flex-col gap-10 items-start w-full">
            <DialogDemo />
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start w-full">
          <h2 className="text-2xl font-bold leading-tight tracking-tight">Dropdown Menu</h2>
          <div className="flex flex-col gap-10 items-start w-full">
            <DropdownDemo />
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start w-full">
          <h2 className="text-2xl font-bold leading-tight tracking-tight">Form</h2>
          <div className="flex flex-col gap-10 items-start w-full">
            <FormDemo />
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start w-full">
          <h2 className="text-2xl font-bold leading-tight tracking-tight">Form Components</h2>
          <div className="flex flex-col gap-10 items-start w-full max-w-4xl">
            <InputsDemo />
            <CheckboxDemo />
          </div>
        </div>
        <div className="flex flex-col gap-6 w-auto items-start">
          <h2 className="text-2xl font-bold leading-tight tracking-tight">Icon Button</h2>
          <IconButtonDemo />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold leading-tight tracking-tight">Separator</h2>
          <div className="flex flex-row gap-4 w-auto">
            <Separator />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold leading-tight tracking-tight">Sheet</h2>
          <div className="flex flex-row gap-4 w-auto">
            <SheetSide />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold leading-tight tracking-tight">Sidebar</h2>
          <div className="flex flex-row gap-4 w-auto">
            <SidebarTrigger />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold leading-tight tracking-tight">Skeleton</h2>
          <div className="flex flex-row gap-4 w-auto">
            <SkeletonDemo />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold leading-tight tracking-tight">Tabs</h2>
          <div className="flex flex-row gap-4 w-auto">
            <TabsDemo />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold leading-tight tracking-tight">Toast</h2>
          <div className="flex flex-row gap-4 w-auto">
            <ToastDemo />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold leading-tight tracking-tight">Tooltip</h2>
          <div className="flex flex-row gap-4 w-auto">
            <Tooltip delayDuration={250}>
              <TooltipTrigger asChild>
                <Button size="sm">Hover</Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={8} align="start">
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </section>
    </SidebarProvider>
  );
}

export { App };
