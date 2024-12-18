import { Badge } from "@theanalog/orphos/badge";
import { Button } from "@theanalog/orphos/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@theanalog/orphos/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@theanalog/orphos/tooltip";
import { AvatarDemo } from "./components/avatar";
import { CalloutDemo } from "./components/callout";
import { CheckboxDemo } from "./components/checkbox";
import { DropdownDemo } from "./components/dropdown";
import { FormDemo } from "./components/form";
import { InputsDemo } from "./components/inputs";
import { ColorPalette } from "./components/pallete";
import { Separator } from "@theanalog/orphos/separator";
import { SheetSide } from "./components/sheet";
import { SkeletonDemo } from "./components/skeleton";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@theanalog/orphos/sidebar";
import { AppSidebar } from "./components/sidebar";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <section className="flex flex-col flex-1 gap-20 px-4 md:px-8 pt-0 pb-8">
          <div>
            <h1 className="font-bold mt-8">Orphos Design System</h1>
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
          <div className="flex flex-col gap-4">
            <h2 className="">Avatar</h2>
            <div className="flex flex-row flex-wrap gap-4 w-auto">
              <AvatarDemo />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="">Badge</h2>
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
          <div className="flex flex-col gap-4 w-auto items-start">
            <h2 className="">Button</h2>
            <div className="flex flex-col gap-4 w-auto">
              <Button>Button text</Button>
              <Button variant="primary">Button text</Button>
              <Button variant="secondary">Button text</Button>
              <Button variant="ghost">Button text</Button>
              <Button variant="danger">Button text</Button>
              <Button variant="link">Button text</Button>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-auto items-start">
            <h2 className="">Callout</h2>
            <div className="flex flex-col gap-4 w-full max-w-xl">
              <CalloutDemo />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="">Card</h2>
            <div className="flex flex-row gap-4 w-auto">
              <Card className={"w-[380px]"}>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>You have 3 unread messages.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4"></CardContent>
                <CardFooter>
                  <Button className="w-full">Mark all as read</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start w-full">
            <h2 className="">Dropdown Menu</h2>
            <div className="flex flex-col gap-10 items-start w-full">
              <DropdownDemo />
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start w-full">
            <h2 className="">Form</h2>
            <div className="flex flex-col gap-10 items-start w-full">
              <FormDemo />
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start w-full">
            <h2 className="">Form Components</h2>
            <div className="flex flex-col gap-10 items-start w-full">
              <InputsDemo />
              <CheckboxDemo />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="">Separator</h2>
            <div className="flex flex-row gap-4 w-auto">
              <Separator />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="">Sheet</h2>
            <div className="flex flex-row gap-4 w-auto">
              <SheetSide />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="">Sidebar</h2>
            <div className="flex flex-row gap-4 w-auto">
              <SidebarTrigger />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="">Skeleton</h2>
            <div className="flex flex-row gap-4 w-auto">
              <SkeletonDemo />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="">Tooltip</h2>
            <div className="flex flex-row gap-4 w-auto">
              <Tooltip delayDuration={250}>
                <TooltipTrigger asChild>
                  <Button size="sm" variant="secondary">
                    Hover
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom" sideOffset={8} align="start">
                  <p>Add to library</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </section>
      </SidebarInset>
    </SidebarProvider>
  );
}

export { App };
